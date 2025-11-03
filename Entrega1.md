# Problema / Oportunidade percebida
Diante do atual cenário da falta de democratização ao ensino de Libras, tanto para população ouvinte e falante quanto para população com deficiência auditiva e/ou na fala, torna-se essencial ampliar o acesso a essa língua. Com esse propósito, surge o aplicativo Duo Libras, que busca difundir o ensino sobre a linguagem e, com isso, promover a inclusão e a comunicação efetiva.

Reconhecida como uma das línguas oficiais do Brasil (desde a Lei nº 10.436/2002), a Libras deveria ser amplamente acessível. Entretanto, a ausência de políticas eficazes de ensino resulta na exclusão de pessoas com deficiência auditiva e com deficiência de fala, além de limitar a interação entre esse grupo e a população ouvinte.

Portanto, o Duo Libras tem por objetivo transformar esse cenário, tornando a aprendizagem acessível, prática e integrada ao cotidiano.


<br><br>

# Justificativa para esta demanda
Democratizar e difundir o ensino da linguagem de sinais (Libras) no Brasil é urgente, dado que, segundo o Censo Demográfico de 2022 do IBGE (Instituto Brasileiro de Geografia e Estatística), há aproximadamente 2,3 milhões de pessoas surdas no Brasil, número que sobe para mais de 10 milhões se levarmos em consideração todos os graus de deficiência.

Ademais, de acordo com dados da Pesquisa Nacional de Saúde (PNS) de 2021, apenas 22,4% da população com deficiência auditiva sabe usar a língua, o que sugere que o número de surdos fluentes é baixo e que a linguagem não é parte da rotina do país, excluindo os falantes.

Outrossim, olhando para segmentos mais específicos, encontramos uma situação ainda mais crítica – somente 35,8% dos indivíduos que não conseguem ouvir de nenhuma maneira são falantes de Libras, e dos que possuem muita dificuldade, apenas 3%.

<img width="751" height="562" alt="image" src="https://github.com/user-attachments/assets/029b3970-aa84-4aad-84ac-157919ffc9e3" />

Embora não haja dados especificamente sobre quantas pessoas sem deficiência auditiva e de fala saibam se comunicar em Libras, há estimativas que apontam que cerca de 1 milhão de pessoas conhecem a linguagem – o que inclui pessoas surdas, educadores, familiares e intérpretes. Sabe-se que esse grupo representa menos de 0,5% da população brasileira, o que indica que poucas pessoas sem deficiência realmente sabem falar a Língua Brasileira de Sinais.

Dessa forma, percebe-se que a Libras ainda não faz parte do cotidiano dos brasileiros, principalmente da população ouvinte, mas, surpreendentemente, até mesmo daqueles com deficiência auditiva, o que torna essencial promover o seu ensino de forma ampla e democratizada.

<br><br>

# Modelo de caso de uso
### Casos de uso
Ator: Aluno

- UC1: Editar perfil
- UC2: Cadastrar usuário
- UC3: Iniciar e Completar uma Lição
- UC4: Realizar Login

## Diagrama de caso de uso UML
https://gitlab.com/GuiRodrr/club-penguins/-/blob/main/useCaseDiagram.md

<img width="677" height="273" alt="image" src="https://github.com/user-attachments/assets/d953c138-feef-48a7-b4fa-9e529e0be940" />

### Caso de uso mais importante do sistema
- UC3: Iniciar e Completar uma Lição

## Especificação do Caso de Uso 1: Editar perfil

| **Identificador** | UC1           |
|-------------------|----------------|
| **Nome**          | Editar perfil  |
| **Atores**        | Aluno        |
| **Sumário**        | Aluno acessa a página de edição de perfil. Nessa página, o aluno pode customizar o seu perfil, adicionando ícones de suas conquistas e visualizando suas medalhas.       |
| **Pré-condição**        | O aluno deve estar logado.     |
| **Pós-condição**        | O perfil é editado conforme a vontade do aluno, e deve exibir tudo o que foi adicionado / modificado.        |
| **Pontos de Inclusão**        |    Realizar Login (UC4)     |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Aluno acessa a página de edição de perfil. | |
|                  |2. Sistema apresenta tela de edição de perfil e exibe as personalizações que podem ser feitas, como exibir ícones de conquistas e visualizar medalhas. |
|3. Aluno aperta o botão "Adicionar Ícones de Conquistas". | |
|                  |4. Sistema busca quais Ícones de Conquistas o Aluno já possui, mostra cada um deles numa tela, e permite que ele exiba até 3 deles em seu perfil. |
|5. Aluno seleciona 3 Ícones de sua escolha para exibir em seu perfil. | |
|                  |6. Sistema exibe os Ícones escolhidos no perfil do Aluno. |
|7. Aluno aperta o botão "Visualizar Medalhas. | |
|                  |8. Sistema busca e exibe uma tela mostrando as medalhas já obtidas pelo Aluno ao longo de seus estudos. Fim do caso de uso. |

