# Clínica Viddas — Especificação da Homepage

## 1. Visão geral do projeto

Criar uma homepage moderna, elegante, responsiva e orientada à conversão para a Clínica Viddas.

A página deve posicionar a clínica como uma referência em cuidados de saúde, transmitindo quatro pilares:

- **Confiança:** credibilidade, segurança e competência profissional.
- **Tecnologia:** estrutura moderna e recursos de diagnóstico.
- **Cuidado completo:** consultas, exames e diferentes especialidades em um só lugar.
- **Humanização:** acolhimento, empatia e atenção individualizada.

### Posicionamento central

**Tecnologia para cuidar melhor. Pessoas para cuidar de você.**

A experiência visual deve equilibrar a sofisticação de uma instituição de saúde moderna com a proximidade de uma clínica que valoriza as pessoas.

Não criar uma estética hospitalar fria, excessivamente corporativa ou com aparência de template genérico.

---

## 2. Design System

### 2.1. Paleta de cores

Utilizar as seguintes cores como base da identidade:

| Cor | Hexadecimal | Aplicação |
|---|---|---|
| Dark Goldenrod | `#A67C36` | Destaques, detalhes premium, ícones e elementos decorativos |
| Coffee Bean | `#79543C` | Blocos institucionais, textos especiais e elementos de apoio |
| Silver | `#CAC4C0` | Bordas, fundos secundários e separadores |
| Black | `#0A0908` | Títulos, textos principais e fundos escuros |

Cores neutras complementares permitidas:

- `#FFFFFF` — fundo branco.
- `#F8F6F3` — fundo off-white quente.
- `#EEEAE6` — superfícies secundárias.
- `#625C57` — textos de apoio.

### 2.2. Distribuição de cores

- 55% — branco e off-white.
- 20% — preto.
- 15% — silver e tons neutros.
- 7% — dark goldenrod.
- 3% — coffee bean.

O dourado deve ser usado com moderação. Seu papel é valorizar elementos importantes, não dominar a interface.

### 2.3. Tipografia

**Títulos:** Manrope, peso 500–700.

**Corpo:** Inter, peso 400–500.

**Eyebrows e labels:** Inter, peso 600, uppercase e letter-spacing de 0.12em.

Escala desktop:

- H1: 60–68px.
- H2: 40–48px.
- H3: 24–28px.
- Body: 16–18px.
- Small: 13–14px.

Escala mobile:

- H1: 38–44px.
- H2: 30–34px.
- H3: 22–24px.
- Body: 16px.

### 2.4. Direção visual

- Layout editorial, sofisticado e minimalista.
- Muito espaço em branco.
- Fotografias reais e amplas.
- Bordas discretas e cantos levemente arredondados (8–12px).
- Ícones lineares e consistentes.
- Animações suaves e discretas.
- Evitar gradientes chamativos, sombras pesadas e excesso de cards.
- Utilizar contraste forte e hierarquia tipográfica clara.

### 2.5. Grid e responsividade

- Container máximo: 1240px.
- Padding lateral desktop: 48px.
- Padding lateral tablet: 32px.
- Padding lateral mobile: 20px.
- Espaçamento entre seções: 96–120px desktop e 64–80px mobile.
- Breakpoints principais: 768px e 1024px.

---

## 3. Header / Navegação

### Estrutura

Header horizontal, elegante e fixo no topo após o scroll.

**Esquerda:** logotipo da Clínica Viddas.

**Centro:** navegação.

- Início
- A Clínica
- Especialidades
- Exames
- Corpo Clínico
- Contato

**Direita:** botão de agendamento.

CTA: **Agendar atendimento →**

### Comportamento

- Header inicialmente transparente somente se houver contraste suficiente com o hero.
- Após scroll, fundo branco com borda inferior discreta.
- Desktop com navegação horizontal.
- Mobile com menu hambúrguer e CTA visível.
- Links devem apontar para seções existentes ou páginas reais.
- O botão principal deve abrir o canal de atendimento confirmado da clínica.

---

## 4. Seção 01 — Hero

### Objetivo

Criar uma primeira impressão de confiança, modernidade e acolhimento.

O visitante precisa entender imediatamente o que a clínica oferece e por que pode confiar nela.

### Layout

Hero em duas colunas no desktop:

**Coluna esquerda (48%)**

