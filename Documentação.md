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

<img width="778" height="969" alt="image" src="https://github.com/user-attachments/assets/838c9f16-ad52-4ad2-bdd3-e882c0e11374" />



## **UC2 - Cadastrar Usuário**

<img width="1214" height="852" alt="image" src="https://github.com/user-attachments/assets/aaae7b8d-4f13-481c-af77-4804f27a4f57" />


## **UC3 - Realizar Quiz**

<img width="960" height="1085" alt="image" src="https://github.com/user-attachments/assets/7e86698e-cb9c-426b-a7c0-162bd42270ca" />


## **UC4 - Realizar Login**

<img width="1169" height="646" alt="image" src="https://github.com/user-attachments/assets/d5c4f5af-0ebe-47cc-9314-39d90c2d6739" />


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
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/b10da013-5fcd-4b33-955d-298946d8866a" />

**Home**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/c000f738-1087-4d54-9428-6878673da5c7" />

**Módulo Alfabeto**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/8fe776f6-bc77-483d-ac43-2b5f5b6dcdca" />

**Aula Alfabeto**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/99ca98bf-385e-4bb5-b7e5-bb34515c7871" />

**Quiz Alfabeto**

**Módulo Saudações**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/347fc26b-02c8-44bf-b20e-285b66e9791d" />

**Aula Saudações**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/65294913-de55-47e0-9339-c7e2f3b2bfcc" />

**Quiz Saudações**

**Módulo Família**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/4f3b0682-8926-4951-98ef-186fba43eb4b" />

**Aula Família**
<img width="1852" height="950" alt="image" src="https://github.com/user-attachments/assets/7e46f607-3154-4f3b-b88c-0613f9ba5119" />

**Quiz Família**

**Opção de Sair**<br>
<img width="126" height="144" alt="image" src="https://github.com/user-attachments/assets/68c3e9df-1a50-441c-8e70-4063a62aeac7" />


# Fontes
- https://www.pertodigital.com.br/blog/quantas-pessoas-conhecem-libras-no-brasil-conheca-os-dados-mais-recentes-sobre-acessibilidade-digital
- https://desculpenaoouvi.com.br/ibge-confirma-surdez-nao-e-sinonimo-de-libras/