## Fluxos Alternativos

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|5.1.1 Aluno tenta adicionar um ícone que ainda não obteve. | |
|                  |5.1.2. Sistema apresenta uma mensagem dizendo que este ícone ainda não foi obtido, e permite que ele selecione outro. |

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|5.2.1 Aluno tenta selecionar mais de três ícones. | |
|                  |5.2.2. Sistema apresenta uma mensagem dizendo que ele já selecionou 3 ícones e mantém a seleção anterior. |

## **Especificação de Caso de Uso 2: Cadastrar Usuário**

### **Especificação do Caso de Uso**
|Item | Especificação |
| ---- | ---- |
| **Identificador** | UC2 |
| **Nome** | Cadastrar Usuário |
| **Atores** | Aluno |
| **Sumário** | Aluno realiza o cadastro com e-mail e senha para poder acessar as lições e salvar seu progresso ao longo dos módulos |
| **Pré-condição** | Instalar aplicativo, possuir um e-mail válido |
| **Pós-condição** |  |
| **Pontos de Inclusão** | |
| **Pontos de Extensão** | |

### **Fluxo Principal**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 1. Aluno abre o aplicativo |  |
|  | 2.Sistema apresenta a tela de boas vindas com campos de login e opção de "Criar Conta" logo abaixo |
| 3. Aluno toca em "Criar Conta" |  |
|  | 4. Sistema apresenta a tela de cadastro, com campos "digite seu e-mail", "confirme seu e-mail", "digite sua senha" e "confirme sua senha"|
| 5. Aluno insere o seu E-mail uma vez em cada campo ("digite seu e-mail" e "confirme seu e-mail") e cria sua senha, inserindo-a uma vez em cada campo ("digite sua senha" e "confirme sua senha") |  |
|  | 6. Sistema verifica se campos de E-mail e Senha estão em formato correto e conferem entre si |
|  | 7. Sistema adiciona no banco de dados o cadastro do aluno |

### **Fluxos Alternativos**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.1.1 Aluno insere e-mail em formato inválido |  |
|  | 5.1.2 Sistema Informa que e-mail informado está em formato inválido e solicita reinserção |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.2.1 Aluno insere e-mails diferentes em campos "digite seu e-mail" e "confirme seu e-mail" |  |
|  | 5.2.2 Sistema verifica que "digite seu e-mail" e "confirme seu e-mail" não conferem |
|  | 5.2.3 Sistema Informa que campos de e-mail não conferem e solicita reinserção |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.3.1 Aluno insere e-mails diferentes em campos "digite sua senha" e "confirme sua senha" |  |
|  | 5.2.2 Sistema verifica que "digite sua senha" e "confirme sua senha" não conferem |
|  | 5.2.3 Sistema Informa que campos de senha não conferem e solicita reinserção |

## Especificação do Caso de Uso 3: Iniciar e Completar uma Lição

| **Identificador** | UC3           |
|-------------------|----------------|
| **Nome**          | Iniciar e Completar uma Lição |
| **Atores**        | Aluno       |
| **Sumário**        | Aluno acessa a página de módulos. Nessa página, o Aluno acessa os módulos disponíveis para serem estudados e pode escolher qual deseja aprender no momento. Ao escolher um módulo, ele deve selecionar a lição em que parou, ou, caso esteja iniciando um módulo, deve selecionar a lição inicial. Após iniciar a lição, ele terá 5 vidas, que serão perdidas a cada erro cometido. Para recarregá-las, o Aluno terá que pagar moedas. Ao chegar ao exercício final e completá-lo, a lição será finalizada e uma nova lição será desbloqueada. |
| **Pré-condição**        | O Aluno deve estar logado.     |
| **Pós-condição**        |        |
| **Pontos de Inclusão**        |   Realizar Login (UC4)  |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Aluno aperta o botão "Ver Módulos". | |
|                  |2. Sistema apresenta a tela de Módulos. |
|3. Aluno seleciona o módulo que deseja aprender. | |
|                  |4. Sistema busca o progresso do Aluno para ver quais lições ele já pode acessar e apresenta o módulo para o Aluno. |
|5. Aluno seleciona a lição que deseja aprender. | |
|                  |6. Sistema apresenta a tela da lição, apresentando os exercícios a serem feitos.  |
|7. Aluno completa a lição sem perder as vidas. | |
|                  |8. Sistema registra o progresso do Aluno e desbloqueia novas lições. Fim do caso de uso. |

