# covid/utils.py
def filter_by_query(data, query):
    query_lower = query.lower()

    for item in data:
        if item.get("Province_State", "").lower() == query_lower:
            return item

    for item in data:
        if item.get("Country_Region", "").lower() == query_lower:
            return item

    return None
