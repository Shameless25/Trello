const LoginPage = require ('./../po/pages/login.page.js');
const AccountPage = require ('./../po/pages/account.page.js');
const TablePage = require ('./../po/pages/table.page.js');
const { expect, browser } = require('@wdio/globals')
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const tablePage = new TablePage();

describe('Trello site gnereal test', () => {

    it('UC-1: User can log in to Trello', async () => {
        await loginPage.login('mailPlaceholder', 'passwordPlaceholder');
        const holder = await loginPage.browserURL();
        await holder.waitForExist({ timeout: 10000 });
        const currentURL = await browser.getUrl();
        await expect(currentURL).toContain('boards');
    });

    it('UC-2: User edits their user profile', async () => {
        await accountPage.goToProfile();
        await accountPage.changeProfileName('new_user12');
        const alertEl = await accountPage.isAlertVisable();
        await expect(alertEl).toBeDisplayed();
    });

    it('UC-3: User can create a board', async () => {
        await accountPage.goToProfile();
        await accountPage.createBoard('Test Board');
        const title = await tablePage.getBoardTitle();
        await expect(title).toContain('Test Board');
    });

    it('UC-4: User can search for a board', async () => {
        await accountPage.goToProfile();
        await accountPage.searchBoard('Test Board');
        const boardVisability = await accountPage.isBoardVisible('Test Board');
        await expect(boardVisability).toBeDisplayed();
    });

    it('UC-5: User can create a list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createList('New List');
        const listTitle = await tablePage.getListTitle('New List')
        await expect(listTitle).toBe('New List');
    });

    it('UC-6: User can create a card in the list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createCard('New List', 'New Card');
        const cardTitle = await tablePage.getCardTitle('New Card');
        await expect(cardTitle).toBe('New Card');
    });

    it('UC-7: User can filter cards in a list', async () => {
        await accountPage.goToProfile();
        await accountPage.openBoard('Test Board');
        await tablePage.createCard('New List', 'Filter Card');
        await tablePage.filterCards('Filter');
        const filter = await tablePage.getFilteredCardTitle('Filter Card');
        await filter.waitForExist({ timeout:2500 });
        await expect(filter).toBeDisplayed();
    });

    it('UC-8: User can edit their workspace', async () => {
        await accountPage.goToProfile();
        await accountPage.editWorkspaceName('New Workspace Name');
        const workspaceName = await accountPage.getWorkspaceName();
        await expect(workspaceName).toBe('New Workspace Name');
    });
})

