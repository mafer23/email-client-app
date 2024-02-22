from flask import Blueprint, flash, g, redirect, render_template, request, url_for
from werkzeug.exceptions import abort

# from flaskr.auth import login_required
from flaskr.db import get_db
from smtp.email import Email

bp = Blueprint("email", __name__, url_prefix="/email")


@bp.route("/")
def index():
    return "Hola"


@bp.route("/send", methods=(["POST"]))
def send():
    if request.method == "POST":
        data = request.json  
        sender = data["sender"]
        recipient = data["recipient"]
        subject = data["subject"]
        body = data["body"]

        error = None
        if not recipient:
            error = "recipient is required."
        if not subject:
            error = "subject is required"
        if not body:
            error = "body is required"
        if error is not None:
            flash(error)
        else: 
            email = Email(recipient, sender, subject, body) 
            print(email)
            return {"msg":"Message sent succesfully"}
             

    return "Message noasdf"
