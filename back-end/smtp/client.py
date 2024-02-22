import smtplib

class SMTPClient:
    def __init__(self, host):
        self.host = host
        self.server = None
        
    def createServer(self):
        self.server = smtplib.SMTP('localhost')
        self.server.set_debuglevel(1)
        
    def sendEmail(self, email):
        self.server.send_message(email)

        
    def closeServer(self):
        self.server.quit() 
