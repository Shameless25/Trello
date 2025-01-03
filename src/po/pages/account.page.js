class AccountPage {
    constructor() {
        this.selectors = {
        setTableName:'input[data-testid="create-board-title-input"]',
        profileIcon:'div[data-testid="header-member-menu-avatar"]',
        profileSettings:'a[data-testid="account-menu-profile"]',
        newUsername:'input#username',
        aboutSaveButton:'button.JhBc38JIAKzHAt',
        createButton:'button[data-testid="header-create-menu-button"]',
        createTableButton:'button[data-testid="header-create-board-button"]',
        confirmTableButton:'button[data-testid="create-board-submit-button"]',
        searchBar:'input',
        settings:'a[data-testid="home-team-settings-tab"]',
        editWorkspaceName:'span[data-testid="EditIcon"]',
        newWorkspaceName:'input#displayName',
        saveButton:'button[type="submit"]',
        workspaceName:'h2.SiP6d2d_8FAAkC',
        alert:'span[data-testid="CheckCircleIcon"]'
        }
     }
    
    async clickCreateBoard(){
        await $(this.selectors.createButton).click();
    }

    async openCreationBorad(){
        await $(this.selectors.createTableButton).click();
    }
    
    async setBoardName(boardName){
        await $(this.selectors.setTableName).setValue(boardName);
    }

    async confirmBoardButton(){
        await $(this.selectors.confirmTableButton).click();
    }

    async clickProflieIcon(){
        await $(this.selectors.profileIcon).click();
    }

    async clickProfileSettings(){
        await $(this.selectors.profileSettings).click();
    }

    async setUsername(newUserName){
        await $(this.selectors.newUsername).setValue(newUserName);
    }

    async clickAboutSaveButton(){
        await $(this.selectors.aboutSaveButton).click();
    }

    async setBoardName(boardName){
        await $(this.selectors.searchBar).setValue(boardName);
    }

    async waitForDisplayed(selector, timeout = 5000) {
        const element = await $(selector);
        await element.waitForDisplayed({ timeout });
        return element.isDisplayed();
    } 

    async isDisplayed(selector){
        return await $(selector).isDisplayed();
    }
    
    async openSettings(){
        await $(this.selectors.settings).click();
    }

    async openEditWorkspace(){
        await $(this.selectors.editWorkspaceName).click();
    }

    async setNewWrokspaceName(newName){
        await $(this.selectors.newWorkspaceName).setValue(newName);
    }

    async clickSaveButton(){
        await $(this.selectors.saveButton).click();
    }

    async getWorkspaceName() {
        return await $(this.selectors.workspaceName).getText();
    }
}

module.exports = AccountPage;