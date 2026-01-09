from django.db import models

# Create your models here.
from django.db import models

class Registro(models.Model):
    casos_confirmados = models.IntegerField()
    mortes = models.IntegerField()
    estado = models.CharField(max_length=50, null=True, blank=True)
    pais = models.CharField(max_length=50)
    taxa_incidentes = models.FloatField(null=True, blank=True)
    taxa_letalidade = models.FloatField(null=True, blank=True)

    class Meta:
        db_table = 'registros'
