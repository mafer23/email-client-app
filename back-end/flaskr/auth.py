from .models import User

from utils.Password import Password

from flask import Blueprint, jsonify, request

bp = Blueprint("auth", __name__, url_prefix="/auth")


@bp.route("/register", methods=(["POST"]))
def register():
    data = request.json
    if not data:
        return (jsonify({"status": "fail", "data": "No data was sent"}),)
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

    if error is not None:
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            exist = User.get_user_by_userName(username)
        except:
            return (
                jsonify({"status": "error", "data": "Couldn't connect to the db"}),
                500,
            )
        if exist:
            return (
                jsonify(
                    {
                        "status": "fail",
                        "data": f"Username {username} already registered",
                    }
                ),
                400,
            )
        else:
            hashed_password = Password.create_hashed_password(password)
            try:
                User.save_user(username, firstname, lastname, hashed_password)
            except:
                return (
                    jsonify(
                        {
                            "status": "error",
                            "data": "An error has occurred saving the user",
                        }
                    ),
                    500,
                )

    return jsonify({"status": "success", "data": "You registered successfully"}), 201


@bp.route("/login", methods=(["POST"]))
def login():
    data = request.json
    if not data:
        return jsonify({"status": "fail", "data": "No data was sent"}), 400
    username = data["username"]
    password = data["password"]
    error = None

    if not username:
        error = "username was not provided"
    elif not password:
        error = "password was not provided"

    if error is not None:
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            user = User.get_user_by_userName(username)
        except:
            return (
                jsonify({"status": "error", "data": "Couldn't connect to the db"}),
                500,
            )
        if not user:
            return (
                jsonify(
                    {"status": "fail", "data": f"Username {username} is not registered"}
                ),
                400,
            )
        else:
            db_password = user[0]["password"]
            is_match = Password.compare_passwords(password, db_password)
            if is_match:
                del user[0]["password"]
                return jsonify({"status": "success", "data": user[0]}), 200
            else:
                return jsonify({"status": "fail", "data": "Wrong password"}), 400
