import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

/// <reference types="cypress" />

context('Authentication', () => {
    beforeEach(() => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('can successfully log in', () => {
      const validUserName = "john"
      const validPassword = "demo"
      const userName = "John Smith"

    loginPage.inputLogin(validUserName, validPassword)
    cy.get(loginPage.submitButton).click()
    cy.get(homePage.userNameDisplay).should('contain', `Welcome ${userName}`)
    })
}) 