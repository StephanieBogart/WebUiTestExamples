import { LoginPage } from '../../testcafe/pages/LoginPage';
import { login } from '../pages/login';
import { home } from '../pages/home';
import { assert } from 'console';
import { describe } from 'yargs';

let page: import('playwright').Page
const { chromium } = require('playwright')

const loginPage = new login();
const homePage = new home();

let browser

    before(async () => {
        const browser = await chromium.launch({headless: false});
        const page = await browser.newPage();
    })

    after(async () => {
        await browser.close()

    })

    it('should login successfully', async () => {
        const validUserName = "john"
        const validPassword = "demo"
        const expectedUserName = "John Smith"
    
    
        await page.goto('https://parabank.parasoft.com/parabank/index.htm')
        
        loginPage.inputLogin(validUserName, validPassword)
        await page.click(loginPage.submitButton)
        
        const displayedUserName = await page.textContent(homePage.userNameDisplay)
        assert(displayedUserName === expectedUserName)
    })