## Fluxos Alternativos

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.1.1 Aluno perde as vidas disponíveis. | |
| | 7.1.2 Sistema pergunta se o Aluno deseja pagar moedas para recarregar as vidas. |
|7.1.3 Aluno paga moedas. | |
| | 7.1.4 Sistema recarrega as vidas do Aluno. |
| 7.1.5 Aluno conclui a lição. | |

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.2.1 Aluno perde as vidas disponíveis. | |
| | 7.2.2 Sistema pergunta se o Aluno deseja pagar moedas para recarregar as vidas. |
|7.2.3 Aluno opta por não pagar moedas. | |
| | 7.2.4 Sistema informa que o Aluno deverá esperar por alguns minutos para que suas vidas sejam recarregadas e faz com que ele retorne para a Página de Módulos. |

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|7.3.1 Aluno sai da lição antes de completá-la. | |
| | 7.3.2 Sistema pergunta se o Aluno deseja realmente sair. |
|7.3.3 Aluno confirma e volta para a Página de Módulos. | |

## **Especificação do Caso de Uso 4: Realizar Login**

### **Especificação do Caso de Uso**
|Item | Especificação |
| ---- | ---- |
| **Identificador** | UC4 |
| **Nome** | Realizar Login |
| **Atores** | Aluno |
| **Sumário** | Aluno realiza o login com e-mail e senha para poder acessar as lições visualizar e salvar seu progresso ao longo dos módulos |
| **Pré-condição** | Instalar aplicativo, ter realizado cadastro |
| **Pós-condição** |  |
| **Pontos de Inclusão** | Cadastrar Usuário (UC2) |
| **Pontos de Extensão** | |

### **Fluxo Principal**
| Ações do Ator | Ações do Sistema |
| --- | --- |
| 1. Aluno abre o aplicativo |  |
|  | 2.Sistema apresenta a tela de boas vindas com campos de login e opção de "Criar Conta" logo abaixo |
| 3. Aluno digita seu E-mail e Senha nos campos "digite seu e-mail" e "digite sua senha" |  |
|  | 4. Sistema verifica o banco de dados e confere se Fernet de e-mail e senha conferem com os dados inseridos pelo usuário |
|  | 5. Sistema permite entrada de usuário |

### **Fluxos Alternativos**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 3.1.1 Aluno digita e-mail não cadastrado |  |
|  | 3.1.2 Sistema informa que e-mail não foi encontrado e pede reinserção, também sugere aluno cadastrar caso não esteja |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 3.2.1 Aluno digita e-mail cadastrado, mas Fernet de senha armazenado no banco e lido não conferem |  |
|  | 3.2.2 Sistema informa que senha é inválida e pede reinserção |

### **Diagrama de classe de domínio**
<img width="727" height="422" alt="image" src="https://github.com/user-attachments/assets/3b417d83-e11d-4610-8445-5f59e5c074c5" />


# **Diagramas de Sequência**

## **UC1 - Editar Perfil**

<img width="651" height="871" alt="image" src="https://github.com/user-attachments/assets/ed5a359f-5116-4f5b-972c-75f20e6ba440" />


## **UC2 - Cadastrar usuário**

<img width="709" height="771" alt="image" src="https://github.com/user-attachments/assets/f38d119b-49a7-4d4b-b84a-56c6c0872d6c" />

## **UC3 - Iniciar e Completar uma Lição**

<img width="978" height="1544" alt="image" src="https://github.com/user-attachments/assets/f9e804d1-c47d-4868-972e-08d63a73960f" />

## **UC4 - Realizar Login**

<img width="822" height="867" alt="image" src="https://github.com/user-attachments/assets/f79a117b-b438-40ea-9355-adef32184aa2" />

# **Modelagem**

<img width="714" height="272" alt="TO-n2i8m48RtUueZamwjkvJIwgA3K6Z1eNH8crW3QHBIg8ZqtKrR5HqS3kw--xYVItf7hRjq4W-QSKbRtW4etoBPM7thkINu1ZctLy6qJOqK3MsenaLwp9Va0OYpGOqXE8vV83HtVm9nyFKHMVthTLgrEXpfP0u0vIk-mY30yazqjSOesXL55iTG-gnPPlN4YsssseyRaFpaq6cqeZqxPCBonWcj01AkcF_z2G00" src="https://github.com/user-attachments/assets/08cfd25d-4bb0-47eb-b588-df49fada3bf5" />


