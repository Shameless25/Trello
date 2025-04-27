const TableComponents = require ('../components/table.components.js');

class TablePage {
    constructor(){
        this.tableComponents = new TableComponents();
    }
    async createList(listName) {
        const addBtn = await this.tableComponents.item('addNewList')
        await addBtn.waitForClickable({ timeout: 5000 });
        await addBtn.click();
        await this.tableComponents.item('listForm').setValue(listName);
        await this.tableComponents.item('addListButton').click();
    }
    
    async createCard(listName, cardName) {
        const listContainer = await $(`[aria-label="${listName}"]`).parentElement().parentElement().parentElement();
        await listContainer.$('button[data-testid="list-add-card-button"]').click();
        await listContainer.$('textarea[data-testid="list-card-composer-textarea"]').setValue(cardName);
        await listContainer.$('button[data-testid="list-card-composer-add-card-button"]').click();
    }

    async filterCards(keyword) {
        await this.tableComponents.item('filterButton').click();
        await this.tableComponents.item('keywordSearch').setValue(keyword);
    }

    async getBoardTitle() {
        return await $('input[data-testid="board-name-input"]').getValue();
    }

    async getListTitle(listName) {
        return await $(`//*[text()='${listName}']`).getText();
    }

    async getCardTitle(cardName) {
        return await $(`//*[text()='${cardName}']`).getText();;
    }

    async getFilteredCardTitle(text) {
        return await $(`//*[contains(text(), "${text}")]`);


    }
};

module.exports = TablePage;