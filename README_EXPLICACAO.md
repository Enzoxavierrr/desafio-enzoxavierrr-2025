# Explicação da Solução - Desafio Abrigo de Animais

## O que foi feito

Implementei a função `encontraPessoas` na classe `AbrigoAnimais` para resolver o desafio proposto, seguindo todas as regras do enunciado e garantindo que todos os testes automatizados passassem. Também corrigi detalhes de validação, lógica de adoção e ordenação da saída, além de explicar o funcionamento do código e como validar a entrega.

## Como funciona o código

### Estrutura principal
- O arquivo principal é `src/abrigo-animais.js`.
- A classe `AbrigoAnimais` possui:
  - Um construtor que define os animais, seus tipos e brinquedos favoritos.
  - Um array com todos os brinquedos válidos.
  - O método `encontraPessoas`, que recebe os brinquedos das duas pessoas e a ordem dos animais.
  - O método auxiliar `temBrinquedos`, que verifica se uma pessoa pode adotar um animal conforme as regras.

### Regras implementadas
- **Validação de animais:**
  - Se algum animal da lista não existir ou estiver duplicado, retorna `{ erro: 'Animal inválido' }`.
- **Validação de brinquedos:**
  - Se algum brinquedo não for válido ou estiver duplicado na lista de uma mesma pessoa, retorna `{ erro: 'Brinquedo inválido' }`.
- **Adoção:**
  - Para cada animal, verifica se pessoa 1 ou pessoa 2 pode adotar, respeitando o limite de 3 animais por pessoa.
  - Se ambos podem adotar, o animal fica no abrigo.
  - Se ninguém pode adotar, o animal fica no abrigo.
  - A lista de saída é ordenada alfabeticamente pelo nome do animal.

### Como funciona o método `temBrinquedos`
- Para todos os animais, verifica se a lista de brinquedos favoritos do animal aparece como uma subsequência (na ordem) na lista de brinquedos da pessoa, podendo haver outros brinquedos intercalados.
- Exemplo: para ['BOLA', 'RATO', 'LASER'], a pessoa pode ter ['BOLA', 'NOVELO', 'RATO', 'LASER'] e ainda assim adotar.

### Como validar a entrega
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Execute os testes:
   ```sh
   npm test
   ```
3. Se todos os testes passarem, sua solução está correta!

### Observações
- O arquivo `coverage` mostra a cobertura dos testes. Você pode abrir `coverage/lcov-report/index.html` para ver detalhes.
- O código está pronto para ser entregue no repositório público, conforme o enunciado.

---

Se precisar de mais explicações ou exemplos, é só pedir!
