const loginBusiness = require ('./../po/business/loginBusiness.js');
const accountBusiness = require ('./../po/business/accountBusiness.js');
const tableBusiness = require ('./../po/business/tableBusiness.js');
const chai = require('chai');
const { assert, expect } = chai;
const should = chai.should();

describe('Trello site gnereal test', () => {

    it('UC-1: User can log in to Trello', async () => {
        await loginBusiness.login('placeholderMail', 'placeholderPassword');
        const url = await loginBusiness.verifyLoginSuccessful();
        assert.include(url, 'boards', 'You have been logged in');
    });

    it('UC-2: User edits their user profile', async () => {
        await accountBusiness.changeProfileName('new_user13');
        expect(await accountBusiness.isAlertVisable()).to.be.true;
    });

    it('UC-3: User can create a board', async () => {
        await accountBusiness.createBoard('Test Board');
        const boardTitle = await tableBusiness.checkBoardTitle();
        boardTitle.should.contain('Test Board');
    });

    it('UC-4: User can search for a board', async () => {
        await accountBusiness.searchBoard('Test Board');
        expect(await accountBusiness.isBoardVisible('Test Board')).to.be.true;
    });

    it('UC-5: User can create a list', async () => {
        await accountBusiness.openBoard('Test Board')
        await tableBusiness.createList('New List');
        const listTitle = await tableBusiness.checkTitle('New List')
        listTitle.should.equal('New List');
    });

    it('UC-6: User can create a card in the list', async () => {
        await accountBusiness.openBoard('Test Board')
        await tableBusiness.createCard('New List', 'New Card');
        const cardTitle = await tableBusiness.checkTitle('New Card');
        assert.equal(cardTitle, 'New Card', 'You created new card in the list');
    });

    it('UC-7: User can filter cards in a list', async () => {
        await accountBusiness.openBoard('Test Board')
        await tableBusiness.createCard('New List', 'Filter Card');
        await tableBusiness.filterCards('Filter');
        const checkCardTitle = await tableBusiness.checkFilteredCardTitle('Filter Card');
        expect(await checkCardTitle.isDisplayed()).to.be.true;
    });

    it('UC-8: User can edit their workspace', async () => {
        const workspaceName = await accountBusiness.editWorkspaceName('New Workspace Name');
        assert.equal(workspaceName, 'New Workspace Name', 'Workspace name is changed');
    });
})

