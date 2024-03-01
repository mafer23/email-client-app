import bcrypt


class Password:
    @staticmethod
    def create_hashed_password(password):
        password_bytes = password.encode("utf-8")
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password_bytes, salt)
        return hashed.decode("utf-8")

    @staticmethod
    def compare_passwords(password, db_password):
        password_bytes = password.encode("utf-8")
        hashed_bytes = db_password.encode("utf-8")
        return bcrypt.checkpw(password_bytes, hashed_bytes)
