import { tsConstructorType } from '@babel/types'

let page: import('playwright').Page
// const { chromium } = require('playwright')
export class login {
    usernameField = 'input[name=username]'
    passwordField = 'input[name=password]'
    submitButton = 'input[type=submit]'

    errorHeader = '#rightPanel .title'
    errorText = '#rightPanel .error'


//     async clearLoginFields() {
//         this.clearField(this.usernameField)
//         this.clearField(this.passwordField)
//     }
    
//     async clearField(field:Selector) {
//         await t.selectText(field)
//         .pressKey('ctrl+a delete')
//     }

    async inputLogin(username:string, password:string) {
        await page.fill(this.usernameField, username)
        await page.fill(this.passwordField, password)
    }
}