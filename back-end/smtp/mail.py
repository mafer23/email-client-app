from email.message import EmailMessage
from smtplib import SMTP as Client


class Email:
    def __init__(self, recipient, sender, subject, body):
        self.recipient = recipient
        self.sender = sender
        self.subject = subject
        self.body = body

    def createEmail(self):
        msg = EmailMessage()
        msg.set_content(self.body)
        msg["From"] = self.sender
        msg["To"] = self.recipient
        msg["Subject"] = self.subject
        return msg
