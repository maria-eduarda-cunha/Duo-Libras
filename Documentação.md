# Problema / Oportunidade percebida
Diante do atual cenário da falta de democratização ao ensino de Libras, tanto para população ouvinte e falante quanto para população com deficiência auditiva e/ou na fala, torna-se essencial ampliar o acesso a essa língua. Com esse propósito, surge o aplicativo Duo Libras, que busca difundir o ensino sobre a linguagem e, com isso, promover a inclusão e a comunicação efetiva.

Reconhecida como uma das línguas oficiais do Brasil (desde a Lei nº 10.436/2002), a Libras deveria ser amplamente acessível. Entretanto, a ausência de políticas eficazes de ensino resulta na exclusão de pessoas com deficiência auditiva e com deficiência de fala, além de limitar a interação entre esse grupo e a população ouvinte.

Portanto, o Duo Libras tem por objetivo transformar esse cenário, tornando a aprendizagem acessível, prática e integrada ao cotidiano.


<br><br>

# Justificativa para esta demanda
Democratizar e difundir o ensino da linguagem de sinais (Libras) no Brasil é urgente, dado que, segundo o Censo Demográfico de 2022 do IBGE (Instituto Brasileiro de Geografia e Estatística), há aproximadamente 2,3 milhões de pessoas surdas no Brasil, número que sobe para mais de 10 milhões se levarmos em consideração todos os graus de deficiência.

Ademais, de acordo com dados da Pesquisa Nacional de Saúde (PNS) de 2021, apenas 22,4% da população com deficiência auditiva sabe usar a língua, o que sugere que o número de surdos fluentes é baixo e que a linguagem não é parte da rotina do país, excluindo os falantes.

Outrossim, olhando para segmentos mais específicos, encontramos uma situação ainda mais crítica, somente 35,8% dos indivíduos que não conseguem ouvir de nenhuma maneira são falantes de Libras, e dos que possuem muita dificuldade, apenas 3%.

<img width="751" height="562" alt="image" src="https://github.com/user-attachments/assets/029b3970-aa84-4aad-84ac-157919ffc9e3" />

Embora não haja dados especificamente sobre quantas pessoas sem deficiência auditiva e de fala saibam se comunicar em Libras, há estimativas que apontam que cerca de 1 milhão de pessoas conhecem a linguagem – o que inclui pessoas surdas, educadores, familiares e intérpretes. Sabe-se que esse grupo representa menos de 0,5% da população brasileira, o que indica que poucas pessoas sem deficiência realmente sabem falar a Língua Brasileira de Sinais.

Dessa forma, percebe-se que a Libras ainda não faz parte do cotidiano dos brasileiros, principalmente da população ouvinte, mas, surpreendentemente, até mesmo daqueles com deficiência auditiva, o que torna essencial promover o seu ensino de forma ampla e democratizada.

<br><br>

# Modelo de caso de uso
### Casos de uso
Ator: Aluno

- UC1: Assistir aula
- UC2: Cadastrar usuário
- UC3: Iniciar e Completar um Quiz
- UC4: Realizar Login

## Diagrama de caso de uso UML
https://gitlab.com/GuiRodrr/club-penguins/-/blob/main/useCaseDiagram.md

<img width="554" height="232" alt="image" src="https://github.com/user-attachments/assets/baa9574a-ddff-4da7-b969-25ef413079e8" />


### Caso de uso mais importante do sistema
- UC3: Realizar Quiz

<img width="272" height="139" alt="image" src="https://github.com/user-attachments/assets/3d4a8e37-1d21-41e4-808d-a6a0b39f62bd" />

## Especificação do Caso de Uso 1: Assistir aula

| **Identificador** | UC1           |
|-------------------|----------------|
| **Nome**          | Assistir aula  |
| **Atores**        | Aluno        |
| **Sumário**        | Aluno acessa o módulo desejado e assiste uma das aulas disponíveis.       |
| **Pré-condição**        | O aluno deve estar logado. |
| **Pós-condição**        | O aluno adquire o conhecimento da aula. |
| **Pontos de Inclusão**        |    Realizar Login (UC4)     |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Aluno acessa a página do módulo desejado. ||
|| 2. Sistema apresenta tela do módulo e exibe as aulas disponíveis e, por fim, o quiz. |
|3. Aluno seleciona o card da aula que deseja assistir. ||
||4. Sistema exibe a tela da aula com o vídeo. |
|5. Aluno assiste o vídeo. | |
|6. Após assistir o vídeo, aluno aperta o botão "Voltar" para sair da tela da aula. | |
|| 7. Sistema apresenta tela do módulo e exibe as aulas disponíveis e, por fim, o quiz. |

