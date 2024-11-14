import flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()
migrate = Migrate()


def connect_db(app: flask.Flask) -> flask.Flask:
    """
    Wraps logic into a function connecting app to database
    """
    db.app = app
    db.init_app(app)
    migrate.init_app(app, db)
    return app


class User(db.Model):
    """
    Database model for users
    """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    token = db.Column(db.String(256), nullable=True)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<User {self.username}>"
    

class Person(db.Model):
    """
    Database model for people
    """
    __tablename__ = 'people'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    rank = db.Column(db.String(50), nullable=False)
    MOS = db.Column(db.String(4), nullable=True)
    age = db.Column(db.Integer, nullable=False)

