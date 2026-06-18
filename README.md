📌 QA Technical Assessment - Cypress Automation
📖 Visão geral

Este projeto foi desenvolvido como parte de um teste técnico para posição de Analista de Testes (QA).

O objetivo é demonstrar habilidades em:

Análise de requisitos
Escrita de histórias de usuário
Definição de critérios de aceite
Criação de casos de teste manuais
Automação de testes E2E com Cypress
Integração contínua com GitHub Actions
🌐 Sistema testado

O sistema escolhido para automação foi o SauceDemo, por ser uma aplicação estável, amplamente utilizada para práticas de testes automatizados e que simula um e-commerce simples.

🎯 Escopo dos testes

Foram selecionados fluxos críticos da jornada do usuário:

🔐 Autenticação
Login com sucesso
Login com credenciais inválidas
🛒 Carrinho de compras
Adicionar produto ao carrinho
Remover produto do carrinho

A seleção foi baseada em uma abordagem de testes baseada em risco, priorizando funcionalidades centrais do sistema.

🧠 Estratégia de testes

A estratégia adotada foi:

Testes manuais para validação de requisitos e cobertura de cenários
Testes automatizados (E2E) para fluxos críticos e repetitivos
Priorização baseada em impacto no negócio e frequência de uso

Critérios considerados:

Funcionalidades essenciais da jornada do usuário
Alto impacto em caso de falha
Repetição em regressão

🧪 Casos de teste automatizados
Foram automatizados os seguintes cenários:

Login com usuário válido
Login com usuário inválido
Adição de produto ao carrinho
Remoção de produto do carrinho

⚙️ Tecnologias utilizadas
Cypress
Node.js
GitHub Actions (CI/CD)
JavaScript
