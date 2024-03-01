from email.message import EmailMessage

class Email:
    """
    A class that handles the creating of email messages utilizing the 
    email library from the Python Standard Library.


    Attributes:
        recipient (str): The recipient email address.
        sender (str): The sender email address.
        subject (str): The subject of the email.
        body (str): The body content of the email.

    Methods:
        createEmail: Creates an EmailMessage object based on the provided attributes.

    """

    def __init__(self, recipient, sender, subject, body):
        """
        Initializes an Email object.

        Args:
            recipient (str): The recipient email address.
            sender (str): The sender email address.
            subject (str): The subject of the email.
            body (str): The body content of the email.

        Returns:
            None

        """
        self.recipient = recipient
        self.sender = sender
        self.subject = subject
        self.body = body

    def createEmail(self):
        """
        Creates an EmailMessage object based on the provided attributes.

        Returns:
            EmailMessage: The created EmailMessage object.

        """
        msg = EmailMessage()
        msg.set_content(self.body)
        msg["From"] = self.sender
        msg["To"] = self.recipient
        msg["Subject"] = self.subject
        return msg
