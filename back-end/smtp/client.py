from smtplib import SMTP as Client


class SMTPClient:
    def __init__(self):
        self.client = Client("localhost", 8025)

    def sendEmail(self, msg):
        try:
            self.client.send_message(msg)
        except:
            return ValueError("Couldn't send message")
