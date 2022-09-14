from boggle import Boggle
from flask import Flask, request, render_template, jsonify, session

app = Flask(__name__)
app.config["SECRET_KEY"] = "password"

boggle_game = Boggle()
# setting variable for Boggle class in boggle.py


@app.route("/")
def homepage():
    """Show board."""

    board = boggle_game.make_board()
    session["board"] = board
    # saving the BOGGLE board to session/cookies
    highscore = session.get("highscore", 0)
    # getting high score from previous plays
    nplays = session.get("nplays", 0)
    # getting number of plays from cookies

    return render_template(
        "index.html", board=board, highscore=highscore, nplays=nplays
    )
    # sending data to index.html with board, highscore, nplays so we can use it for JS


@app.route("/check-word")
def check_word():
    """Check if word is in dictionary."""
    word = request.args["word"]
    # getting value from text input with name="word" in index.html
    board = session["board"]
    response = boggle_game.check_valid_word(board, word)
    # taking the word input and checking word.txt to see if it contains it in the "dictionary"

    return jsonify({"result": response})


@app.route("/post-score", methods=["POST"])
def post_score():
    """Receive score, update nplays, update high score if appropriate."""

    score = request.json["score"]
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    session["nplays"] = nplays + 1
    session["highscore"] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore)
