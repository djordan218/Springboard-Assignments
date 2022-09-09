# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)


@app.route("/")  # this is the home or default root page
def home_page():
    html = """ 
    <html>
        <body>
            <h1>HOME PAGE</h1>
            <h3>Wanna do some math?</h3>
        </body>
    <html>
    """
    return html


@app.route("/add")
def addition():
    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = add(a, b)

    return str(result)


@app.route("/sub")
def subtract():
    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = sub(a, b)

    return str(result)


@app.route("/mult")
def multiply():
    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = mult(a, b)

    return str(result)


@app.route("/div")
def division():
    a = int(request.arg.get("a"))
    b = int(request.arg.get("b"))
    result = div(a, b)

    return str(result)


operators = {"add": add, "sub": sub, "mult": mult, "div": div}


@app.route("/math/<oper>")
def do_math(oper):
    """Do math on a and b."""

    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)
