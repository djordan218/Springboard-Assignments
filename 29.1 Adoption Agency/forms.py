from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, BooleanField, IntegerField, RadioField, SelectField, URLField
from wtforms.validators import InputRequired, Optional, Email

class AddPetForm(FlaskForm):
    """Form for adding a pet"""

    name = StringField("Pet Name", validators=[InputRequired(message="Pet Name can't be blank.")])
    species = StringField("Species", validators=[InputRequired(message="Species can't be blank.")])
    photo_url = URLField("Photo URL")
    age = IntegerField("Age")
    notes = StringField("Notes")
    available = BooleanField("Available?")

class EditPetForm(FlaskForm):
    """Form for editing a pet"""

    photo_url = URLField("Photo URL")
    notes = StringField("Notes")
    available = BooleanField("Available?")


# class EmployeeForm(FlaskForm):
#     """Add employee from form"""

#     name = StringField("Employee Name", validators=[InputRequired(message="Name cannot be blank")])
#     state = SelectField("State", choices=[(st, st) for st in states])
#     dept_code = SelectField("Department Code", choices=[('fin','Finance'), ('mktg', 'Marketing'), ('legal', 'Legal')])