# 🦠 COVID-19 Dashboard – Full Stack Application

Este projeto é uma aplicação full stack desenvolvida como desafio técnico, com o objetivo de consumir dados de uma API pública de COVID-19, processá-los no backend e disponibilizá-los por meio de endpoints próprios, além de apresentá-los visualmente em um front-end interativo.

A aplicação foi totalmente **dockerizada**, permitindo que qualquer pessoa consiga executá-la localmente sem necessidade de configuração manual de ambiente.

---

## 📌 Tecnologias Utilizadas

### Backend
- Python 3.11
- Django
- Django REST Framework
- PostgreSQL
- Gunicorn

### Frontend
- Next.js (App Router)
- React
- TanStack React Query
- Tailwind CSS

### Infraestrutura
- Docker
- Docker Compose

---

## 🌐 API Externa Utilizada

Os dados são obtidos a partir da seguinte API pública:

https://coronavirus.m.pipedream.net/


Essa API fornece dados consolidados de COVID-19 por país e por estado/província, incluindo:
- Casos confirmados
- Mortes
- Taxa de incidência
- Taxa de letalidade

Os dados retornados por essa API **não são de autoria deste projeto** e são utilizados apenas para fins educacionais e demonstrativos.

---

## 🔌 Endpoints do Backend

### 1️⃣ Buscar dados por estado ou país (e salvar/atualizar no banco)

GET /api/covid/?query=<estado_ou_pais>

#### Comportamento:
- Busca os dados na API externa
- Filtra pelo estado ou país informado
- Se o registro **já existir no banco**, ele é **atualizado**
- Se não existir, é **criado**
- Retorna os dados processados

GET /api/covid/states/


#### Comportamento:
- Retorna todos os estados brasileiros
- Não realiza escrita no banco
- Os dados são apenas consumidos da API externa e normalizados

---

## 🗄️ Banco de Dados

O projeto utiliza **PostgreSQL** e mantém uma tabela de registros com os seguintes campos:

- Estado
- País
- Casos confirmados
- Mortes
- Taxa de incidência
- Taxa de letalidade

Os registros são identificados de forma única por **estado + país**, garantindo que dados duplicados não sejam criados.

---

## 🐳 Como rodar o projeto com Docker

### Pré-requisitos
- Docker
- Docker Compose (ou Docker Desktop)

---

### Passo a passo

1️⃣ Clone o repositório:
```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
```

2️⃣ Crie o arquivo .env na raiz do projeto (use como base o .env.example):

```bash
POSTGRES_DB=covid
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

2️⃣ Subir a aplicação:

docker compose up --build

