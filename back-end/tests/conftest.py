import pytest
from flaskr import create_app
from flaskr.db import db
from flaskr.models import User, UserSchema, Email


"""
Fixture that setups an app instance to run the tests
"""
@pytest.fixture
def app():
    test_config = {
        "SQLALCHEMY_DATABASE_URI" : "sqlite:///test_DB.sqlite3",
    }
    
    app = create_app(test_config)

    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()


    return app

@pytest.fixture
def client(app):
    return app.test_client()

@pytest.fixture
def user_one(app):
    user = User(userName='userTest1', firstName='unit', lastName='testing', password='123456') 
    try:
        db.session.add(user) 
        db.session.commit()
    except:
        db.session.close()
        raise SystemError('Something went wrong with db')
    return user

@pytest.fixture
def user_two(app):
    user = User(userName='userTest2', firstName='unit', lastName='testing', password='123456') 
    try:
        db.session.add(user) 
        db.session.commit()
    except:
        db.session.close()
        raise SystemError('Something went wrong with db')
    return user

@pytest.fixture
def single_user(app):
    user = User(userName='userTest', firstName='unit', lastName='testing', password='123456')
    try:
        db.session.add(user)
        db.session.commit()
    except:
        db.session.close()
        raise SystemError('Something went wrong with db')
    
@pytest.fixture
def many_users(app, client):
    try:
        for i in range(1, 11):
            user = User(userName=f'userTest{i}', firstName=f'unit{i}', lastName=f'testing', password=f'{i}23456')
            db.session.add(user)
        db.session.commit()
    except:
        db.session.close()
        raise SystemError('Something went wrong with db')
    
@pytest.fixture    
def sending_emails_to_user_one(many_users):
    for i in range(1, 6):
            Email.save_email(1, i, f'Email number {i}', f'This is the email number {i} for user one')

@pytest.fixture    
def sending_emails_with_user_one(many_users):
    for i in range(1, 6):
            Email.save_email(i, 1, f'Email number {i}', f'This is the email number {i} for user one')

