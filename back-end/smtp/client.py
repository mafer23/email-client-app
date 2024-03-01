from smtplib import SMTP as Client

class SMTPClient:
    """
    A simple SMTP client for sending email messages
    utilizing the smtplib module from the Python Standard Library.

    Attributes:
        client: The SMTP client instance.

    Methods:
        sendEmail: Sends an email message using the SMTP client.

    """

    def __init__(self):
        """
        Initializes an SMTPClient object.

        Args:
            None

        Returns:
            None

        """
        self.client = Client("localhost", 8025)

    def sendEmail(self, msg):
        """
        Sends an email message using the SMTP client.

        Args:
            msg: The email message to be sent.

        Returns:
            ValueError: If the message sending fails.

        """
        try:
            self.client.send_message(msg)
        except:
            return ValueError("Couldn't send message")

