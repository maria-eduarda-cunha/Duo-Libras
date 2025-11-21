import pytest
from unittest.mock import MagicMock, patch
import bcrypt


from models import Member

@pytest.fixture
def mock_member_instance():

    hashed_password = bcrypt.hashpw('senha_secreta'.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
    
    member_mock = MagicMock(spec=Member)
    member_mock.email = 'encrypted_test@example.com' # Email criptograf.
    member_mock.password = hashed_password
    member_mock.id = '60c72b2f9f1b2c3d4e5f6g7h'
    member_mock.first_name = 'Test'

    def mock_exclude(*fields):
        if 'password' in fields:
            member_without_password = MagicMock(**{k: v for k, v in member_mock.__dict__.items() if k != 'password'})
            # O mock precisa garantir que a senha não está no resultado
            member_without_password.password = None
            return member_without_password
        return member_mock

    member_mock.exclude.side_effect = mock_exclude
    
    return member_mock

@pytest.fixture(autouse=True)
def mock_decrypt(mocker):
    def fake_decrypt(encrypted_email):
        if encrypted_email == 'encrypted_test@example.com':
            return 'test@example.com'
        if encrypted_email == 'another_encrypted@email.com':
            return 'another@email.com'
        return 'unknown@email.com'
        
    mocker.patch('models.decrypt', side_effect=fake_decrypt)

@pytest.fixture(autouse=True)
def mock_member_objects(mocker, mock_member_instance):
    
    objects_mock = MagicMock()
    objects_mock.objects.return_value = [mock_member_instance] # Lista de membros para iteração
    
    def objects_side_effect(**kwargs):
        query_mock = MagicMock()
        query_mock.first.return_value = mock_member_instance if kwargs.get('id') == mock_member_instance.id else None
        query_mock.__iter__.return_value = iter([mock_member_instance])
        
        def exclude_side_effect(*fields):
             # Retorna um objeto que tem o método .first()
            exclude_mock = MagicMock()
            if 'password' in fields:
                # Simula um objeto sem a senha (para get_member_by_id)
                member_no_pwd = MagicMock(spec=Member)
                member_no_pwd.id = mock_member_instance.id
                member_no_pwd.password = None # Garante que a senha está 'ausente'
                member_no_pwd.first.return_value = member_no_pwd
                return member_no_pwd
            return query_mock # Retorna o mock original se não for para excluir a senha

        query_mock.exclude.side_effect = exclude_side_effect
        return query_mock

    mocker.patch('models.Member.objects', side_effect=objects_side_effect)

#CASOS DE TESTE

# 1 Teste de Criação e Hashing de Senha
def test_validate_create_hashes_password():
    """Verifica se a senha é hasheada corretamente."""
    raw_password = 'minhasenhaforte'
    member_data = {
        'first_name': 'New',
        'last_name': 'User',
        'email': 'new@user.com',
        'password': raw_password
    }
    
    validated_data = Member.validate_create(member_data)
    hashed_password = validated_data['password']
    
    # A senha hasheada não deve ser igual à senha original
    assert hashed_password != raw_password
    
    # Verifica se o hash é válido usando a função bcrypt.checkpw
    assert bcrypt.checkpw(raw_password.encode('utf-8'), hashed_password.encode('utf-8'))

# -------------------

# 2 Teste de Verificação de Email Existente
def test_verify_email_success(mock_member_instance):
    """Verifica se retorna True para um email existente."""
    # O email 'test@example.com' é o email meio que limpo que o mock_decrypt retornará
    result = Member.verify_email('test@example.com')
    assert result is True

def test_verify_email_failure():
    # testando um email que nao existe
    result = Member.verify_email('nonexistent@example.com')
    assert result is False

# -------------------

# Login com credencial valida
def test_verify_email_password_success(mock_member_instance):
    """Verifica se o login é bem-sucedido com credenciais corretas."""
    # Email 'limpo': 'test@example.com', Senha original: 'senha_secreta'
    result = Member.verify_email_password('test@example.com', 'senha_secreta')
    assert result is True

# -------------------

# Login com credencial invalida
def test_verify_email_password_failure_wrong_password(mock_member_instance):
    """Verifica se falha o login com senha incorreta."""
    result = Member.verify_email_password('test@example.com', 'senha_errada')
    assert result is False

def test_verify_email_password_failure_wrong_email():
    """Verifica se falha o login com email inexistente."""
    # Como o mock só retorna 'test@example.com', qualquer outro falhará a busca
    result = Member.verify_email_password('nonexistent@example.com', 'senha_secreta')
    assert result is False

# -------------------

# 5 buscar membro por id
def test_get_member_by_id_excludes_password(mock_member_instance):
    """Verifica se retorna o membro pelo ID e exclui a senha."""
    # O ID '60c72b2f9f1b2c3d4e5f6g7h' é o ID do mock
    member = Member.get_member_by_id('60c72b2f9f1b2c3d4e5f6g7h')
    
    assert member is not None
    # Verifica se a exclusão da senha funcionou
    assert member.password is None 
    assert member.first_name == 'Test'

def test_get_member_by_email_excludes_password():
    # get pelo email e exclui senha
    # O email 'test@example.com' é o email limpo que o mock_decrypt vai retornar
    member = Member.get_member_by_email('test@example.com')
    
    assert member is not None
    # Verifica se a exclusão da senha funcionou (chamada dentro de get_member_by_email)
    assert member.password is None 
    assert member.first_name == 'Test'
    
def test_get_member_by_email_not_found():
    # verificar se retorna none
    member = Member.get_member_by_email('naoexiste@email.com')
    assert member is None
