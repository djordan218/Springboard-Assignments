from flask import Flask, request, render_template, redirect, flash
from surveys import satisfaction_survey as survey

# satisfaction_survey = Survey(
#     "Customer Satisfaction Survey",
#     "Please fill out a survey about your experience with us.",
#     [
#         Question("Have you shopped here before?"),
#         Question("Did someone else shop with you today?"),
#         Question(
#             "On average, how much do you spend a month on frisbees?",
#             ["Less than $10,000", "$10,000 or more"],
#         ),
#         Question("Are you likely to shop here again?"),
#     ],
# )

app = Flask(__name__)
app.config["SECRET_KEY"] = "password"

responses = []

# root page on index with "start button"
# survey=survey is passing in data from the surveys.py
@app.route("/")
def show_survey_start():
    return render_template("index.html", survey=survey)


# /begin redirects to /questions/0 when sending a post request on user click of start btn
@app.route("/begin", methods=["POST"])
def start_survey():
    return redirect("/questions/0")


# runs through if statements if any are true they redirect to other pages
# question=survey list index
@app.route("/questions/<int:qid>")
def show_question(qid):
    """Display current question."""

    if responses is None:
        # trying to access question page too soon
        return redirect("/")

    if len(responses) == len(survey.questions):
        # They've answered all the questions! Thank them.
        return redirect("/complete")

    if len(responses) != qid:
        # Trying to access questions out of order.
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")

    question = survey.questions[qid]
    return render_template("questions.html", question_num=qid, question=question)


@app.route("/answer", methods=["POST"])
def handle_question():
    """Save response and redirect to next question."""

    # get the response choice and append to list
    choice = request.form["answer"]
    responses.append(choice)

    if len(responses) == len(survey.questions):
        # They've answered all the questions! Thank them.
        return redirect("/complete")

    else:
        return redirect(f"/questions/{len(responses)}")


@app.route("/complete")
def complete():
    """Survey complete. Show completion page."""

    return render_template("completion.html")
