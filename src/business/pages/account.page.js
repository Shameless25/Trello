const AccountComponents = require ('../components/account.components.js');

class AccountPage {
    constructor(){
        this.accountComponents = new AccountComponents()
    }
    async goToProfile() {
        await this.accountComponents.item('gotoprofilebutton').click();
    }

    async createBoard(boardName) {
        await this.accountComponents.item('createButton').click();
        await this.accountComponents.item('createTableButton').click();
        await this.accountComponents.item('setTableName').setValue(boardName);
        await this.accountComponents.item('confirmTableButton').click();
    }

    async changeProfileName(newUserName){
        await this.accountComponents.item('profileIcon').click();
        await this.accountComponents.item('profSettings').click();
        await this.accountComponents.item('username').setValue(newUserName);
        await this.accountComponents.item('aboutSaveBtn').click();
    }

    async searchBoard(boardName) {
        await this.accountComponents.item('searchBar').setValue(boardName);
    }

    async isAlertVisable(){
        const alertEl = await $(`span[data-testid="CheckCircleIcon"]`);
        await alertEl.waitForDisplayed({ timeout: 5000 });
        return await alertEl.isDisplayed();
    }

    async isBoardVisible(boardName) {
        return await $(`//*[text()='${boardName}']`);
    }

    async openBoard(newBoardName) {
        await $(`//*[text()='${newBoardName}']`).click()
    }

    async editWorkspaceName(newName) {
        await this.accountComponents.item('settings').click();
        await this.accountComponents.item('editWorkspaceName').click();
        await this.accountComponents.item('newWsName').setValue(newName);
        await this.accountComponents.item('saveButton').click();
    }

    async getWorkspaceName() {
        return this.accountComponents.item('workSpaceName').getText();
    }
}

module.exports = AccountPage;