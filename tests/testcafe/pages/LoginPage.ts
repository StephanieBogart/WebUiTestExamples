import { t, Selector } from 'testcafe';

export class LoginPage {
    usernameField = Selector('input[name=username]')
    passwordField = Selector('input[name=password]')
    submitButton = Selector('input[type=submit]')

    errorHeader = Selector('#rightPanel .title')
    errorText = Selector('#rightPanel .error')

    async clearLoginFields() {
        this.clearField(this.usernameField)
        this.clearField(this.passwordField)
    }
    
    async clearField(field:Selector) {
        await t.selectText(field)
        .pressKey('ctrl+a delete')
    }

    async inputLogin(username:string, password:string) {
        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
    }
}