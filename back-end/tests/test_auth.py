def test_register_success(client): 
    data = {
        "username": "test_user",
        "firstname": "Test",
        "lastname": "User",
        "password": "testpassword"
    }
    response = client.post('/auth/register', json=data)
    assert response.status_code == 201
    assert b"You registered successfully" in response.data

def test_register_missing_data(client): 
    data = {
        "firstname": "Test",
        "lastname": "User",
        "password": "testpassword"
    }
    response = client.post('/auth/register', json=data)
    assert response.status_code == 400 
    assert b"Username is required" in response.data
    
