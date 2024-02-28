from flask import (
    Blueprint,
    jsonify,
    request,
)
from werkzeug.exceptions import abort

from .models import Email as EmailModel
from .models import User as UserModel
from smtp.mail import Email
from smtp.client import SMTPClient

bp = Blueprint("email", __name__, url_prefix="/email")


@bp.route("/user", methods=(["GET"]))
def get_emails_user():
    user_id = request.args.get("user_id")
    if not user_id:
        return jsonify({"status": "fail", "data": "user_id is required"}), 400
    try:
        sent = EmailModel.get_user_sent_emails(user_id)
        received = EmailModel.get_user_received_emails(user_id)
    except:
        return (
            jsonify(
                {
                    "status": "error",
                    "data": "An error has occurred retrieving user's emails",
                }
            ),
            500,
        )
    if len(sent) is not 0:
        for i in range(len(sent)):
            del sent[i]["user"]["password"]
    if len(received) is not 0:
        for i in range(len(received)):
            del received[i]["user"]["password"]

    return jsonify({"status": "success", "data": {"sent": sent, "received": received}}), 200


@bp.route("/users", methods=(["GET"]))
def get_all_emails():
    try:
        users = UserModel.get_all_users()
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
def send_email():
    data = request.json
    if not data:
        return jsonify({"status": "fail", "data": "No data was sent"}), 400
    sender = data.get("sender", None)
    recipient = data.get("recipient", None)
    subject = data.get("subject", None)
    body = data.get("body", None)

    error = []
    if not sender:
        error.append("Sender field is required")
    if not recipient:
        error.append("Recipient field is required.")
    if not subject:
        error.append("Subject field is required")
    if not body:
        error.append("Body field is required")
    # 'if not error:' doesn't seem to work for some reason
    if len(error) is not 0:
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            sender_data = UserModel.get_user_by_userId(sender)
            recipient_data = UserModel.get_user_by_userId(recipient)
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
            email = EmailModel.save_email(recipient, sender, subject, body)
            del sender_data[0]["password"]
            del recipient_data[0]["password"]
            return (
                jsonify(
                    {
                        "status": "success",
                        "data": {
                            "email": email,
                            "sender": sender_data,
                            "recipient": recipient_data,
                        },
                    }
                ),
                201,
            )
        except:
            return (
                jsonify({"status": "error", "data": "Error saving the message"}),
                500,
            )
