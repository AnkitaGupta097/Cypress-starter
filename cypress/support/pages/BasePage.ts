import loginLocators from '../../fixtures/locators/login_page.json';

export default abstract class Page {

    seesTextWithId(id: string, text: string): this {
      cy.get(`#${id}`).should('have.text', text);
      return this;
    }
  
    doesNotseesTextWithId(id: string, text: string): this {
      cy.get(`#${id}`).should('not.have.text', text);
      return this;
    }
  
    seesTextVisible(text: string): void {
      cy.contains(text).should('be.visible');
    }
  
    doesNotSeesTextVisible(text: string): void {
      cy.contains(text).should('not.be.visible');
    }
  
    seesTextVisibleOnDom(textLocation: string, text: string): void {
      cy.get(textLocation).should('have.text', text);
    }
  
    seesIdVisible(id: string): this {
      cy.get(`#${id}`).should('be.visible');
      return this;
    }
  
    doesNotseesIdVisible(id: string): this {
      cy.get(`#${id}`).should('not.be.visible');
      return this;
    }
  
    seesTextWithClass(domClass: string, text: string): this {
      cy.get(`.${domClass}`).should('have.text', text);
      return this;
    }
  
    seesDomVisibleWithCustomMatcher(domlabel: string, matcher: string): this {
      cy.get(`[${domlabel}=${matcher}]`).should('be.visible');
      return this;
    }
  
    seesDomVisible(domlabel: string): this {
      cy.get(domlabel).should('be.visible');
      return this;
    }
  
    seesTextInChildDom(parentDom: string, childDom: string, text: string): this {
      cy.get(`${parentDom} ${childDom}`).should('have.text', text);
      return this;
    }
  
    seesTextWithClassAndIndex(domClass: string, index: number, text: string): this {
      cy.get(`.${domClass}`).eq(index).should('have.text', text);
      return this;
    }
  
    hasLengthForDomWithClass(domClass: string, length: number): this {
      cy.get(`.${domClass}`).should('have.length', length);
      return this;
    }

    hasLengthOfDom(domClass: string, length: number): this {
      cy.get(domClass).should('have.length', length);
      return this;
    }
  
    hasLengthForDom(parentDomClass: string, childDom: string, length: number): this {
      cy.get(parentDomClass).find(childDom).should('have.length', length);
      return this;
    }
  
    seeAllChildDomsValue(dom:string,childDom:string,value:string){
      cy.get(dom).each((el)=>{
        cy.wrap(el).find(childDom).should("have.text",value)
      })
    }

    seesDomContainText(dom: string, text: string): this {
      cy.get(dom, { timeout: 20000 }).should('contain', text);
      return this;
    }
  
    doesNotSeesDomContainText(dom: string, text: string): this {
      cy.get(dom).should('not.contain.text', text);
      return this;
    }
  
    doesNotseesDom(dom: string): this {
      cy.get(dom).should('not.be.visible');
      return this;
    }
  
    seesTextInAGridCell(rowclass: string, text: string): this {
      cy.get(`[row-id=${rowclass}]`).should('have.text', text);
      return this;
    }
  
    seesAgGridColumnSelected(rowId: string, colId: string): this {
      cy.get(`[row-id=${rowId}]`)
        .find(`[col-id=${colId}]`)
        .should('have.class', 'ag-cell-range-selected');
      return this;
    }
  
    seesAgGridRowSelected(rowIndexId: string): this {
      cy.get(`[aria-rowindex=${rowIndexId}]`).should(
        'have.class',
        'ag-row-selected'
      );
      return this;
    }
  
    seesMinimumNumberOfElementsInDom(
      dom: string,
      childDomClass: string,
      minimumLength: number
    ): this {
      cy.get(dom)
        .find(`.${childDomClass}`)
        .should('have.length.at.least', minimumLength);
      return this;
    }
  
    seesNumberOfElementsInDom(
      dom: string,
      childDomClass: string,
      length: number
    ): this {
      cy.get(dom).find(`.${childDomClass}`).should('have.length', length);
      return this;
    }
  
    seesPathNameInUrl(path: string): this {
      cy.location('pathname').should('equal', path);
      return this;
    }
  
    seesFullPathNameWithQueryParams(path: string): this {
      const HOST = Cypress.config().baseUrl;
      cy.location('href').should('eq', `${HOST}/${path}`);
      return this;
    }
  
    seesDomDisabled(dom: string): this {
      cy.get(dom).should('be.disabled');
      return this;
    }
  
    seesDomEnabled(dom: string): this {
      cy.get(dom).should('not.be.disabled');
      return this;
    }
  
    clickOnId(id: string): this {
      cy.get(`#${id}`).click();
      return this;
    }
  
    clickOnBackSpaceAndTypeText(dom: string, text: string): void {
      cy.get(dom).type('{backspace}').type(text);
    }
  
    doubleClickOnId(id: string): this {
      cy.get(`#${id}`).dblclick();
      return this;
    }
  
    doubleClickAndDragOnAgGrid(rowId: string, colId: string): this {
      cy.get(`[row-id=${rowId}]`)
        .find(`[col-id=${colId}]`)
        .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
        .trigger('mouseup', { which: 1, pageX: 600, pageY: 6000 });
      return this;
    }
  
    clickOnDomElement(dom: string): this {
      cy.get(dom, { timeout: 20000 }).click();
      return this;
    }
  
    forceClickOnElement(dom: string): this {
      cy.get(dom).click({ force: true });
      return this;
    }
  
