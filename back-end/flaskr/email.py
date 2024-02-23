from flask import Blueprint, flash, g, redirect, render_template, request, url_for
from werkzeug.exceptions import abort

from flaskr.db import get_db
import smtp
from smtp.client import SMTPClient
from smtp.mail import Email
from smtplib import SMTP as Client

bp = Blueprint("email", __name__, url_prefix="/email")


@bp.route("/")
def index():
    return "Test"

@bp.route("/get", methods=(["GET"]))
def get():
    if request.method == "GET":
        email = request.args.get('email')

        # Get messages from the mailbox(TODO)

        # Get messages from the db

        
    return "Get the emails from the db"




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
            try:
                msg = Email(recipient, sender, subject, body).createEmail()  
            except:
                return ValueError("Message creation failed!")
            try: 
                smtp_client = SMTPClient()
                smtp_client.sendEmail(msg)
            except:
                return ValueError()
             
    return "Message sent successfully!"
