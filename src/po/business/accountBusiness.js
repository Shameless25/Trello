const AccountPage = require('../pages/account.page.js');
const LoginPage = require("../pages/login.page.js");
class AccountBusiness {
    constructor(){
        this.accountPage = new AccountPage();
        this.loginPage = new LoginPage();
    }
    async createBoard(boardName) {
        await this.loginPage.clickGoToBoards();
        await this.accountPage.clickCreateBoard();
        await this.accountPage.openCreationBorad();
        await this.accountPage.setBoardName(boardName);
        await this.accountPage.confirmBoardButton();
    }

    async changeProfileName(newUserName){
        await this.loginPage.clickGoToBoards();
        await this.accountPage.clickProflieIcon();
        await this.accountPage.clickProfileSettings();
        await this.accountPage.setUsername(newUserName);
        await this.accountPage.clickAboutSaveButton();
    }

    async searchBoard(boardName) {
        await this.loginPage.clickGoToBoards();
        await this.accountPage.setBoardName(boardName);
    }

    async isAlertVisable(){
        return await this.accountPage.waitForDisplayed(this.accountPage.selectors.alert);
    }

    async isBoardVisible(boardName) {
        return await this.accountPage.isDisplayed(`//*[text()='${boardName}']`);
    }

    async editWorkspaceName(newName) {
        await this.loginPage.clickGoToBoards();
        await this.accountPage.openSettings();
        await this.accountPage.openEditWorkspace();
        await this.accountPage.setNewWrokspaceName(newName);
        await this.accountPage.clickSaveButton();
        return await this.accountPage.getWorkspaceName();
    }

    async openBoard(newBoardName) {
        await this.loginPage.clickGoToBoards();
        await $(`//*[text()='${newBoardName}']`).click()
    }
}

module.exports = new AccountBusiness();