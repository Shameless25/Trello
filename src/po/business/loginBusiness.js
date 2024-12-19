const LoginPage = require('../pages/login.page.js');

class LoginBusiness {
    constructor(){
        this.loginPage = new LoginPage();
    }

    async login(mail, password) {
        await this.loginPage.clickLoginMain();
        await this.loginPage.setUsername(mail);
        await this.loginPage.clickLoginButton();
        await this.loginPage.setPassword(password);
        await this.loginPage.clickLoginButton();
    }
    async verifyLoginSuccessful(){
        await this.loginPage.isLoggedIn();
        return await this.loginPage.getCurrentURL();
    }
}

module.exports = new LoginBusiness();