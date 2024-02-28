from flaskr.models import User
import pytest


def test_should_create_new_user(app):
    try:
        User.save_user('newUser@correo.com', 'Pepo', 'Perez', '123456')
    except:
        pytest.fail
        

def test_should_get_a_saved_user_in_db_with_valid_userName(app, single_user):
    user = User.get_user_by_userName('userTest')[0]
    assert user["userName"] == "userTest" 
