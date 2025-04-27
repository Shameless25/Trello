const LoginComponents = require ('../components/login.components.js');

class LoginPage {
    constructor(){
        this.loginComponents = new LoginComponents();
    }
    
    async login(username, password) {
        await this.loginComponents.item('loginMain').click();
        await this.loginComponents.item('username').setValue(username);
        await this.loginComponents.item('loginbutton').click()
        // await this.loginComponents.item('loginGoogle').click();
        // await this.loginComponents.item('inputAdressGoogle').setValue(username);
        // await this.loginComponents.item('confirmLog').click();
        // await this.loginComponents.item('inputPswrdGoogle').setValue(password);
        await this.loginComponents.item('password').setValue(password);
        // await browser.pause(5000);
        await this.loginComponents.item('loginbutton').click();
    }
    async browserURL(){
        const avatarConfirm = await this.loginComponents.item('memberAvatar');
        await avatarConfirm.waitForExist({ timeout: 10000 });
        return await browser.getUrl();
    }
}

module.exports = LoginPage;