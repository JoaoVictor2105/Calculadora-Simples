# 🧮 Calculadora Simples

Calculadora interativa criada como projeto de estudo. A estrutura (HTML) e o estilo visual (CSS) foram montados com apoio de IA como ponto de partida; toda a lógica de funcionamento — manipulação do DOM, eventos de clique, gerenciamento de estado e operações matemáticas — foi escrita em JavaScript por mim.

🔗 **Teste ao vivo:** https://JoaoVictor2105.github.io/Calculadora-Simples/

## 📁 Estrutura do projeto

```
├── index.html   → estrutura da calculadora (visor + teclado)
├── style.css    → estilos visuais (layout, cores, responsividade)
├── script.js    → lógica da calculadora
└── README.md    → este arquivo
```

## ✅ Funcionalidades

- HTML completo e semântico, com `id`s e `data-*` attributes claros em todos os botões e no visor
- CSS completo: grid nos moldes de uma calculadora tradicional, tema visual próprio, efeitos de hover/active e responsividade para mobile e desktop
- Lógica em JavaScript:
  - [x] Captura de cliques nos números e montagem do valor exibido no visor
  - [x] Captura de cliques nos operadores (`+`, `−`, `×`, `÷`) e registro do operador escolhido
  - [x] Cálculo do resultado ao clicar em `=`
  - [x] Botão de limpar (`AC`)
  - [x] Ponto decimal, sem permitir mais de um ponto no mesmo número

## 🔮 Possíveis melhorias futuras

- [ ] Suporte ao teclado físico do computador
- [ ] Histórico das últimas operações realizadas

## 🔑 Referência rápida dos seletores

| Elemento | Seletor | Observação |
|---|---|---|
| Visor do resultado | `#display` | valor atual / resultado |
| Visor da operação | `#previous-operand` | expressão em andamento, ex: `12 +` |
| Botões numéricos | `[data-number]` | dígito de 0 a 9 |
| Botões de operador | `[data-operator]` | `+`, `-`, `*` ou `/` |
| Botão limpar | `#clear` | também tem `data-action="clear"` |
| Botão de igual | `#equals` | também tem `data-action="calculate"` |
| Botão de ponto decimal | `[data-action="decimal"]` | insere o `.` |

## 🚀 Como rodar

Não há build nem dependências. Basta abrir o `index.html` no navegador (ou usar a extensão "Live Server" do VS Code).

## 📄 Licença

Sinta-se livre para usar este projeto como base de estudos.