# Requisitos
**Requisitos Funcionais:**
| ID | Descrição |
|--|--|
| RF01 | O sistema deve exigir que o aluno esteja autenticado para acessar qualquer funcionalidade. |
| RF02 | O sistema deve permitir que o aluno entre no sistema usando um e-mail e senha já cadastrados, ou se cadastrando. |
| RF03 | O sistema deve exibir, na Home, a lista dos módulos disponíveis. Para cada módulo, exibir seu nome, a quantidade de níveis já realizados e a quantidade total de níveis do módulo. |
| RF04 | O sistema deve exibir, no header, a quantidade de streaks de dias consecutivos com atividades, o número de vidas disponíveis, total de moedas e um item para acessar o perfil do aluno. |
| RF05 | O sistema deve permitir que o aluno altere os dados informados no cadastro. |
| RF06 | O sistema deve exibir, dentro do módulo, um ícone para cada nível. Esse ícone deve variar caso o nível já tenha sido concluído, esteja disponível mas não concluído, ou esteja bloqueado. |
| RF07 | O sistema deve exibir, em cada nível, uma quantidade de perguntas com estilos variados, para estimular o aprendizado do aluno. |
| RF08 | O sistema deve aprovar o aluno que tenha obtido uma porcentagem de acertos maior ou igual a 90%. |
| RF09 | O sistema deve reprovar o aluno que tenha obtido uma porcentagem de acertos menor que 90%, mas permitir que ele refaça o nível até atingir a pontuação mínima. |
| RF10 | O sistema deve exibir, a cada tentativa do aluno de passar do nível, perguntas aleatórias puxadas do banco de dados. |
| RF11 | O sistema deve exibir, na tela de conclusão de um nível, o tempo levado para concluir, a porcentagem de acertos e a quantidade de moedas ganhas. Caso o aluno seja reprovado, a quantidade de moedas ganhas não é exibida. |
| RF12 | O sistema deve desabilitar o botão “Verificar” dentro dos níveis até que uma resposta seja selecionada. |
| RF13 | O sistema deve informar ao aluno qual foi o erro e indicar a resposta correta, caso ele selecione uma opção incorreta. |

**Requisitos Não Funcionais**
| ID | Descrição|
| -- | --|
| RNF01 | O sistema deve suportar múltiplos aluno logados simultaneamente sem perda de desempenho.|
| RNF02 | O tempo de carregamento de qualquer módulo ou nível não deve ultrapassar 5 segundos.|
| RNF03 | O sistema deve armazenar os dados dos aluno e progresso de forma segura, garantindo confidencialidade e integridade. |
| RNF04 | O sistema deve ter interface intuitiva e acessível, considerando princípios de acessibilidade digital (como cores, contraste e navegação via teclado). |
| RNF05 | O sistema deve apresentar mensagens de erro claras e compreensíveis, orientando o aluno sobre como resolver problemas. |
| RNF06 | O sistema deve ser compatível com os navegadores mais usados (Chrome, Edge, Firefox, Safari). |
| RNF07 | O sistema deve registrar logs de atividades importantes, como login, tentativas de conclusão de níveis e alterações no perfil do usuário. |



# Prototipo
**Tela de login**
<img width="2400" height="1884" alt="image" src="https://github.com/user-attachments/assets/450870a7-4b90-4cff-bfaf-330fc27ddf6b" />

**Home**
<img width="2400" height="1884" alt="image" src="https://github.com/user-attachments/assets/03b57fc3-264a-486d-8317-47afc11df7e0" />

**Tela dentro de um módulo**
<img width="2400" height="2150" alt="image" src="https://github.com/user-attachments/assets/8b705e35-8aed-40de-a817-aa37de1de10e" />

**Nível - símbolo para palavra**
| Sem selecionar | Com opção selecionada |
|--|--|
| <img width="2400" height="1966" alt="image" src="https://github.com/user-attachments/assets/6f420d4c-e72a-4a0a-ad70-853ea19647d5" /> | <img width="2400" height="1966" alt="image" src="https://github.com/user-attachments/assets/2feb84d1-7a8c-44a0-8ac9-db0bd97f6d04" /> |

**Nível - palavra para símbolo**
<img width="2400" height="2032" alt="image" src="https://github.com/user-attachments/assets/f84e4034-4788-4aeb-9526-2b2f069fbd00" />

**Nível - frase para símbolo**
<img width="2400" height="2032" alt="image" src="https://github.com/user-attachments/assets/63e439fb-4d80-42ad-9b7f-865b963bc0af" />

**Nível - combinando pares**
<img width="2400" height="2124" alt="image" src="https://github.com/user-attachments/assets/beeaa3ad-b33e-40a3-aacd-f53bc514313d" />

**Conclusão - Sucesso**
<img width="2400" height="1808" alt="image" src="https://github.com/user-attachments/assets/14cd87aa-b87d-4b32-a4b5-06ede66df175" />


**Conclusão - Falha**
<img width="2400" height="1808" alt="image" src="https://github.com/user-attachments/assets/ad61c3f8-33f3-4537-b4fd-030460c5f940" />



# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
