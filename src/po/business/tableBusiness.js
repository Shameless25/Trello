const TablePage = require('../pages/table.page.js');

class TableBusiness{
    constructor(){
        this.tablePage = new TablePage();
    }

    async checkBoardTitle(){
        return await this.tablePage.getBoardTitle();
    }

    async checkTitle(elName){
        return await this.tablePage.getTitle(elName);
    }

    async createList(listName) {
        await this.tablePage.clickAddNewList();
        await this.tablePage.setListValue(listName);
        await this.tablePage.clickAddListButton();
    }
    
    async createCard(listName, cardName) {
        await this.tablePage.cardCreation(listName, cardName);
    }

    async filterCards(keyword) {
        await this.tablePage.clickFilterButton();
        await this.tablePage.setWordToSearch(keyword);
    }
    async checkFilteredCardTitle(text){
        return await this.tablePage.getFilteredCardTitle(text);
    }
}

module.exports = new TableBusiness();