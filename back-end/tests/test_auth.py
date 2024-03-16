import pytest


@pytest.mark.parametrize(
    "register_user_input, expected",
    [
        (
            {
                "username": "test_user1",
                "firstname": "test_firstname",
                "lastname": "test_lastname",
                "password": "testpassword",
            },
            [b"You registered successfully", 201],
        ),
        (
            {
                "username": "test_user_1",
                "firstname": "test_firstname",
                "lastname": "test_lastname",
            },
            [b"Password is required", 400],
        ),
         (
            {
                "username": "test_user_1",
                "firstname": "test_firstname",
                "lastname": "test_lastname",
                "password": ""
            },
            [b"Password is required", 400],
        ),
    ],
)
def test_register_user(client, register_user_input, expected):
    response = client.post("/auth/register", json=register_user_input)
    assert response.status_code == expected[1]
    assert expected[0] in response.data


@pytest.mark.parametrize(
    "login_user_input, expected",
    [
        (
            {
                "username": "test_user_1",
                "password": "testpassword",
            },
            ["success", 200],
        ),
        (
            {
                "username": "test_user_1",
                "password": "wrongpassword",
            },
            ["Wrong password", 400],
        ),
    ],
)
def test_login(client, login_user_input, expected, user_one):
    response = client.post("/auth/login", json=login_user_input)
    assert response.status_code == expected[1]
