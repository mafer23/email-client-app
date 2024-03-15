from .models import User
from utils.Password import Password
from flask import Blueprint, jsonify, request

# Create a blueprint for authentication endpoints
bp = Blueprint("auth", __name__, url_prefix="/auth")


# Endpoint for user registration
@bp.route("/register", methods=(["POST"]))
def register():
    # Extract JSON data from request
    data = request.json

    # Check if data is provided
    if not data:
        return (jsonify({"status": "fail", "data": "No data was sent"}),)

    # Extract required fields from data
    username = data.get("username", None)
    firstname = data.get("firstname", None)
    lastname = data.get("lastname", None)
    password = data.get("password", None)

    # Validate required fields
    error = []
    if not username:
        error.append("Username is required")
    if not firstname:
        error.append("First name is required")
    if not lastname:
        error.append("Last name is required")
    if not password:
        error.append("Password is required.")

    # Return errors if any
    if len(error) != 0:
        print("longitud de error",len(error))
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            exist = User.get_user_by_userName(username)
        except:
            return (
                jsonify({"status": "error", "data": "Couldn't connect to the db"}),
                500,
            )
        # Check if user already exists
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
            # Hash the password
            hashed_password = Password.create_hashed_password(password)
            try:
                # Save user to the database
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


# Endpoint for user login
@bp.route("/login", methods=(["POST"]))
def login():
    # Extract JSON data from request
    data = request.json
    if not data:
        return jsonify({"status": "fail", "data": "No data was sent"}), 400
    username = data.get("username", None)
    password = data.get("password", None)
    error = []

    # Check if username and password are provided
    if not username:
        error.append("username was not provided")
    elif not password:
        error.append("password was not provided")

    # Return errors if any
    if len(error) != 0:
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            user = User.get_user_by_userName(username)
        except:
            return (
                jsonify({"status": "error", "data": "Couldn't connect to the db"}),
                500,
            )
        # Check if user exists
        if not user:
            return (
                jsonify(
                    {"status": "fail", "data": f"Username {username} is not registered"}
                ),
                400,
            )
        else:
            # Compare passwords
            db_password = user[0]["password"]
            is_match = Password.compare_passwords(password, db_password)
            if not is_match:
                return jsonify({"status": "fail", "data": "Wrong password"}), 400

    # Remove password from user data before sending response
    del user[0]["password"]
    return jsonify({"status": "success", "data": user[0]}), 200
