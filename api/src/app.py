from datetime import datetime
from typing import TypedDict

from fastapi import FastAPI, Form, status
from fastapi.responses import RedirectResponse, JSONResponse

from services.database import JSONDatabase

from datetime import timedelta


app = FastAPI()


class Quote(TypedDict):
    name: str
    message: str
    time: str


database: JSONDatabase[list[Quote]] = JSONDatabase("data/database.json")


@app.on_event("startup")
def on_startup() -> None:
    """Initialize database when starting API server."""
    if "quotes" not in database:
        print("Adding quotes entry to database")
        database["quotes"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    """Close database when stopping API server."""
    database.close()


@app.post("/quote")
def post_message(name: str = Form(), message: str = Form()) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function except for the return value.
    """
    now = datetime.now().replace(microsecond=0)

    quote = Quote(name=name, message=message, time=now.isoformat())
    database["quotes"].append(quote)

    # You may modify the return value as needed to support other functionality
    return RedirectResponse("/", status.HTTP_303_SEE_OTHER)


# TODO: add another API route with a query parameter to retrieve quotes based on max age
@app.get('/quotes')
def get_mess(time: str):

    age = 0

    if time == 'week':
        age = 7

    elif time == 'month':
        age = 30

    else:
        return JSONResponse([quote for quote in database["quotes"]])

    current = datetime.now()
    diff = current - timedelta(days=age)

    db_quotes = [quote for quote in database["quotes"] if datetime.strptime(
        quote["time"], "%Y-%m-%dT%H:%M:%S") >= diff]

    return JSONResponse(db_quotes)
