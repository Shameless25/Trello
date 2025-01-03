class LoginPage {
    constructor(){
        this.selectors = {
            goToBoardsButton:'a=Go to your boards',
            loginMain:'a.=Log in',
            username:'input[data-testid="username"]',
            password:'input[data-testid="password"]',
            loginButton:'button#login-submit',
            memberAvatar:'button[data-testid="header-notifications-button"]'
           };
    }
    
    async setUsername(mail){
        await $(this.selectors.username).setValue(mail);
    }
    
    async setPassword(password) {
        await $(this.selectors.password).setValue(password);
    }

    async clickLoginMain() {
        await $(this.selectors.loginMain).click();
    }

    async clickLoginButton() {
        await $(this.selectors.loginButton).click();
    }

    async clickGoToBoards() {
        await $(this.selectors.goToBoardsButton).click();
    }

    async isLoggedIn() {
        const itemToExist = await $(this.selectors.memberAvatar);
        await itemToExist.waitForExist({timeout:10000});
    }

    async getCurrentURL() {
        return await browser.getUrl();
    }
}

module.exports = LoginPage;