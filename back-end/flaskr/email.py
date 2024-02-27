from flask import (
    Blueprint,
    flash,
    jsonify,
    request,
)
from werkzeug.exceptions import abort

from .models import Email as EmailModel, User
from .models import User as UserModel
from smtp.mail import Email
from smtp.client import SMTPClient

bp = Blueprint("email", __name__, url_prefix="/email")


@bp.route("/users", methods=(["GET"]))
def get():
    try:
        users = User.get_all_users()
    except:
        return (
            jsonify(
                {
                    "status": "error",
                    "data": "An error has occurred retrieving the users",
                }
            ),
            500,
        )

    if not users:
        return jsonify({"status": "success", "data": users}), 200
    else:
        for i in range(len(users)):
            del users[i]["password"]
        return jsonify({"status": "success", "data": users}), 200


@bp.route("/send", methods=(["POST"]))
def send():
    data = request.json
    sender = data["sender"]
    recipient = data["recipient"]
    subject = data["subject"]
    body = data["body"]

    error = None
    if not sender:
        error = "sender is required"
    if not recipient:
        error = "recipient is required."
    if not subject:
        error = "subject is required"
    if not body:
        error = "body is required"
    if error is not None:
        return jsonify({"status": "fail", "data": error}), 400

    else:
        try:
            sender_data = UserModel.get_user_by_userName(sender)
            recipient_data = UserModel.get_user_by_userName(recipient)
            if not sender_data:
                return (
                    jsonify({"status": "fail", "data": "Sender email does not exist"}),
                    400,
                )
            elif not recipient_data:
                return (
                    jsonify(
                        {"status": "fail", "data": "Recipient email does not exist"}
                    ),
                    400,
                )
        except ValueError as str:
            return str
        try:
            msg = Email(recipient, sender, subject, body).createEmail()
        except:
            return jsonify({"status": "error", "data": "Message creation failed"}), 500
        try:
            smtp_client = SMTPClient()
            smtp_client.sendEmail(msg)
        except:
            return (
                jsonify({"status": "error", "data": "Error sending the message"}),
                500,
            )
        try:
            EmailModel.save_email(
                recipient_data[0]["userId"], sender_data[0]["userId"], subject, body
            )
        except:
            return (
                jsonify({"status": "error", "data": "Error saving the message"}),
                500,
            )

    return jsonify({"status": "success", "data": "Message sent successfully"}), 201
