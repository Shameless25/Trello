const LoginPage = require ('./../po/pages/login.page.js');
const AccountPage = require ('./../po/pages/account.page.js');
const TablePage = require ('./../po/pages/table.page.js');
const chai = require('chai');
const { assert } = chai;
const { expect } = chai;
const should = chai.should();
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const tablePage = new TablePage();

describe('Trello site gnereal test', () => {

    it('UC-1: User can log in to Trello', async () => {
        await loginPage.login('mailPlaceholder', 'passwordPlaceholder');
        const holder = await loginPage.browserURL();
        await holder.waitForExist({ timeout: 10000 });
        const currentURL = await browser.getUrl();
        assert.include(currentURL, 'boards', 'You have been logged in');
    });

    it('UC-2: User edits their user profile', async () => {
        await accountPage.goToProfile();
        await accountPage.changeProfileName('new_user13');
        const alertEl = await accountPage.isAlertVisable();
        await alertEl.waitForDisplayed({ timeout: 5000 });
        const isDisplayed = await alertEl.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it('UC-3: User can create a board', async () => {
        await accountPage.goToProfile();
        await accountPage.createBoard('Test Board');
        const title = await tablePage.getBoardTitle();
        title.should.contain('Test Board');
    });

    it('UC-4: User can search for a board', async () => {
        await accountPage.goToProfile();
        await accountPage.searchBoard('Test Board');
        const boardVisability = await accountPage.isBoardVisible('Test Board');
        expect(await boardVisability.isDisplayed()).to.be.true;
    });

    it('UC-5: User can create a list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createList('New List');
        const listTitle = await tablePage.getListTitle('New List')
        listTitle.should.equal('New List');
    });

    it('UC-6: User can create a card in the list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createCard('New List', 'New Card');
        const cardTitle = await tablePage.getCardTitle('New Card');
        assert.equal(cardTitle, 'New Card', 'You created new card in the list');
    });

    it('UC-7: User can filter cards in a list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createCard('New List', 'Filter Card');
        await tablePage.filterCards('Filter');
        const filter = await tablePage.getFilteredCardTitle('Filter Card');
        await filter.waitForExist({ timeout:2500 });
        expect(await filter.isDisplayed()).to.be.true;
    });

    it('UC-8: User can edit their workspace', async () => {
        await accountPage.goToProfile();
        await accountPage.editWorkspaceName('New Workspace Name');
        const workspaceName = await accountPage.getWorkspaceName();
        assert.equal(workspaceName, 'New Workspace Name', 'Workspace name is changed');
    });
})

