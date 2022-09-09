from flask import Flask, request

app = Flask(__name__)


@app.route("/")  # this is the home or default root page
def home_page():
    html = """ 
    <html>
        <body>
            <h1>GREET TO MEET YOU.</h1>
            <h3>Here are your choices:</h3>
            <a href="/welcome">Welcome</a>
            <a href="/welcome/home">Welcome Home.</a>
            <a href="/welcome/back">Welcome Back.</a>
        </body>
    <html>
    """
    return html


@app.route("/welcome")
def welcome():
    html = """ 
    <html>
        <body>
            <h1>WELCOME.</h1>
            <a href="/">Take me back home.</a>
        </body>
    <html>
    """
    return html


@app.route("/welcome/home")
def welcome_home():
    html = """ 
    <html>
        <body>
            <h1>WELCOME HOME</h1>
            <a href="/">Take me back home.</a>
        </body>
    <html>
    """
    return html


@app.route("/welcome/back")
def welcome_back():
    html = """ 
    <html>
        <body>
            <h1>WELCOME BACK.</h1>
            <a href="/">Take me back home.</a>
        </body>
    <html>
    """
    return html
