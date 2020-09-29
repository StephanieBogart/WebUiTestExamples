import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { BlockedPage } from '../pages/BlockedPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const blockedPage = new BlockedPage();

fixture `Authentication Tests`
    .page `https://parabank.parasoft.com/parabank/index.htm`

test('User can successfully log in', async t => {
    const validUserName = "john"
    const validPassword = "demo"
    const userName = "John Smith"

    loginPage.inputLogin(validUserName, validPassword)

    await t
        .click(loginPage.submitButton)
        .expect(homePage.userNameDisplay.textContent)
        .eql(`Welcome ${userName}`)
});

test('User given an error when logging in with incorrect credentials', async t=> {
    const validUserName = "john"
    const invalidUserName = "asdf"
    const invalidPassword = "jkl"

    // Valid name, invalid pass
    loginPage.inputLogin(validUserName, invalidPassword)

    await t
        .click(loginPage.submitButton)
        .expect(loginPage.errorHeader)
        .ok('Expected the error header to exist')
        .expect(loginPage.errorHeader.textContent)
        .eql("Error!")
        .expect(loginPage.errorText.textContent)
        .eql("The username and password could not be verified.")

    // Clear input data
    loginPage.clearLoginFields()

    // invalid name, invalid pass
    loginPage.inputLogin(invalidUserName, invalidPassword)
    await t
        .click(loginPage.submitButton)
        .expect(loginPage.errorHeader)
        .ok('Expected the error header to exist')
        .expect(loginPage.errorHeader.textContent)
        .eql("Error!")
        .expect(loginPage.errorText.textContent)
        .eql("The username and password could not be verified.")
})

test('User attempting a sql injection on login fields is blocked', async t=> {
    const sqlInjection = "and 1=2"

    loginPage.inputLogin(sqlInjection, sqlInjection)
    await t
        .click(loginPage.submitButton)
        .expect(blockedPage.pageHeader.textContent)
        .eql(blockedPage.headerText, {timeoutSeconds: 2})
})