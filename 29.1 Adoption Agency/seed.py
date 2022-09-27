
from models import db, Pet
from app import app

db.drop_all()
db.create_all()

# d1 = Department(dept_code="mktg", dept_name="Marketing", phone="897-9999")
# d2 = Department(dept_code="acct", dept_name="Accounting", phone="111-5429")
# d3 = Department(dept_code="r&d", dept_name="Research & Development", phone="814-4039")
# d4 = Department(dept_code="sales", dept_name="Sales", phone="111-1111")
# d5 = Department(dept_code="it", dept_name="Information Technology", phone="698-4986")

# river = Employee(name="River Bottom", state="NY", dept_code="mktg")
# joaquin = Employee(name="Joaquin Phoenix", dept_code="acct")
# summer = Employee(name="Summer Winter", state="OR", dept_code="mktg")
# octavia = Employee(name="Octavia Spencer", dept_code="r&d")
# larry = Employee(name="Larry David", state="NY", dept_code="r&d")
# kurt = Employee(name="Kurt Cobain", state="WA", dept_code="it")
# rain = Employee(name="Rain Phoenix", dept_code="it")
# freelancer = Employee(name="freelancer mcgee")

# db.session.add_all([d1,d2,d3,d4,d5])
# db.session.add(d1)
# db.session.add(d2)
# db.session.add(d3)
# db.session.add(d4)
# db.session.commit()

# db.session.add_all([river, joaquin, summer, octavia, larry, kurt, rain, freelancer])
# db.session.add(river)
# db.session.add(joaquin)
# db.session.add(summer)
# db.session.add(octavia)
# db.session.add(larry)
# db.session.add(kurt)
# db.session.add(rain)
# db.session.commit()


Pet.query.delete()

# Add sample employees and departments
pet1 = Pet(name='Scooby', species='Basset Hound', age=10, available=True)
pet2 = Pet(name='Bella', species='Chihuahua', age=8, available=False)
pet3 = Pet(name='Hope', species='Cutie', age=11, available=True)

db.session.add_all([pet1, pet2, pet3])
db.session.commit()