- Eyebrow.
- Headline.
- Subheadline.
- CTA principal.
- CTA secundário.
- Indicadores institucionais.

**Coluna direita (52%)**

- Fotografia ampla e profissional.
- Preferencialmente uma interação real entre médico e paciente em ambiente moderno.
- A imagem deve transmitir atenção, competência e tranquilidade.

### Copy

**Eyebrow:**
CUIDADO, TECNOLOGIA E ACOLHIMENTO

**H1:**
Tecnologia para cuidar melhor. Pessoas para cuidar de você.

**Subheadline:**
Consultas, exames e diagnósticos em um só lugar. Uma estrutura preparada para oferecer cuidado com atenção, confiança e respeito em cada etapa da sua jornada.

**CTA primário:**
Agendar atendimento →

**CTA secundário:**
Conheça a Clínica Viddas

### Elementos complementares

Adicionar abaixo dos botões uma faixa institucional com três atributos:

- Tradição e experiência.
- Estrutura para consultas e exames.
- Atendimento humanizado.

Caso seja confirmado que a unidade pode utilizar a história do Grupo Viddas desde 2002, destacar esse dado.

### Design

- Fundo off-white `#F8F6F3`.
- Título preto `#0A0908`.
- Uma pequena palavra ou elemento decorativo em dourado.
- CTA principal preto com texto branco.
- CTA secundário outline preto.
- Imagem com bordas arredondadas de 12px.
- Detalhe decorativo fino em dourado próximo à imagem.

### Mobile

- Headline primeiro.
- Subheadline em seguida.
- CTA principal em largura total.
- CTA secundário abaixo.
- Fotografia após os textos.
- Indicadores institucionais em grid ou faixa horizontal.

---

## 5. Seção 02 — Barra de credibilidade

### Objetivo

Reforçar imediatamente os diferenciais apresentados no hero.

### Layout

Faixa horizontal com quatro atributos e ícones lineares.

**Itens:**

1. **Atendimento humanizado**
   Atenção e acolhimento em cada contato.

2. **Tecnologia em diagnóstico**
   Recursos e estrutura para exames médicos.

3. **Cuidado integrado**
   Consultas e exames em um só lugar.

4. **Profissionais qualificados**
   Equipe dedicada à saúde dos pacientes.

### Design

- Fundo branco.
- Ícones dourados.
- Divisórias verticais discretas.
- Tipografia pequena e elegante.
- Mobile em grid 2x2.

---

## 6. Seção 03 — Especialidades e serviços

### Objetivo

Demonstrar que a Viddas é uma clínica completa e facilitar a identificação do serviço procurado.

### Layout

Cabeçalho da seção:

**Eyebrow:**
NOSSOS SERVIÇOS

**H2:**
Cuidado completo para diferentes momentos da sua vida.

**Descrição:**
Da consulta médica aos exames de diagnóstico, reunimos diferentes serviços para tornar o cuidado com a sua saúde mais prático e acessível.

### Cards de serviços

Criar quatro cards principais:

**01 — Consultas médicas**

Atendimento em diferentes especialidades para acompanhar, prevenir e investigar questões relacionadas à sua saúde.

CTA: Ver especialidades →

**02 — Diagnóstico por imagem**

Exames de imagem que auxiliam os profissionais de saúde na investigação e no acompanhamento clínico.

CTA: Conhecer exames →

**03 — Exames laboratoriais**

Serviços laboratoriais que contribuem para avaliações de rotina, prevenção e acompanhamento médico.

CTA: Ver exames →

**04 — Exames cardiológicos**

Avaliações que auxiliam no acompanhamento e na investigação da saúde cardiovascular.

CTA: Conhecer serviços →

### Design

- Grid de quatro cards desktop.
- Grid 2x2 tablet.
- Coluna única mobile.
- Cada card com imagem real ou representativa do serviço.
- Título, descrição e link com seta.
- Fundo branco.
- Bordas `#CAC4C0`.
- Hover com borda dourada e elevação sutil.

### CTA complementar

**Ver todos os serviços →**

---

## 7. Seção 04 — Tecnologia e estrutura

### Objetivo

Transformar a tecnologia em uma prova visual de qualidade e investimento.

### Layout

Seção editorial com fotografia grande à esquerda e conteúdo à direita.

**Eyebrow:**
ESTRUTURA E TECNOLOGIA

**H2:**
Uma estrutura preparada para cuidar de cada detalhe.

