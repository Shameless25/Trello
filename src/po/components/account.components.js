class AccountComponents{

    constructor() {
       this.selectors = {
       gotoprofilebutton:'a=Go to your boards',
       settablename:'input[data-testid="create-board-title-input"]',
       profileicon:'div[data-testid="header-member-menu-avatar"]',
       profsettings:'a[data-testid="account-menu-profile"]',
       username:'input#username',
       aboutsavebtn:'button.JhBc38JIAKzHAt',
       createbutton:'button[data-testid="header-create-menu-button"]',
       createtablebutton:'button[data-testid="header-create-board-button"]',
       confirmtablebutton:'button[data-testid="create-board-submit-button"]',
       searchbar:'input',
       settings:'a[data-testid="home-team-settings-tab"]',
       editworkspacename:'span[data-testid="EditIcon"]',
       newwsname:'input#displayName',
       savebutton:'button[type="submit"]',
       workspacename:'h2.SiP6d2d_8FAAkC',
       }
    }

    item(el){
        return $(this.selectors[el.toLowerCase()]);
    }
}

module.exports = AccountComponents;