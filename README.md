# Aplicação Web - Tecnousi
Bem-vindo ao repositório da aplicação web desenvolvida para uma pequena empresa de modelação especializada na fabricação de moldes de madeira para fundição. Esses moldes são utilizados para criar formas em areia, que recebem metal derretido para produzir peças metálicas. A plataforma oferece um canal digital moderno e intuitivo para divulgação dos serviços e solicitação de orçamentos por clientes.

# Objetivo do Projeto
O objetivo desta aplicação é:

*Apresentar os serviços e portfólio da empresa de forma acessível e profissional.

*Facilitar a solicitação de orçamentos para moldes personalizados por clientes (ex.: indústrias, fundições).

*Reduzir barreiras de comunicação e agilizar processos comerciais.


2. Requisitos Funcionais (RF)
Os requisitos funcionais descrevem o que o sistema deve fazer. Eles serão numerados para facilitar referência.

RF01 - Exibição de Informações da Empresa
A aplicação deve ter uma página inicial com uma visão geral da empresa (quem somos, missão, visão, etc.).
Deve incluir uma seção de portfólio com exemplos de trabalhos realizados (imagens, descrições curtas).
RF02 - Catálogo de Serviços
O sistema deve exibir uma lista de serviços oferecidos pela empresa (ex.: modelagem 3D, design de interiores, prototipagem, etc.).
Cada serviço deve ter uma descrição detalhada, incluindo possíveis diferenciais ou benefícios.
RF03 - Formulário de Solicitação de Orçamento
O usuário deve poder acessar um formulário para solicitar orçamentos.
Campos obrigatórios: nome, e-mail, telefone, descrição do projeto/necessidade.
Campos opcionais: prazo desejado, anexos (ex.: arquivos ou imagens do projeto).
Após envio, o usuário deve receber uma confirmação na tela e, opcionalmente, por e-mail.
RF04 - Gerenciamento de Contatos
A aplicação deve incluir uma página de contato com e-mail, telefone e, se aplicável, links para redes sociais.
Um formulário simples de "Fale Conosco" pode ser adicionado para dúvidas gerais.
RF05 - Navegação Intuitiva
O sistema deve ter um menu de navegação claro, com acesso fácil às seções principais: Home, Serviços, Portfólio, Orçamento, Contato.
RF06 - Área Administrativa (Opcional)
A empresa deve ter uma interface simples para visualizar as solicitações de orçamento recebidas.
Deve permitir exportar os dados (ex.: em CSV) ou integrá-los a um e-mail corporativo.
3. Requisitos Não Funcionais (RNF)
Os requisitos não funcionais definem as qualidades e restrições do sistema.

RNF01 - Usabilidade
A interface deve ser simples, moderna e intuitiva, com tempo de aprendizado mínimo para usuários finais.
Deve seguir boas práticas de design responsivo para funcionar em desktops, tablets e smartphones.
RNF02 - Performance
As páginas devem carregar em no máximo 3 segundos (em condições normais de internet).
O sistema deve suportar até 100 usuários simultâneos sem perda de desempenho.
RNF03 - Segurança
Os dados enviados pelos usuários (formulários) devem ser protegidos com criptografia (ex.: HTTPS).
Prevenir ataques comuns como injeção de SQL ou XSS.
RNF04 - Manutenibilidade
O código deve ser bem documentado para facilitar a compreensão por desenvolvedores futuros.
A estrutura deve permitir atualizações fáceis no portfólio e serviços.
RNF05 - Acessibilidade
A aplicação deve seguir diretrizes básicas de acessibilidade (ex.: WCAG 2.1), como suporte a leitores de tela e contraste adequado.


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