## Fluxos Alternativos

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|5.1.1 Aluno clica em "Voltar" antes de concluir a aula. | |
|                  |5.1.2. Sistema apresenta tela do módulo e exibe as aulas disponíveis e, por fim, o quiz. |

## **Especificação de Caso de Uso 2: Cadastrar Usuário**

### **Especificação do Caso de Uso**
|Item | Especificação |
| ---- | ---- |
| **Identificador** | UC2 |
| **Nome** | Cadastrar Usuário |
| **Atores** | Aluno |
| **Sumário** | Aluno realiza o cadastro com e-mail, nome e senha para poder acessar o aplicativo. |
| **Pré-condição** | Ter acesso ao aplicativo, possuir um e-mail válido |
| **Pós-condição** |  |
| **Pontos de Inclusão** | |
| **Pontos de Extensão** | |

### **Fluxo Principal**

| Ações do Ator | Ações do Sistema |
| --- | --- |
| 1. Aluno abre o aplicativo |  |
|  | 2.Sistema apresenta a tela de boas vindas com campos de login e opção de "Criar Conta" logo abaixo |
| 3. Aluno clica em "Criar Conta" |  |
|  | 4. Sistema apresenta a tela de cadastro, com campos de "Nome", "E-mail", "Senha" e "Confirme a senha" |
| 5. Aluno preenche os campos |  |
|  | 6. Sistema adiciona no banco de dados o cadastro do aluno |

### **Fluxos Alternativos**


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.1.1 Aluno não insere o "Nome" com o padrão Nome e Sobrenome |  |
|  | 5.1.2 Sistema verifica que está fora do padrão, informa o erro e solicita a correção |


| Ações do Ator | Ações do Sistema |
| --- | --- |
| 5.2.1 Aluno insere senhas diferentes em campos "Senha" e "Confirme a senha" |  |
|  | 5.2.3 Sistema identifica o erro, informa que campos de senha não conferem e solicita a correção |

## Especificação do Caso de Uso 3: Realizar Quiz

| **Identificador** | UC3           |
|-------------------|----------------|
| **Nome**          | Realizar Quiz |
| **Atores**        | Aluno       |
| **Sumário**        | Aluno acessa a página de módulos. Nessa página, o Aluno seleciona o quiz desse módulo, que é exibido após todas as aulas |
| **Pré-condição**        | O Aluno deve estar logado. |
| **Pós-condição**        |        |
| **Pontos de Inclusão**        |   Realizar Login (UC4)  |
| **Pontos de Extensão**        |         |

## Fluxo Principal

|**Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|1. Aluno aperta o card do módulo desejado. | |
|                  |2. Sistema apresenta a tela deste módulo. |
|3. Aluno seleciona o quiz. | |
|                  |4. Sistema exibe a tela com a pergunta e opções de resposta. |
|5. Aluno analisa o gif e seleciona a resposta referente ao símbolo exibido. | |
|                  |6. Sistema valida a resposta e exibe um feedback do acerto.  |

## Fluxos Alternativos

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
| | 6.1.1 Sistema identifica que a reposta do usuário está incorreta. |
| | 6.1.2 Sistema exibe feedback de erro e solicita que o Aluno responda novamente. |

| **Ações do Ator** | **Ações do Sistema** |
|------------------|----------------------|
|5.1.1 Aluno sai do quiz antes de completá-la. | |
| | 5.1.2 Sistema exibe a página do módulo do quiz. |

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
| 3.1.1 Aluno tenta realizar login sem preencher um dos campos ou ambos |  |
|  | 3.1.2 Sistema informa os campos obrigatórios |


### **Diagrama de classe de domínio**
<img width="727" height="422" alt="image" src="https://github.com/user-attachments/assets/3b417d83-e11d-4610-8445-5f59e5c074c5" />


