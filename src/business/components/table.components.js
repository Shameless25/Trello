class TableComponent{

    constructor() {
       this.selectors = {
       addnewlist:'button[data-testid="list-composer-button"]',
       listform:'textarea[data-testid="list-name-textarea"]',
       addlistbutton:'button[data-testid="list-composer-add-list-button"]',
       filterbutton:'button[data-testid="filter-popover-button"]',
       keywordsearch:'input.nch-textfield__input',

       }
    }

    item(el){
        return $(this.selectors[el.toLowerCase()]);
    }
}

module.exports = TableComponent;