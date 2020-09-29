import { Selector } from 'testcafe'

export class BlockedPage {
    pageHeader = Selector('#cf-error-details h1')
    headerText = "Sorry, you have been blocked"
}