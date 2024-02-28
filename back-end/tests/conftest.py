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
def single_user(app):
    user = User(userName='userTest', firstName='unit', lastName='testing', password='123456')
    try:
        db.session.add(user)
        db.session.commit()
    except:
        db.session.close()
        raise SystemError('Something went wrong with db')
            
    


