from flask import Flask, request, render_template, redirect, flash, session
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm

app = Flask(__name__)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:password@127.0.0.1:5432/pets_db"
# need to add username, password, and port
app.config[
    "SQLALCHEMY_TRACK_MODIFICATIONS"
] = False 
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "password"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def list_pets():
    pets = Pet.query.all()

    return render_template('pets.html', pets=pets)

@app.route('/add', methods=["GET","POST"])
def add_pet():
    """Pet adding form; handle adding"""
    form = AddPetForm()
    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data
        available = form.available.data
        pet = Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes, available=available)
        db.session.add(pet)
        db.session.commit()
        return redirect('/')
    else: 
        return render_template("add_pet_form.html", form=form)

@app.route('/pets/<int:id>/view', methods=["GET", "POST"])
def view_pet(id):
    pet = Pet.query.get_or_404(id)
    form = EditPetForm()

    return render_template("view_pet.html", pet=pet, form=form)

@app.route('/pets/<int:id>/edit', methods=["GET", "POST"])
def edit_pet(id):
    pet = Pet.query.get_or_404(id)
    form = EditPetForm()
    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data
        pet.notes = form.notes.data
        pet.available = form.available.data

        db.session.commit()
        return redirect('/')
    else:
        return render_template("view_pets.html", form=form, pet=pet)