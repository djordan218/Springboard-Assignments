from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

# models go below!

class Pet(db.Model):
    """Pet Model"""

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(db.Text, nullable=True)
    available = db.Column(db.Boolean, nullable=False, default=True)

# class Employee(db.Model):
#     """Employee Model"""

#     __tablename__ = "employees"

#     id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     name = db.Column(db.Text, nullable=False, unique=True)
#     state = db.Column(db.Text, nullable=False, default='CA')
#     dept_code = db.Column(db.Text, db.ForeignKey('departments.dept_code'))

#     # sets up a dept attribute on each instance of Employee
#     # SQLA will populate it with data from the departments table automatically
#     dept = db.relationship('Department', backref='employees')

#     projects = db.relationship('Project', secondary="employees_projects", backref="employees")

#     assignments = db.relationship('EmployeeProject', backref='employee')

#     def __repr__(self):
#         return f"<Employee {self.name} {self.state} {self.dept_code}>"


# class Project(db.Model):
#     """Project. Employees can be assigned to this"""

#     __tablename__ = "projects"

#     proj_code = db.Column(db.Text, primary_key=True)
#     proj_name = db.Column(db.Text, nullable=False, unique=True)

#     assignments = db.relationship('EmployeeProject', backref='project')



# class EmployeeProject(db.Model):
#     """Mapping of an employee to a project"""

#     __tablename__ = "employees_projects"

#     emp_id = db.Column(db.Integer, db.ForeignKey("employees.id"), primary_key=True)
#     proj_code = db.Column(db.Text, db.ForeignKey("projects.proj_code"), primary_key=True)
#     role = db.Column(db.Text)


    


# def get_directory():
#     """Returns data from Employee table that has foreign key of Department"""
#     all_emps = Employee.query.all()

#     for emp in all_emps:
#         if emp.dept is not None:
#             print(emp.name, emp.dept.dept_name, emp.dept.phone)
#         else:
#             print(emp.name)
            
# def get_directory_join():
#     """Returns the same as above but with easier syntax and using .join operator"""
#     directory = db.session.query(Employee.name, Department.dept_name, Department.phone).join(Department).all()

#     for name, dept, phone in directory:
#         print(name, dept, phone)

# def get_directory_join_class():
#     """This does the same thing as get_directory_join but gives access to all functions and data in both tables"""
#     directory = db.session.query(Employee, Department).join(Department).all()

#     for emp, dept in directory:
#         print(emp.name, dept.dept_name, dept.phone)

# def get_directory_all_join():
#     """Returns the same as above but with easier syntax and using .join operator"""
#     directory = db.session.query(Employee.name, Department.dept_name, Department.phone).outerjoin(Department).all()

#     for name, dept, phone in directory:
#         print(name, dept, phone)