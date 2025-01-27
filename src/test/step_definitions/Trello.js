import { Given, When, Then, world, context } from '@wdio/cucumber-framework'
const LoginPage = require ('./../../po/pages/login.page.js');
const AccountPage = require ('./../../po/pages/account.page.js');
const TablePage = require ('./../../po/pages/table.page.js');
const loginPage = new LoginPage();
const accountPage = new AccountPage();
const tablePage = new TablePage();
const assert = require('chai').assert;
const expect = require('chai').expect;

Given('the User open login page', async () => {
    await loginPage.goToLoginPage();
});
When('the User enters their valid email and password',async()=>{
    await loginPage.login('mailPlaceholder', 'passwordPlaceholder');
})

Then('the User should be redirected to their boards page',async()=>{
    const holder = await loginPage.browserURL();
    await holder.waitForExist({ timeout: 10000 });
    const currentURL = await browser.getUrl();
    assert.include(currentURL, 'boards', 'You have been logged in');
})

Given('the User is on their profile page',async()=>{
    await accountPage.goToProfile();
});

When('the User updates their profile name to {string}', async (newName) => {
    await accountPage.changeProfileName(newName);
});

Then('a success alert should be displayed', async () => {
    const alertEl = await accountPage.isAlertVisable();
    await alertEl.waitForDisplayed({ timeout: 5000 });
    const isDisplayed = await alertEl.isDisplayed();
    expect(isDisplayed).to.be.true;
});

When('the User creates a board named {string}', async (boardName) => {
    await accountPage.createBoard(boardName);
});

Then('the board title should contain {string}', async (boardName) => {
    const title = await tablePage.getBoardTitle();
    title.should.contain(boardName);
});

When('the User searches for a board named {string}', async (boardName) => {
    await accountPage.searchBoard(boardName);
});

Then('the board {string} should be visible', async (boardName) => {
    const boardVisability = await accountPage.isBoardVisible(boardName);
    expect(await boardVisability.isDisplayed()).to.be.true;
});

When('the User creates a list named {string} in the board {string}', async (listName, boardName) => {
    await accountPage.openBoard(boardName);
    await tablePage.createList(listName);
});

Then('the list title should be {string}', async (listName) => {
    const listTitle = await tablePage.getListTitle(listName);
    listTitle.should.equal(listName);
});

When('the User creates a card named {string} in the list {string}', async (cardName, listName) => {
    await accountPage.openBoard('Test Board');
    await tablePage.createCard(listName, cardName);
});

Then('the card title should be {string}', async (cardName) => {
    const cardTitle = await tablePage.getCardTitle(cardName);
    assert.equal(cardTitle, cardName, 'You created new card in the list');
});

When('the User filters cards with the keyword {string}', async (filterKeyword) => {
    await accountPage.openBoard('Test Board');
    await tablePage.filterCards(filterKeyword);
});

Then('the filtered card with the title {string} should be displayed', async (cardName) => {
    const filter = await tablePage.getFilteredCardTitle(cardName);
    await filter.waitForExist({ timeout: 2500 });
    expect(await filter.isDisplayed()).to.be.true;
});

When('the User changes the workspace name to {string}', async (workspaceName) => {
    await accountPage.editWorkspaceName(workspaceName);
});

Then('the workspace name should be updated to {string}', async (workspaceName) => {
    const updatedWorkspaceName = await accountPage.getWorkspaceName();
    assert.equal(updatedWorkspaceName, workspaceName, 'Workspace name is changed');
});