# **Diagramas de Sequência**

## **UC1 - Assistir Aula**

<img width="778" height="969" alt="image" src="https://github.com/user-attachments/assets/74105173-a526-4ad9-98f6-1dc6d71f2b7c" />

## **UC2 - Cadastrar Usuário**

<img width="1214" height="852" alt="image" src="https://github.com/user-attachments/assets/bf6d4f65-0256-4e38-a2af-86aa98acf184" />

## **UC3 - Realizar Quiz**

<img width="960" height="1085" alt="image" src="https://github.com/user-attachments/assets/6f4ebdea-e28f-486d-8784-476b045cb423" />

## **UC4 - Realizar Login**

<img width="1169" height="646" alt="image" src="https://github.com/user-attachments/assets/4723bfbc-1129-48e3-97e1-0914e329a18c" />

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
<img width="1867" height="964" alt="image" src="https://github.com/user-attachments/assets/ca0ffb97-c132-461b-a4c7-253f4221ab92" />

**Tela de Cadastro**
<img width="1332" height="568" alt="image" src="https://github.com/user-attachments/assets/bb997f8b-dee9-4761-ab05-796829072991" />

**Home**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/c000f738-1087-4d54-9428-6878673da5c7" />

**Módulo Alfabeto**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/8fe776f6-bc77-483d-ac43-2b5f5b6dcdca" />

**Aula Alfabeto**
<img width="1360" height="588" alt="image" src="https://github.com/user-attachments/assets/c2fb686d-72a4-473c-b0c8-c3377e772c6a" />

**Quiz Alfabeto**

**Primeira Pergunta**
<img width="1349" height="595" alt="image" src="https://github.com/user-attachments/assets/3934ebae-8ae7-4b51-a293-208ca421b9e9" />

**Resposta Correta - Primeira Pergunta**
<img width="1341" height="587" alt="image" src="https://github.com/user-attachments/assets/f96e36a2-66df-4636-bd83-42b67067c9a6" />

**Resposta Incorreta - Primeira Pergunta**
<img width="1305" height="580" alt="image" src="https://github.com/user-attachments/assets/2a22772d-d7a5-4d10-acbd-58fc2dcb6f04" />

**Segunda Pergunta**
<img width="1340" height="586" alt="image" src="https://github.com/user-attachments/assets/1d305095-8f15-4b42-8156-754dd91dfc28" />

**Resposta Correta - Segunda Pergunta**
<img width="1341" height="584" alt="image" src="https://github.com/user-attachments/assets/0a4bf82c-3494-4189-86cd-ba62730b80f7" />

**Resposta Incorreta - Segunda Pergunta**
<img width="1335" height="588" alt="image" src="https://github.com/user-attachments/assets/083fe9d3-c8f2-4278-9ab4-b5d2f59bec7a" />

**Terceira Pergunta**
<img width="1323" height="587" alt="image" src="https://github.com/user-attachments/assets/0ce0cdb3-d6a1-41da-acd9-8d32df58488e" />

**Resposta Correta - Terceira Pergunta**
<img width="1337" height="591" alt="image" src="https://github.com/user-attachments/assets/c0cefb72-9bd2-45f9-965a-944442ecefa0" />

**Resposta Incorreta - Terceira Pergunta**
<img width="1322" height="596" alt="image" src="https://github.com/user-attachments/assets/35bf34a1-9a00-4611-b0c3-b6576d8811e5" />

**Tela Conclusão**
<img width="1346" height="589" alt="image" src="https://github.com/user-attachments/assets/aff5131b-4efc-4aaf-a74f-12849d970a75" />

**Módulo Saudações**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/347fc26b-02c8-44bf-b20e-285b66e9791d" />

**Aula Saudações**
<img width="1347" height="589" alt="image" src="https://github.com/user-attachments/assets/3d56ff80-24bc-423a-8fe6-c18c533f5be7" />

**Quiz Saudações**

**Primeira Pergunta**
<img width="1347" height="585" alt="image" src="https://github.com/user-attachments/assets/e4402501-4484-4ea3-88e8-bc7c21e7983e" />

**Resposta Correta - Primeira Pergunta**
<img width="1326" height="587" alt="image" src="https://github.com/user-attachments/assets/e7214a29-b082-41d2-8381-909cc151d9f7" />

