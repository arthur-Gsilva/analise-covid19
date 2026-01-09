import requests

API_URL = "https://coronavirus.m.pipedream.net/"

def fetch_covid_data():
    response = requests.get(API_URL, timeout=10)
    response.raise_for_status()
    return response.json()["rawData"]
