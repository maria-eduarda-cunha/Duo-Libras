# 1. Instalar o python
Vá até o site https://www.python.org/downloads e instale a última versão.

Ao conluir, abra o terminal e digite `python --version`

Output esperado (a versão pode variar) `Python 3.13.7`

Caso apresente erro:
1. Configurações > Aplicativos > Configurações avançadas de aplicativos > Aliases de execução 
    
    Desative python.exe e python3.exe
2. Verifique onde o python foi instalado na sua máquina e guarte o caminho
3. Abra o terminal e rode os seguintes comandos:

`$PythonPath="C:\Users\[seu usuário]\AppData\Local\Programs\Python\Python3[versão]"`

`[Environment]::SetEnvironmentVariable("Path", "$PythonPath;$PythonPath\Scripts;" + [Environment]::GetEnvironmentVariable("Path","User"), "User")`

`$env:Path = [Environment]::GetEnvironmentVariable("Path","User")`

`python -m ensurepip --upgrade`

# 2. Verificar PIP
Rode o comando `pip list`

O output esperado é similar a este:

    Package Version
    ------- -------
    pip     25.2

# 3. Baixar o requirements.txt
Rode o comando `pip install -r requirements.txt`

OBS: este é o arquivo que contém todos os itens necessários para o funcionamento do código

Após a conclusão, rode novamente o comando `pip list`

Ele irá listar tudo o que foi baixado

# 4. .env
Para rodar corretamente você vai precisar do arquivo `.env`. Este possui todas as informações sensíveis e confidenciais do código. 

Verifique se ele está visível para você no codespace, caso contrário, me procure que enviarei a versão atualizada.

# 5. Rodar o backend
Rode o comando `flask run --port [porta do backend]`