**Resposta Incorreta - Primeira Pergunta**
<img width="1317" height="585" alt="image" src="https://github.com/user-attachments/assets/4520ec75-69ed-4864-a0f9-9eb8c94f311b" />

**Segunda Pergunta**
<img width="1344" height="590" alt="image" src="https://github.com/user-attachments/assets/30d1bb8e-946c-41c6-a778-8f437f0958f7" />

**Resposta Correta - Segunda Pergunta**
<img width="1334" height="592" alt="image" src="https://github.com/user-attachments/assets/1b1cdf95-ee35-489f-b85b-79b4c0731d14" />

**Resposta Incorreta - Segunda Pergunta**
<img width="1337" height="583" alt="image" src="https://github.com/user-attachments/assets/5d24fe86-2c13-48af-ad43-c5ff5d4a3c4f" />

**Terceira Pergunta**
<img width="1334" height="585" alt="image" src="https://github.com/user-attachments/assets/9ea69e40-cd81-4a8b-93e1-b74155a55d58" />

**Resposta Correta - Terceira Pergunta**
<img width="1337" height="584" alt="image" src="https://github.com/user-attachments/assets/b8a864b9-8c6e-48a8-b66f-a10e2ee1233f" />

**Resposta Incorreta - Terceira Pergunta**
<img width="1304" height="589" alt="image" src="https://github.com/user-attachments/assets/8e3ce6d4-3ab0-4e91-b8e3-9c690721e639" />

**Tela de Conclusão**
<img width="1338" height="593" alt="image" src="https://github.com/user-attachments/assets/8a4abad2-2699-41b4-9277-a771b46a955b" />

**Módulo Família**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/4f3b0682-8926-4951-98ef-186fba43eb4b" />

**Aula Família**
<img width="1358" height="591" alt="image" src="https://github.com/user-attachments/assets/825a8dc7-cb9e-4f81-b073-550a3fad4470" />

**Quiz Família**

**Primeira Pergunta**
<img width="1337" height="581" alt="image" src="https://github.com/user-attachments/assets/b22f8676-4f41-40d6-b8c6-865a63d8cab7" />

**Resposta Correta - Primeira Pergunta**
<img width="1336" height="582" alt="image" src="https://github.com/user-attachments/assets/a2e878a1-2c00-449b-b37b-0df0e82430e4" />

**Resposta Incorreta - Primeira Pergunta**
<img width="1336" height="581" alt="image" src="https://github.com/user-attachments/assets/2027732c-38ea-45e5-a99f-49b561bbfad6" />

**Segunda Pergunta**
<img width="1337" height="584" alt="image" src="https://github.com/user-attachments/assets/ec77f3bc-60ac-46c8-9043-b9ff2ef7a873" />

**Resposta Correta - Segunda Pergunta**
<img width="1333" height="587" alt="image" src="https://github.com/user-attachments/assets/81fe4d6b-71d6-41a1-bd84-5d09e7d946fa" />

**Resposta Incorreta - Segunda Pergunta**
<img width="1338" height="580" alt="image" src="https://github.com/user-attachments/assets/a91a0c3d-4ae4-4da5-aed6-bdd1077ba445" />

**Terceira Pergunta**
<img width="1336" height="591" alt="image" src="https://github.com/user-attachments/assets/49fd95e9-fb36-4045-aae9-c52517a7b5aa" />

**Resposta Correta - Terceira Pergunta**
<img width="1340" height="586" alt="image" src="https://github.com/user-attachments/assets/791273c9-b92e-41da-ac60-35e42cd59e12" />

**Resposta Incorreta - Terceira Pergunta**
<img width="1340" height="584" alt="image" src="https://github.com/user-attachments/assets/96944c35-d7ae-405d-8967-0656a52f90a3" />

**Tela de Conclusão**
<img width="1341" height="593" alt="image" src="https://github.com/user-attachments/assets/106c893b-c055-47d6-98f6-2c88ede53614" />

**Opção de Sair**<br>
<img width="126" height="144" alt="image" src="https://github.com/user-attachments/assets/68c3e9df-1a50-441c-8e70-4063a62aeac7" />


# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
