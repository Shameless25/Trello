const LoginComponents = require ('../components/login.components.js');

class LoginPage {
    constructor(){
        this.loginComponents = new LoginComponents();
    }
    
    async goToLoginPage(){
        await this.loginComponents.item('loginMain').click();
    }

    async login(username, password) {
        await this.loginComponents.item('username').setValue(username);
        await this.loginComponents.item('loginbutton').click()
        await this.loginComponents.item('password').setValue(password);
        await this.loginComponents.item('loginbutton').click();
    }
    async browserURL(){
        return await this.loginComponents.item('memberAvatar');
    }
}

module.exports = LoginPage;