    clickOnDomElementLast(dom: string): this {
      cy.get(dom).last().click();
      return this;
    }
  
    clickOnDomElementFirst(dom: string): this {
      cy.get(dom, { timeout: 10000 }).first().click();
      return this;
    }
  
    clearTextOnDomElement(dom: string): this {
      cy.get(dom).clear();
      return this;
    }
  
    typeTextonDom(dom: string, text: string): this {
      cy.get(dom).type(text, { force: true });
      return this;
    }

    domWithTextExistsOrNot(dom: string,text:string){
      return cy.get("body").find(dom).then(el => {
        if (el.length > 0 && el.text() === text ) {  
          return true 
        }
        return false
    });
    }
  
    typeTextonId(id: string, text: string): this {
      cy.get(`#${id}`).type(text, { force: true });
      return this;
    }
  
    clickOnFirstChildDom(parentId: string, dom: string, index: number): this {
      cy.get(`${parentId} ${dom}`).eq(index).click();
      return this;
    }
  
    clickOnChildDom(parentDom:string,childDom:string){
     cy.get(parentDom).find(childDom).click()
     return this
    }

    clickOnText(text: string): this {
      cy.contains(text).click();
      return this;
    }
  
    clickOnChildDomHavingSpecificText(parentDom: string, textValue: string): this {
      cy.get(`${parentDom}`)
        .children()
        .contains(new RegExp(`^${textValue}$`, 'g'))
        .click();
      return this;
    }
  
    scrollToWithClassName(domClass: string, direction: PositionType): this {
      cy.get(`.${domClass}`).scrollTo(direction);
      return this;
    }

    mouseOverToDomAndReturnDom(domElement: string): Cypress.Chainable {
      return cy.get(domElement).trigger('mouseover')
    }
  
    dropdownSelect(dropDown: string, option: string): void {
      cy.get(dropDown).select(option);
    }
  
    dropdownNoValue(dropDown: string, option: string): void {
      cy.get(dropDown).should('not.have.value', option);
    }
  
    clickOnAgGridRow(rowId: string): this {
      cy.get(`[row-id=${rowId}]`).find('.ag-selection-checkbox').click();
      return this;
    }
  
    wait(milliSecs: number): this {
      cy.wait(milliSecs);
      return this;
    }
  
    extractValueFromElement(elemtnt:string): any {
      return cy.get(elemtnt).then(($el) => {
        return $el.text();
      });
    }
  
    selectItemByIndexFromListComponent(listComponent: string, index: number, value: string): void {
      cy.get(listComponent).click();
      cy.get('div.tx-checkbox:nth-child(' + index + ') .tx-checkbox__content').click();
      cy.get('.checkbox-group').find(`[value="${value}"]`).should('be.checked');
    }
  
    selectItemFromListComponentUsingName(listComponent: string, value: string): void {
      cy.get(listComponent).click();
      cy.get('.checkbox-group').should('be.visible').then(() => {
        cy.get('.checkbox-group')
          .children()
          .find(`[value="${value}"]`)
          .check({ force: true })
          .should('be.checked');
      });
    }
  
    selectAllItemsFromListComponentUsingName(listComponent: string, filterParams: string[]): void {
      cy.get(listComponent).click();
      cy.get('.checkbox-group').should('be.visible').then(() => {
        filterParams.forEach((filter) => {
          cy.get('.checkbox-group')
            .children()
            .find(`[value="${filter}"]`)
            .check({ force: true })
            .should('be.checked');
        });
      });
    }
  
    unselectItemFromListComponentUsingName(listComponent: string, filterParams: string): void {
      cy.get(listComponent).click();
      cy.get('.checkbox-group').should('be.visible').then(() => {
        cy.get('.checkbox-group')
          .children()
          .find(`[value="${filterParams}"]`)
          .uncheck({ force: true })
          .should('not.be.checked');
      });
    }
  
    unselectMultipleItemsFromListComponentUsingName(listComponent: string, filterParams: string[]): void {
      cy.get(listComponent).click();
      cy.get('.checkbox-group').should('be.visible').then(() => {
        filterParams.forEach((filter) => {
          cy.get('.checkbox-group')
            .children()
            .find(`[value="${filter}"]`)
            .uncheck({ force: true })
            .should('not.be.checked');
        });
      });
    }
  
    verifyListComponentItemsAreCheked(listComponent: string, index: number): void {
      cy.get(listComponent).click();
      cy.get('.checkbox-group').find(`[value="${index}"]`).should('be.checked');
    }
  
    logout(): this {
      cy.clearCookie('transcriptic_session');
      return this;
    }

    userLogin(): this {
      const email = Cypress.env("user")
      const password = Cypress.env("str-password")
      cy.get(loginLocators.emailAddressInput).type(email);
      cy.get(loginLocators.passwordInput).type(password);
      cy.get(loginLocators.submitButton).click();
      return this;
    }
  
    closeBrowser(): this {
      cy.end();
      this.wait(1000);
      return this;
    }
  
    goBack(): this {
      cy.go('back');
      return this
    }

    visitURL(url:string): this {
      cy.visit(url ||  Cypress.env('APP_URL'))
      return this
    }

    clickOnDOMElText(el:string, text: string): this {
      cy.contains(el,text).click();
      return this;
    }
  }
  
  type PositionType =
    | 'topLeft'
    | 'top'
    | 'topRight'
    | 'left'
    | 'center'
    | 'right'
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight';
  