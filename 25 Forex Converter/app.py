from flask import Flask, request, render_template, redirect, flash
from forex_python.converter import CurrencyRates, CurrencyCodes
from decimal import Decimal

app = Flask(__name__)

app.config["SECRET_KEY"] = "password"


@app.route("/")
def home_page():
    """Direct to index"""
    return render_template("index.html")


# list of currencies
CURRENCIES = [
    "EUR",
    "JPY",
    "BGN",
    "CZK",
    "DKK",
    "GBP",
    "HUF",
    "PLN",
    "RON",
    "SEK",
    "CHF",
    "ISK",
    "NOK",
    "HRK",
    "TRY",
    "AUD",
    "BRL",
    "CAD",
    "CNY",
    "HKD",
    "IDR",
    "INR",
    "KRW",
    "MXN",
    "MYR",
    "NZD",
    "PHP",
    "SGD",
    "THB",
    "ZAR",
    "USD",
]

rates = CurrencyRates()
codes = CurrencyCodes()


@app.route("/index/convert", methods=["GET", "POST"])
def convert_currency():
    """Get data, send to API and convert currency while checking for input errors"""
    convert_from = request.form["convert_from"].upper()
    convert_to = request.form["convert_to"].upper()
    amount = request.form["amount"]

    if convert_from not in CURRENCIES:
        flash(f"{convert_from} is not a valid currency!", "error")

    if convert_to not in CURRENCIES:
        flash(f"{convert_to} is not a valid currency!", "error")

    try:
        int(amount)
    except ValueError:
        flash("That is not a valid amount!", "error")

    if convert_from and convert_to in CURRENCIES:
        result = round(rates.convert(convert_from, convert_to, Decimal(amount)), 2)
        from_sym = codes.get_symbol(convert_from)
        to_sym = codes.get_symbol(convert_to)

        flash(
            f"{from_sym}{amount} in {convert_from} equals to {to_sym}{result} in {convert_to}.",
            "success",
        )

    return redirect("/")
