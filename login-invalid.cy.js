describe('Login - Usuário inválido', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {

    cy.get('[data-test="username"]')
      .type('usuario_invalido')

    cy.get('[data-test="password"]')
      .type('senha_invalida')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')

    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

})