**Texto:**
A qualidade do cuidado também passa pelo ambiente, pelos recursos disponíveis e pela atenção dedicada a cada etapa do atendimento.

Na Clínica Viddas, a estrutura de consultas e exames faz parte do compromisso de oferecer uma experiência de saúde mais completa.

### Destaques

- Ambientes preparados para receber pacientes.
- Equipamentos para diferentes modalidades de diagnóstico.
- Serviços que apoiam a investigação e o acompanhamento médico.

**CTA:**
Conheça nossa estrutura →

### Elementos visuais

- Fotografia real de um equipamento de diagnóstico.
- Imagens complementares de salas e ambientes.
- Legendas identificando os equipamentos apresentados.
- Possibilidade de uma galeria horizontal.

### Design

- Fundo `#F8F6F3`.
- Headline preta.
- Pequenos detalhes dourados.
- Imagens grandes e sem filtros exagerados.

**Importante:** não mencionar equipamentos de última geração, tecnologias exclusivas ou certificações sem confirmação.

---

## 8. Seção 05 — Institucional / Sobre a clínica

### Objetivo

Construir confiança por meio da história, da filosofia de atendimento e da presença regional.

### Layout

Seção com fundo preto e conteúdo em duas colunas.

**Eyebrow:**
SOBRE A VIDDAS

**H2:**
Mais do que cuidar da saúde. Cuidar de pessoas.

**Texto:**
Acreditamos que um bom atendimento começa pela escuta, pelo respeito e pela confiança.

Por isso, buscamos unir conhecimento profissional, estrutura de saúde e um olhar humano para quem procura nossos serviços.

Cada consulta, cada exame e cada atendimento representam uma oportunidade de acolher e contribuir para o cuidado com a vida.

**CTA:**
Conheça nossa história →

### Elementos complementares

Adicionar uma fotografia real da equipe ou da fachada da clínica.

Se confirmado, destacar a trajetória do Grupo Viddas desde 2002.

### Design

- Fundo `#0A0908`.
- Títulos brancos.
- Eyebrow dourado `#A67C36`.
- Textos de apoio em `#CAC4C0`.
- Fotografia com iluminação natural.
- Muito espaço negativo.

---

## 9. Seção 06 — Corpo clínico

### Objetivo

Humanizar a instituição e transmitir competência profissional.

### Cabeçalho

**Eyebrow:**
NOSSA EQUIPE

**H2:**
Conhecimento que inspira confiança. Pessoas que sabem acolher.

**Descrição:**
Conheça os profissionais que fazem parte do cuidado oferecido pela Clínica Viddas.

### Layout

Grid de três ou quatro profissionais em destaque.

Cada card deve conter:

- Fotografia profissional real.
- Nome completo.
- Especialidade.
- CRM e RQE, quando aplicável.
- Link para conhecer o profissional.

### CTA

Conheça nosso corpo clínico →

### Design

- Fundo branco.
- Retratos padronizados.
- Tipografia discreta.
- Sem excesso de bordas ou sombras.
- Hover com transição suave na fotografia.

**Importante:** não inventar nomes, especialidades, registros ou credenciais. Se não houver dados disponíveis para a demo, usar placeholders claramente identificados.

---

## 10. Seção 07 — Experiência do paciente

### Objetivo

Mostrar que o acolhimento não é apenas uma promessa institucional, mas um princípio aplicado à experiência de atendimento.

### Cabeçalho

**Eyebrow:**
CUIDADO EM CADA ETAPA

**H2:**
Porque cuidar bem também é fazer você se sentir bem cuidado.

### Estrutura

Criar três etapas visuais.

**01 — Atendimento e orientação**

Uma equipe preparada para orientar você sobre os serviços disponíveis e o processo de agendamento.

**02 — Acolhimento durante sua visita**

Um ambiente pensado para receber pacientes com atenção e respeito.

**03 — Cuidado em cada atendimento**

Profissionais e recursos dedicados à realização de consultas e exames.

### Design

- Fundo off-white.
- Três colunas desktop.
- Numeração grande em dourado.
- Linha fina conectando as etapas.
- Mobile com timeline vertical.

---

## 11. Seção 08 — Depoimentos e reputação

### Objetivo

Reforçar a confiança por meio de experiências reais de pacientes.

### Cabeçalho

**Eyebrow:**
QUEM CONFIA NA VIDDAS

