Páginas

Página de Login/ Cadastro
Usar OAUTH - Login Social via SpringBoot Security - Google

Cadastro -> o usuário vai se cadastrar e vai indicar algumas informações:
    - data de nascimento;
    - Nome
    - Bio
    - Interesses (isso vai ser feito por meio de tags que apararecerão na tela, ex: causa animal, causa ambiental, etc...)
    - Endereço (para que entidades vejam quais voluntarios estão mais próximos)
    - Checkbox (me lembrar & aceitar politica de privacidade)

Após se cadastrar ele vai acessar a página inicial
O que deve aparecer na página inicial? 
um navbar ao lado da tela:
- alterar dados
- - alterar bio
- - excluir conta
- - endereços
- - email
- - telefone
- novidades
- meus eventos (histórico)
- histórico
- Certificados
- Estatísticas:
- - eventos participados
- - ultimo ano
- - período determinado
- - Estatísticas de eventos

Na main section deve aparecer um feed de notícias e eventos
- o feed deve permitir filtragens 
- Os eventos e notícias aparecerão em cards, parecido com o Reddit
- o feed aparecerá segundo um algoritmo de recomendação



Algoritmo de recomendação 

Como os eventos serão recomendados aos voluntários? Que voluntários serão recomendados à organizações

Eventos

Associado a cada Evento devemos ter uma entidade metadados-Eventos

Associado a cada evento temos um id que servirá de chave estrangeira na metadados-eventos.

A entidade metadados-eventos guardará metadados dos eventos → esses metadados serão usados para gerar uma lista de classificação que aparecerá na tela inicial do usuário como recomendação

Os eventos que aparecerem devem ser listados para o voluntário levando em conta as próprias preferencias do usuário. Nesse sentido deve haver critérios de filtragem e de pontuação.

Possíveis critérios:

Natureza do evento (descrito por tags - ajuda animal, ambiental, social, esportivo, etc) - quanto mais tags, maior a pontuação

Fator “Novidade” (novos eventos devem ser destacados)

Reputação da organização (medido em joinhas de outros usuários)

Visualizações (Número de visualizações de usuários na página do evento)

A lista de eventos deve ser gerada, obviamente, no lado do servidor:

cliente (página inicial pede lista) → servidor (gera lista levando em conta informações do próprio usuário) → cliente (recebe a lista e gera a página inicial com uma lista de eventos recomendados).

Que informações o cliente deve receber? Link para a página do evento, descrição do evento, nome da organização (e a reputação desta com base em estrelinhas), imagem de fundo? A ideia é que as recomendações apareçam como cards.

NOV*REP*(TAGS + VIS) THRESHOLD

Usuários

Na própria entidade usuário podemos associar metadados? Esses metadados seriam usados para gerar uma