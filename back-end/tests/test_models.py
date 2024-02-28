from flaskr.models import User, Email
import pytest


def test_should_create_new_user(app):
    try:
        User.save_user('newUser@correo.com', 'Pepo', 'Perez', '123456')
    except:
        pytest.fail

def test_should_get_a_saved_user_in_db_with_valid_userName(single_user):
    user = User.get_user_by_userName('userTest')[0]
    assert user["userName"] == "userTest" 

def test_should_get_all_users_in_db(many_users):
    users = User.get_all_users()
    assert len(users) == 10

def test_should_get_email_when_save_one_with_valid_information(many_users):
    Email.save_email(1, 2, 'A email test', 'This an expample for testing functions')
    email = Email.get_email_by_id(1)[0]
    assert email["emailId"] == 1

def test_should_get_5_emails_sent_to_user_one_from_db(sending_emails_to_user_one):
    results = Email.get_user_received_emails(1)
    assert len(results) == 5

def test_should_get_5_emails_sent_with_user_one_from_db(sending_emails_with_user_one):
    results = Email.get_user_sent_emails(1)
    assert len(results) == 5

def test_should_get_two_keys_when_using_get_user_sent_emails_function(sending_emails_with_user_one):
    results = Email.get_user_sent_emails(1)
    keys = {"email": 0, "recipient": 1}
    assert results[0].keys() == keys.keys()