**H2:**
A confiança se constrói em cada atendimento.

**Descrição:**
Conheça experiências compartilhadas por pessoas que passaram pela Clínica Viddas.

### Layout

Slider com até três depoimentos visíveis no desktop.

Cada card contém:

- Texto do depoimento.
- Nome do autor, quando autorizado.
- Data ou origem da avaliação, quando disponível.
- Indicador visual de avaliação, somente se confirmado.

### Design

- Fundo branco.
- Cards em `#F8F6F3`.
- Aspas decorativas em dourado.
- Navegação minimalista.

**Importante:** usar apenas avaliações autênticas, com autorização ou de fonte pública adequada. Não criar avaliações fictícias nem inventar notas.

---

## 12. Seção 09 — Convênios e informações de atendimento

### Objetivo

Responder a dúvidas práticas antes que o visitante precise entrar em contato.

### Cabeçalho

**Eyebrow:**
FACILIDADES PARA VOCÊ

**H2:**
Mais praticidade para cuidar da sua saúde.

**Descrição:**
Consulte nossa equipe para verificar convênios, serviços disponíveis e orientações sobre agendamento.

### Layout

- Área com logotipos de convênios efetivamente aceitos, se confirmados.
- Link para consultar a relação completa.
- Informações sobre atendimento particular, quando aplicável.
- CTA para WhatsApp.

**CTA:**
Consultar atendimento e convênios →

### Design

- Fundo `#F8F6F3`.
- Logos monocromáticos ou originais, preservando a legibilidade.
- Layout limpo, sem excesso de elementos.

---

## 13. Seção 10 — FAQ

### Objetivo

Reduzir objeções e facilitar o agendamento.

### Cabeçalho

**Eyebrow:**
DÚVIDAS FREQUENTES

**H2:**
Tudo o que você precisa saber antes de agendar.

### Perguntas sugeridas

1. Como posso agendar uma consulta?
2. Quais especialidades a clínica oferece?
3. Quais exames posso realizar na Viddas?
4. A clínica atende por convênios?
5. É necessário pedido médico para realizar exames?
6. Como posso saber os preparos necessários para um exame?
7. Onde a Clínica Viddas está localizada?

### Design

- Accordion minimalista.
- Uma pergunta aberta por vez.
- Ícones de expansão.
- Bordas inferiores finas.
- Respostas objetivas, revisadas pela clínica.

---

## 14. Seção 11 — CTA final

### Objetivo

Converter a confiança construída ao longo da página em contato.

### Layout

Bloco amplo de alto contraste, centralizado.

**Eyebrow:**
ESTAMOS AQUI PARA VOCÊ

**H2:**
Sua saúde merece atenção. E o primeiro passo pode ser simples.

**Descrição:**
Fale com nossa equipe para tirar dúvidas, consultar nossos serviços e receber orientações sobre agendamento.

**CTA primário:**
Agendar atendimento pelo WhatsApp →

**CTA secundário:**
Ver localização

### Design

- Fundo `#0A0908`.
- Headline branca.
- Eyebrow dourado.
- Botão dourado `#A67C36` com texto preto.
- Espaçamento vertical generoso.
- Sem elementos visuais competindo com o CTA.

---

## 15. Seção 12 — Localização

### Objetivo

Transmitir segurança sobre a existência física da clínica e facilitar a visita.

### Layout

Duas colunas:

**Esquerda:**

- Nome da unidade.
- Endereço completo confirmado.
- Horários de atendimento.
- Telefone e WhatsApp.
- Link para rotas.

**Direita:**

- Mapa integrado ou preview do Google Maps.

### CTA

Como chegar →

### Design

- Fundo branco.
- Mapa com bordas discretamente arredondadas.
- Ícones de localização, telefone e relógio.

---

## 16. Footer

### Estrutura

Footer em quatro colunas:

**Coluna 1 — Marca**

