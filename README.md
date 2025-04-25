# Aplicação Web - Tecnousi
Bem-vindo ao repositório da aplicação web desenvolvida para uma pequena empresa de modelação especializada na fabricação de moldes de madeira para fundição. Esses moldes são utilizados para criar formas em areia, que recebem metal derretido para produzir peças metálicas. A plataforma oferece um canal digital moderno e intuitivo para divulgação dos serviços e solicitação de orçamentos por clientes.

# Objetivo do Projeto
O objetivo desta aplicação é:

*Apresentar os serviços e portfólio da empresa de forma acessível e profissional.

*Facilitar a solicitação de orçamentos para moldes personalizados por clientes (ex.: indústrias, fundições).

*Reduzir barreiras de comunicação e agilizar processos comerciais.


# Requisitos Funcionais (RF)
RF01 - Exibição de Informações da Empresa

Página inicial com visão geral da empresa e destaque para expertise em modelação.


RF02 - Catálogo de Serviços

Lista de serviços (ex.: moldes sob medida, consultoria técnica) com descrições.


RF03 - Exibição de Portfólio

Galeria de moldes e peças fundidas com fotos e detalhes.


RF04 - Formulário de Solicitação de Orçamento

Usuários registrados ou não podem solicitar orçamentos.

Campos obrigatórios: nome, e-mail, telefone, descrição do molde/peça.

Campos opcionais: arquivo anexo (PDF, JPG, PNG), prazo desejado, quantidade de moldes.

Para usuários registrados, a solicitação é associada à sua conta e pode ser acompanhada na área de tracking.

Após envio, exibir confirmação na tela e enviar e-mail ao cliente.

Usuários não registrados recebem apenas a confirmação, sem tracking.


RF05 - Página de Contato

Informações de contato e formulário "Fale Conosco".


RF06 - Navegação Intuitiva

Menu com seções: Home, Serviços, Portfólio, Orçamento, Contato, Login/Registro (para usuários não logados) ou Perfil/Logout (para usuários logados).


RF07 - Área Administrativa

Interface para visualizar e gerenciar solicitações de orçamento.

Permitir atualizar o status das solicitações (ex.: "Pendente", "Em Análise", "Respondido").

Incluir filtros por status, data ou cliente (e-mail/nome) e exportação em CSV.


RF08 - Registro de Usuários

Usuários podem criar uma conta fornecendo: nome, e-mail, senha (mínimo 8 caracteres, com letras e números).

O sistema deve validar o e-mail e armazenar a senha criptografada.

Após registro, enviar e-mail de confirmação (opcional, configurável).


RF09 - Login de Usuários

Usuários registrados podem fazer login com e-mail e senha.

Implementar opção de "Esqueci minha senha" com envio de link de redefinição por e-mail.

Após login, redirecionar para a área de perfil ou página inicial.


RF10 - Área de Tracking de Solicitações

Usuários logados podem acessar uma seção "Minhas Solicitações" no perfil.

Exibir lista de solicitações feitas, com: ID, data, descrição, status (ex.: Pendente, Respondido), arquivo anexo (se houver).

Permitir visualizar detalhes de cada solicitação (ex.: resposta da empresa, se disponível).


# Requisitos Não Funcionais (RNF)

RNF01 - Usabilidade

Interface intuitiva, com navegação clara para registro, login e tracking.


RNF02 - Performance

Carregamento de páginas em até 3 segundos.


RNF03 - Segurança

Proteger dados sensíveis (formulários, senhas) com HTTPS.

Senhas devem ser criptografadas.

Implementar autenticação com tokens para sessões seguras.

Validar anexos (formatos PDF, JPG, PNG; tamanho máximo 5MB).

Proteger contra ataques como injeção de SQL, XSS e brute force no login.


RNF04 - Manutenibilidade

Código documentado, com instruções para gerenciar usuários e solicitações.

Estrutura modular para facilitar adição de novos status de solicitação ou funcionalidades no tracking.


# Funcionalidades Principais
# Páginas Públicas:

*Home: Visão geral da empresa e banner de destaque.

*Serviços: Lista de serviços oferecidos (ex.: moldes sob medida, consultoria técnica).

*Portfólio: Galeria de moldes e peças fundidas com fotos e descrições.

*Orçamento: Formulário para solicitação de orçamentos com upload de arquivos.

*Contato: Informações de contato e formulário "Fale Conosco".

# Tecnologias Utilizadas

*Front-end: HTML, CSS, JavaScript

*Back-end: Node.js com Express.

*Banco de Dados: MySQL.

*Outras Ferramentas:

  Multer
  
  Nodemailer
  
# Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão 18.x ou superior recomendada).

MySQL (versão 8.x ou superior).

Um editor de código como VS Code.
