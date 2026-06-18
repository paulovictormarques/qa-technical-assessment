describe('Carrinho - Remover produto', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
  })

  it('Deve remover produto do carrinho com sucesso', () => {

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="remove-sauce-labs-backpack"]')
      .click()

    cy.get('.cart_item')
      .should('have.length', 0)

    cy.get('.shopping_cart_badge')
      .should('not.exist')
  })

})