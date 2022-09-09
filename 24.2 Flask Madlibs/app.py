from flask import Flask, request, render_template
from stories import story

app = Flask(__name__)


@app.route("/")  # this is the home or default root page
def home_page():
    return render_template("base.html")


@app.route("/madlib")
def generate_madlib():
    place = request.args["place"]
    noun = request.args["noun"]
    verb = request.args["verb"]
    adjective = request.args["adjective"]
    plural_noun = request.args["plural_noun"]
    return render_template(
        "madlib.html",
        place=place,
        noun=noun,
        verb=verb,
        adjective=adjective,
        plural_noun=plural_noun,
    )