- Logotipo Viddas.
- Breve descrição institucional.
- Redes sociais oficiais (instagram https://www.instagram.com/clinicaviddas/)

**Coluna 2 — Institucional**

- Sobre a clínica.
- Nossa estrutura.
- Corpo clínico.
- Contato.

**Coluna 3 — Serviços**

- Especialidades.
- Exames de imagem.
- Exames laboratoriais.
- Exames cardiológicos.

**Coluna 4 — Atendimento**

- Endereço Av. Manoel Hipólito do Rego, 2229 Praia do Arrastão, São Sebastião, São Paulo 11605136
- Telefone.
- WhatsApp (12) 98834-2898
- Horários de funcionamento (pesquisar no google da clinica)

### Rodapé inferior

- Copyright.
- Política de privacidade.
- Informações institucionais e regulatórias pertinentes.
- Responsável técnico e registros aplicáveis, após confirmação.

### Design

- Fundo preto.
- Textos em branco e cinza.
- Links com hover dourado.
- Separadores discretos.

---

## 17. Elementos de conversão

### WhatsApp flutuante

Adicionar botão flutuante de WhatsApp, sempre acessível, sem bloquear conteúdo.

Mensagem pré-preenchida sugerida:

"Olá! Gostaria de receber informações sobre os serviços e agendamentos da Clínica Viddas."

### CTAs estratégicos

Distribuir os CTAs em pontos específicos:

- Header: Agendar atendimento.
- Hero: Agendar atendimento.
- Serviços: Conhecer serviços.
- Estrutura: Conheça nossa estrutura.
- Corpo clínico: Conhecer profissionais.
- Convênios: Consultar atendimento.
- CTA final: Agendar pelo WhatsApp.

Evitar repetir botões sem contexto ou saturar a página com chamadas comerciais.

---

## 18. Requisitos técnicos

- Mobile-first.
- Carregamento rápido.
- Imagens otimizadas em WebP ou AVIF.
- Lazy loading em imagens abaixo da primeira dobra.
- Hero com imagem prioritária e dimensões definidas.
- HTML semântico.
- Um único H1.
- Hierarquia correta de headings.
- Contraste acessível WCAG AA.
- Navegação por teclado.
- Estados de foco visíveis.
- Respeitar `prefers-reduced-motion`.
- SEO local para a região de atendimento da clínica.
- Metadados Open Graph.
- Schema.org adequado, com informações verificadas.
- Integração com ferramentas de analytics, se autorizada.
- Eventos para medir cliques em agendamento, telefone e WhatsApp.
- Respeito à LGPD e coleta mínima de dados.

---

## 19. Orientações para fotografias

Priorizar:

1. Fachada real da clínica.
2. Recepção e ambientes internos.
3. Equipamentos de diagnóstico.
4. Profissionais reais.
5. Atendimentos encenados com consentimento, quando necessário.

As fotografias devem transmitir:

- Iluminação natural.
- Limpeza e organização.
- Ambientes modernos.
- Expressões genuínas.
- Relações humanas.
- Profissionalismo.

Evitar:

- Médicos de banco de imagens com poses artificiais.
- Fotografias excessivamente frias ou azuladas.
- Imagens genéricas de laboratório sem relação com os serviços.
- Equipamentos que a clínica não possui.
- Fotos de pacientes sem autorização.

Para a demo, imagens ilustrativas devem ser identificadas como provisórias.

---

## 20. Prioridades de implementação da demo

### Prioridade máxima

Desenvolver com acabamento visual elevado:

1. Header.
2. Hero.
3. Barra de credibilidade.
4. Serviços.
5. Tecnologia e estrutura.
6. Sobre a clínica.
7. CTA final.

### Prioridade secundária

Adicionar, conforme disponibilidade de conteúdo real:

- Corpo clínico.
- Depoimentos.
- Convênios.
- FAQ.
- Localização.
- Footer completo.

### Critério de sucesso

A demo precisa fazer o proprietário perceber que o novo site:

- Valoriza melhor a estrutura da clínica.
- Reforça a confiança na equipe.
- Comunica modernidade sem perder o acolhimento.
- Facilita a descoberta dos serviços.
- Oferece caminhos claros para o agendamento.
- Representa a instituição com uma identidade digital mais profissional.

**Resultado esperado:** uma homepage que não apenas apresenta a Clínica Viddas, mas faz o visitante compreender por que ela merece sua confiança.

---

## 21. Diretriz final

A página deve transmitir a seguinte ideia em todos os detalhes:

**"Uma clínica que investe em tecnologia, valoriza seus profissionais e coloca as pessoas no centro do cuidado."**

A estética precisa ser premium, mas o sentimento precisa ser humano.

A tecnologia demonstra capacidade.  
A equipe transmite segurança.  
A experiência constrói confiança.  
O agendamento transforma essa confiança em ação.