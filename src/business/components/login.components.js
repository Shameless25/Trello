class LoginComponents{

    constructor() {
       this.selectors = {
        loginmain:'a.=Log in',
        // logingoogle:'span.=Google',
        // inputadressgoogle:'[name="identifier"]',
        // confirmlog:'button=Next',
        // inputpswrdgoogle:'[name="Passwd"]',
        username:'input[data-testid="username"]',
        password:'input[data-testid="password"]',
        loginbutton:'button#login-submit',
        memberavatar:'button[data-testid="header-notifications-button"]',
        gotoboardsbutton:'a.=Go to your boards',
       }
    }

    item(el){
        return $(this.selectors[el.toLowerCase()]);
    }
}

module.exports = LoginComponents;