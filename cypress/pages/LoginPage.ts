/// <reference types="cypress" />

export class LoginPage {
    usernameField = 'input[name=username]'
    passwordField = 'input[name=password]'
    submitButton = 'input[type=submit]'

    errorHeader = '#rightPanel .title'
    errorText = '#rightPanel .error'
    
    async inputLogin(username: string, password: string) {

        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
    }
} 