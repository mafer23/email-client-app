from .models import User

from utils.Password import Password

from flask import Blueprint, jsonify, request

bp = Blueprint("auth", __name__, url_prefix="/auth")


@bp.route("/register", methods=(["POST"]))
def register():
    data = request.json
    if not data:
        return "No data was sent"
    username = data["username"]
    firstname = data["firstname"]
    lastname = data["lastname"]
    password = data["password"]

    error = None

    if not username:
        error = "Username is required"
    elif not firstname:
        error = "First name is required"
    elif not lastname:
        error = "Last name is required"
    elif not password:
        error = "Password is required."

    if error is None:
        try:
            exist = User.get_user_by_userName(username)
        except:
            return ValueError("Couldn't connect to the db")
        if exist:
            return ValueError(f"Username {username} already registered")
        else:
            hashed_password = Password.create_hashed_password(password)
            try:
                User.save_user(username, firstname, lastname, hashed_password)
            except ValueError:
                return ValueError
    else:
        return error

    return "You registered succesfully", 202


@bp.route("/login", methods=(["POST"]))
def login():
    data = request.json
    if not data:
        return "No data was sent"
    username = data["username"]
    password = data["password"]
    error = None

    if error is None:
        try:
            user = User.get_user_by_userName(username)
        except:
            return "Couldn't connect to the db"
        if not user:
            return f"Username {username} is not registered"
        else: 
            db_password = user[0]["password"]
            is_match = Password.compare_passwords(password, db_password)
            if is_match:
                del user[0]["password"]
                return jsonify(user)
            else:
                return "Wrong password"

    return "You are successfully logged in"
