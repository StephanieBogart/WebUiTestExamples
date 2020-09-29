/// <reference types="cypress" />

context('Authentication', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })
  
    it('can successfully log in', () => {
      // https://on.cypress.io/window
      cy.window().should('have.property', 'top')

      const validUserName = "john"
      const validPassword = "demo"
      const userName = "John Smith"
  
    //   loginPage.inputLogin(validUserName, validPassword)
  
    //   await t
    //       .click(loginPage.submitButton)
    //       .expect(homePage.userNameDisplay.textContent)
    //       .eql(`Welcome ${userName}`)

    cy.
    })
})