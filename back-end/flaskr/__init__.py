import os

import asyncio
from . import auth
from . import email
from flask import Flask, jsonify

from aiosmtpd.controller import Controller
from smtp.server import SMTPServer
from flaskr.db import db
from flaskr.models import User, UserEmail, Email


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
        SQLALCHEMY_DATABASE_URI='postgresql://postgres:abc123@localhost/test'
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # Initialize and configure the db connection
    db.init_app(app)
    with app.app_context():
        db.create_all()

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'
    
    # testing the connection with database
    @app.route('/testDB')
    def testDB():
        Email.save_email(recipent=2, sender=1, subject='Testeando desde la app', body='a')
        relationship_info = Email.get_user_sent_emails(1)
        

        return jsonify(relationship_info)


    app.register_blueprint(auth.bp)
    app.register_blueprint(email.bp)



    return app
