class TablePage {
    constructor() {
        this.selectors = {
        addNewList:'button[data-testid="list-composer-button"]',
        listForm:'textarea[data-testid="list-name-textarea"]',
        addListButton:'button[data-testid="list-composer-add-list-button"]',
        addCardButton:'button[data-testid="list-add-card-button"]',
        cardComposer:'textarea[data-testid="list-card-composer-textarea"]',
        cardComposerAdd:'button[data-testid="list-card-composer-add-card-button"]',
        filterButton:'button[data-testid="filter-popover-button"]',
        keywordSearch:'input.nch-textfield__input',
        boardTitle:'input[data-testid="board-name-input"]'
        }
    }

    async clickAddNewList() {
        const addButton = await $(this.selectors.addNewList);
        await addButton.waitForClickable({ timeout: 5000 });
        await addButton.click();
    }

    async setListValue(listName) {
        await $(this.selectors.listForm).setValue(listName);
    }

    async clickAddListButton() {
        await $(this.selectors.addListButton).click();
    }

    async cardCreation(listName, cardName) {
        const listContainer = await $(`[aria-label="${listName}"]`).parentElement().parentElement().parentElement();
        await listContainer.$(this.selectors.addCardButton).click();
        await listContainer.$(this.selectors.cardComposer).setValue(cardName);
        await listContainer.$(this.selectors.cardComposerAdd).click();
    }

    async clickFilterButton() {
        await $(this.selectors.filterButton).click();
    }

    async setWordToSearch(keyword) {
        await $(this.selectors.keywordSearch).setValue(keyword);
    }

    async getBoardTitle() {
        return await $(this.selectors.boardTitle).getValue();
    }

    async getTitle(elName) {
        return await $(`//*[text()='${elName}']`).getText();
    }

    async getFilteredCardTitle(text) {
        const cardTitle = await $(`//*[contains(text(), "${text}")]`);
        await cardTitle.waitForExist({ timeout:2500 });
        return cardTitle;
    }
};

module.exports = TablePage;