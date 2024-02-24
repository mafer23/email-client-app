from flaskr.db import db
from sqlalchemy.orm import relationship, mapped_column
from sqlalchemy import Integer, String, ForeignKey, Text, TIMESTAMP
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema

# Class that represents the "User" table in the database
class User(db.Model):
    __tablename__ = 'User'

    # Columns declaration
    userId = mapped_column(Integer, primary_key=True, autoincrement=True)
    userName = mapped_column(String(20), unique=True, nullable=False)
    firstName = mapped_column(String(32), nullable=False)
    lasttName = mapped_column(String(32))
    password = mapped_column(String(255), nullable=False)

    # Retreives all 
    @classmethod
    def get_all_users(cls):
        statement = db.select(cls)
        users = db.session.execute(statement).scalars()
        user_schema = UserSchema()
        return user_schema.get_users(users)
    
    @classmethod
    def get_user_by_userName(cls, userName):
        statement = db.select(cls).filter_by(userName=userName)
        user = db.session.execute(statement).scalars()
        user_schema = UserSchema()
        return user_schema.get_users(user)
    

# Class that represents the n to n relationship betwen sender, receipt and email.
class UserEmail(db.Model):
    __tablename__ = 'UserEmail'

    userEmailId = mapped_column(Integer, primary_key=True, autoincrement=True)
    senderId = mapped_column(Integer, ForeignKey('User.userId'))
    recipentId = mapped_column(Integer, ForeignKey('User.userId'))
    emailId = mapped_column(Integer, ForeignKey('Email.emailId'))

    sender = relationship('User', foreign_keys=[senderId])
    recipent = relationship('User', foreign_keys=[recipentId])
    email = relationship('Email', back_populates='email_users')

    @classmethod
    def get_all(cls):
        statement = db.select(cls)
        useremails = db.session.execute(statement).scalars()
        user_email_schema = UserEmailSchema()
        return user_email_schema.get_users_emails(useremails)
    

# Class that represnts the "Email" table in database
class Email(db.Model):
    __tablename__ = 'Email'

    emailId = mapped_column(Integer, primary_key=True, autoincrement=True)
    subject = mapped_column(String(100), nullable=False)
    body = mapped_column(Text)
    createdAt = mapped_column(TIMESTAMP)

    email_users = relationship('UserEmail', back_populates='email')

    @classmethod
    def get_email_by_id(cls, emailId):
        statement = db.select(cls).filter_by(emailId=emailId)
        email = db.session.execute(statement).scalars()
        emal_schema = EmailSchema()
        return emal_schema.get_emails(email)
    
    @classmethod
    def get_user_received_emails(cls, userId):
        statement = db.select(cls).join(UserEmail, cls.emailId == UserEmail.emailId).where(UserEmail.recipentId == userId)
        emails = db.session.execute(statement).scalars()
        email_schema = EmailSchema()
        return email_schema.get_emails(emails)
    
    @classmethod
    def get_user_sent_emails(cls, userId):
        statement = db.select(cls).join(UserEmail, cls.emailId == UserEmail.emailId).where(UserEmail.senderId == userId)
        emails = db.session.execute(statement).scalars()
        email_schema = EmailSchema()
        return email_schema.get_emails(emails)
    
    @classmethod
    def get_all(cls):
        statement = db.select(cls)
        email = db.session.execute(statement).scalars()
        emal_schema = EmailSchema()
        return emal_schema.get_emails(email)
    
    @classmethod
    def save_email(cls, recipent, sender, subject, body):
        email = cls(subject=subject, body=body)
        email_users = UserEmail(recipentId=recipent, senderId=sender)
        email.email_users.append(email_users)
        db.session.add(email)
        db.session.commit()


"""
Here are the classes that automatically deserialize the 
information of each class that represents a database table.

Important: with these the information is always returned as 
an array of dicts, in which each dicht is like the row in db
"""

class UserSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = User
        include_relationships = True
        load_instance = True
    
    # Returns an array with formated information
    def get_users(self, users):
        return [self.dump(user) for user in users]
    

class UserEmailSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = UserEmail
        include_fk = True
        load_instane = True

    
    # Returns an array with formated information
    def get_users_emails(self, users_emails):
        return [self.dump(user_email) for user_email in users_emails]
    

class EmailSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Email
    
    # Returns an array with formated information
    def get_emails(self, emails):
        return [self.dump(email) for email in emails]