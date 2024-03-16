import pytest
from flaskr import create_app
from flaskr.models import User
from unittest.mock import patch


@pytest.mark.parametrize(
    "get_user_emails_input, test_response",
    [
        (
            {"user_id": "1"},
            {
                "userName": "userTest1",
                "firstName": "unit",
                "lastName": "testing",
                "password": "123456",
            },
        )
    ],
)
def test_get_emails_user(
    client, get_user_emails_input, test_response, sending_emails_with_user_one
):
    response = client.get("/email/user", query_string=get_user_emails_input)
    assert response.status_code == 200


@pytest.mark.parametrize(
    "expected",
   [ b' {"firstName":"unit","lastName ":" testing "," userId":1,"userName ":" userTest"} ' ],
)
def test_get_all_users(client, single_user, expected):
    response = client.get("/email/users")
    assert response.status_code == 200
    assert expected in response.data


@pytest.mark.parametrize(
    "send_email_input, expected",
    [
        (
            {
                "sender": "1",
                "recipient": "2",
                "subject": "Test subject",
                "body": "Test body",
            },
            {
                "status": "success",
                "data": {
                    "email": [
                        {
                            "emailId": 1,
                            "subject": "Test subject",
                            "body": "Test body",
                            "createdAt": "2024-03-01T15:15:58.376705",
                        }
                    ],
                    "sender": [
                        {
                            "userId": 1,
                            "userName": "test@example.com",
                            "firstName": "test_username",
                            "lastName": "test_lastname",
                        }
                    ],
                    "recipient": [
                        {
                            "userId": 2,
                            "userName": "test2@example.com",
                            "firstName": "test_username",
                            "lastName": "test_lastname",
                        }
                    ],
                },
            },
        )
    ],
)
def test_send_email(client, send_email_input, expected, user_one, user_two):
    response = client.post("/email/send", json=send_email_input)
    assert response.status_code == 201
