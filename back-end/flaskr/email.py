from flask import (
    Blueprint,
    flash, 
    jsonify,
    request, 
)
from werkzeug.exceptions import abort

from .models import Email as EmailModel
from .models import User as UserModel
from smtp.mail import Email
from smtp.client import SMTPClient

bp = Blueprint("email", __name__, url_prefix="/email")


@bp.route("/get", methods=(["GET"]))
def get():
    email = request.args.get("email")

    emails = EmailModel.get_all()
    if not emails:
        return "You have 0 emails"
    else:
        return jsonify(emails)


@bp.route("/send", methods=(["POST"]))
def send():
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
            sender_data = UserModel.get_user_by_userId(sender)
            recipient_data = UserModel.get_user_by_userId(recipient) 
            if not sender_data:
                return "Sender email does not exist!"
            elif not recipient_data:
                return "Recipient email does not exist!"
        except ValueError as str:
            return str
        try:
            msg = Email(recipient, sender, subject, body).createEmail()
        except:
            return ValueError("Message creation failed!")
        try:
            smtp_client = SMTPClient()
            smtp_client.sendEmail(msg)
        except:
            return ValueError("Error sending the message")
        try:
            EmailModel.save_email(recipient_data[0]["id"], sender, subject, body)
        except ValueError as str: 
            return str

    return "Message sent successfully!"
