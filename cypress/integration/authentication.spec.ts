import { BlockedPage } from '../pages/BlockedPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

const blockedPage = new BlockedPage();
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

    it('will display an error when user attempts to login with incorrect credentials', () => {
      const validUserName = "john"
      const invalidUserName = "asdf"
      const invalidPassword = "jkl"

      loginPage.inputLogin(validUserName, invalidPassword)
      cy.get(loginPage.submitButton).click()
      cy.get(loginPage.errorHeader).should('exist')
      .should('contain', "Error!")
      .get(loginPage.errorText).should('contain', 'The username and password could not be verified.')

      loginPage.inputLogin(invalidUserName, invalidPassword)
      cy.get(loginPage.submitButton).click()
      cy.get(loginPage.errorHeader).should('exist')
      .should('contain', "Error!")
      .get(loginPage.errorText).should('contain', 'The username and password could not be verified.') 
    })

    it('will display a blocked page if user attempts to use sql injection on login fields', () => {
      const sqlInjection = "and 1=2"
      loginPage.inputLogin(sqlInjection, sqlInjection)
      cy.get(loginPage.submitButton).click()
        .get(blockedPage.pageHeader).should('contain', blockedPage.headerText)
    })
}) 
