const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Se seus .cy.js estão no root, permita esse padrão; ideal é mover os testes para cypress/e2e
    specPattern: 'cypress/e2e/*.cy.js',
    // desative supportFile se você não usa um
    supportFile: false,
    // opcional: baseUrl: 'https://seu-site-de-teste.local'
  },
})
