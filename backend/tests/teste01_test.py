import pytest
from mongoengine import connect, disconnect
import mongomock
from bson import ObjectId
from backend.models.member import Member
import bcrypt

# conecta com o mongomock
@pytest.fixture(scope="session", autouse=True)
def mongo_mock():
    disconnect()
    connect(
        db="mongoenginetest",
        host="mongodb://localhost",
        mongo_client_class=mongomock.MongoClient
    )
    yield
    disconnect()



# verifica se a senha e criptografada
def test_hash_string_returns_valid_hash():
    raw = "senha123"
    hashed = Member.hash_string(raw)
    assert hashed != raw
    assert isinstance(hashed, str)
    assert bcrypt.checkpw(raw.encode("utf-8"), hashed.encode("utf-8"))

# verifica se a senha hasheada corresponde a senha original
def test_validate_create_hashes_password():
    data = {"password": "minha_senha"}
    result = Member.validate_create(data.copy())
    assert result["password"] != "minha_senha"
    assert bcrypt.checkpw("minha_senha".encode("utf-8"), result["password"].encode("utf-8"))

# verifica se retorna false quando nao ha membros cadastrados
def test_verify_email_returns_false_when_no_members():
    assert Member.verify_email("teste@email.com") is False

# verifica se a autenticacao falha quando nao tem usuarios
def test_verify_email_password_returns_false_when_no_members():
    assert Member.verify_email_password("teste@email.com", "123") is False

# verifica se quando o id nao existe ele retorna que nao encontrou
def test_get_member_by_id_returns_none_when_no_members():
    fake_id = ObjectId()
    assert Member.get_member_by_id(fake_id) is None
