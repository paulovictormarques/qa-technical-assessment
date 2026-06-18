História 1
Como cliente da loja
Quero realizar login com credenciais válidas
Para acessar os produtos disponíveis para compra

Cenário 1: login válido
<gerkhin>
Dado que o usuário está na página de login
Quando informar um usuário válido
E informar uma senha válida
E clicar no botão "Login"
Então deverá ser redirecionado para a página de produtos
E deverá visualizar a lista de produtos disponíveis
</gerkhin>

Cenário 2: campos obrigatórios
<gerkhin>
Dado que o usuário está na página de login
Quando tentar realizar login sem preencher usuário e senha
Então deverá visualizar uma mensagem informando que os campos são obrigatórios
</gerkhin>

História 2 - Login inválido
Como cliente da loja
Quero ser informado quando minhas credenciais forem inválidas
Para corrigir os dados de acesso

Cenário 1: senha inválida
<gerkhin>
Dado que o usuário está na página de login
Quando informar um usuário válido
E informar uma senha inválida
E clicar no botão "Login"
Então deverá visualizar uma mensagem de erro
E deverá permanecer na página de login
</gerkhin>

Cenário 2: usuário inválido
<gerkhin>
Dado que o usuário está na página de login
Quando informar um usuário inexistente
E informar uma senha qualquer
E clicar no botão "Login"
Então deverá visualizar uma mensagem de erro
</gerkhin>

História 3 - Adicionar produto ao carrinho
Como cliente da loja
Quero adicionar produtos ao carrinho
Para realizar uma futura compra

Cenário 1: adicionar produto
<gerkhin>
Dado que o usuário está autenticado
E está na página de produtos
Quando clicar em "Add to cart" de um produto
Então o produto deverá ser adicionado ao carrinho
E o contador do carrinho deverá ser atualizado
</gerkhin>
  
Cenário 2: visualizar produto no carrinho
<gerkhin>
Dado que um produto foi adicionado ao carrinho
Quando acessar o carrinho
Então deverá visualizar o produto adicionado
</gerkhin>
