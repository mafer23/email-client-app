from email.message import EmailMessage

class Email:
    def __init__(self, recipient, sender, subject, body):
        self.recipient = recipient
        self.sender = sender
        self.subject = subject
        self.body = body

    def createEmail(self):
        message = EmailMessage()
        message['From'] = self.sender
        message['To'] = self.recipient
        message['Subject'] = self.subject 
        # Add the From: and To: headers at the start!
        msg = ("From: %s\r\nTo: %s\r\n\r\n"% (self.sender, ", ".join(self.recipient)))
        while True:
            try:
                line = input()
            except EOFError:
                break
            if not line:
                break
            msg = msg + line 
        message.set_content(msg) 
        return message

