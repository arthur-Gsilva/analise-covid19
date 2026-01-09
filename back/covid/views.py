from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Registro
from .services import fetch_covid_data
from .utils import filter_by_query

class CovidView(APIView):
    def get(self, request):
        query = request.query_params.get("query")

        if not query:
            return Response(
                {"error": "Informe um estado ou país"},
                status=status.HTTP_400_BAD_REQUEST
            )

        data = fetch_covid_data()
        result = filter_by_query(data, query)

        if not result:
            return Response(
                {"error": "Estado ou país não encontrado"},
                status=status.HTTP_404_NOT_FOUND
            )

        registro, created = Registro.objects.update_or_create(
            estado=result.get("Province_State") or None,
            pais=result.get("Country_Region"),
            defaults={
                "casos_confirmados": int(result.get("Confirmed") or 0),
                "mortes": int(result.get("Deaths") or 0),
                "taxa_incidentes": float(result.get("Incident_Rate") or 0),
                "taxa_letalidade": float(result.get("Case_Fatality_Ratio") or 0),
            }
        )

        return Response({
            "estado": registro.estado,
            "pais": registro.pais,
            "casos_confirmados": registro.casos_confirmados,
            "mortes": registro.mortes,
            "taxa_incidentes": registro.taxa_incidentes,
            "taxa_letalidade": registro.taxa_letalidade,
            "criado": created,
        })

class BrasilEstadosView(APIView):
    def get(self, request):
        data = fetch_covid_data()

        estados_brasil = []

        for item in data:
            if (
                item.get("Country_Region") == "Brazil"
                and item.get("Province_State")
            ):
                estados_brasil.append({
                    "estado": item.get("Province_State"),
                    "pais": "Brazil",
                    "casos_confirmados": int(item.get("Confirmed") or 0),
                    "mortes": int(item.get("Deaths") or 0),
                    "taxa_incidentes": float(item.get("Incident_Rate") or 0),
                    "taxa_letalidade": float(item.get("Case_Fatality_Ratio") or 0),
                    "latitude": float(item.get('Lat')),
                    "longitude": float(item.get('Long_'))
                })

        if not estados_brasil:
            return Response(
                {"error": "Nenhum estado do Brasil encontrado"},
                status=status.HTTP_404_NOT_FOUND
            )

        return Response(estados_brasil)
