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

# Create a blueprint for email-related routes
bp = Blueprint("email", __name__, url_prefix="/email")


# Endpoint to get emails sent and received for a specific user
@bp.route("/email/user", methods=(["GET"]))
def get_user_emails():
    user_id = request.args.get("user_id")
    # Check if user_id is provided
    if not user_id:
        return jsonify({"status": "fail", "data": "user_id is required"}), 400
    try:
        # Retrieve sent and received emails for the user
        sent = EmailModel.get_user_sent_emails(user_id)
        received = EmailModel.get_user_received_emails(user_id)
    except:
        # Handle errors in retrieving emails
        return (
            jsonify(
                {
                    "status": "error",
                    "data": "An error has occurred retrieving user's emails",
                }
            ),
            500,
        )
        # Remove passwords from user data
    if len(sent) != 0:
        for i in range(len(sent)):
            del sent[i]["user"]["password"]
    if len(received) != 0:
        for i in range(len(received)):
            del received[i]["user"]["password"]
    # Return the emails

    return (
        jsonify({"status": "success", "data": {"sent": sent, "received": received}}),
        200,
    )


# Endpoint to get all users
@bp.route("/users", methods=(["GET"]))
def get_all_users():
    try:
        # Retrieve all users
        users = UserModel.get_all_users()
    except:
        # Handle errors in retrieving users
        return (
            jsonify(
                {
                    "status": "error",
                    "data": "An error has occurred retrieving the users",
                }
            ),
            500,
        )
    # Remove passwords from user data
    if not users:
        return jsonify({"status": "success", "data": users}), 200
    else:
        for i in range(len(users)):
            del users[i]["password"]
        return jsonify({"status": "success", "data": users}), 200


# Endpoint to send an email
@bp.route("/send", methods=(["POST"]))
def send_email():
    data = request.json
    # Check if data is provided
    if not data:
        return jsonify({"status": "fail", "data": "No data was sent"}), 400
    sender = data.get("sender", None)
    recipient = data.get("recipient", None)
    subject = data.get("subject", None)
    body = data.get("body", None)

    error = []
    # Validate required fields
    if not sender:
        error.append("Sender field is required")
    if not recipient:
        error.append("Recipient field is required.")
    if not subject:
        error.append("Subject field is required")
    if not body:
        error.append("Body field is required")
    # 'if not error:' doesn't seem to work for some reason
    if len(error) != 0:
        return jsonify({"status": "fail", "data": error}), 400
    else:
        try:
            # Retrieve sender and recipient data
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
            # Create email message
            msg = Email(recipient, sender, subject, body).createEmail()
        except:
            return jsonify({"status": "error", "data": "Message creation failed"}), 500
        try:
            # Send email
            smtp_client = SMTPClient()
            smtp_client.sendEmail(msg)
        except:
            return (
                jsonify({"status": "error", "data": "Error sending the message"}),
                500,
            )
        try:
            # Save email

            email = EmailModel.save_email(recipient, sender, subject, body)
            # Remove passwords from user data
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
