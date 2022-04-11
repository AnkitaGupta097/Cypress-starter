import BasePage from './BasePage';
import compoundsLocators from '../../fixtures/locators/compounds_page.json';
import compoundData from '../../fixtures/data/compounds_page.json';

export default class CompoundsPage extends BasePage {
    openCompoundsTab() {
        this.clickOnDOMElText(compoundsLocators.compoundTab.el,compoundsLocators.compoundTab.text)
    }

    registerNewCompound() {
        this.clickOnDOMElText(compoundsLocators.registerCompoundsButton.el,compoundsLocators.registerCompoundsButton.text)
    }

    drawCompound() {
        this.clickOnDomElement(compoundsLocators.drawOption);
    }

    enablePublicCompoundToggle(){
        this.clickOnDomElement(compoundsLocators.publicCompoundToggle)
    }

    enterSmileString() {
        this.typeTextonDom(compoundsLocators.smilesInput,compoundData.smileString)
    }

    nextPage(){
        this.clickOnDomElement(compoundsLocators.nextButton);
    }

    createCompoundIfNotExist(){
        this.domWithTextExistsOrNot(compoundsLocators.bannerTitle.el,compoundsLocators.bannerTitle.text).then((isExist)=>{
            if(isExist){
                this.clickOnDomElement(compoundsLocators.modalCloseIcon)
            }
            else{
                this.createCompound()
            }

        })
    }

    enterNickName(name: string) {
        this.typeTextonDom(compoundsLocators.nickName, name);
    }

    createCompound() {
        this.enterNickName(compoundData.compoundName)
        this.clickOnDomElement(compoundsLocators.createCompound)
    }

    assertCreatedCompound() {
        this.typeTextonDom(compoundsLocators.smileSearchInput,compoundData.smileString)
        this.wait(3000)
        this.seesMinimumNumberOfElementsInDom(compoundsLocators.tableBody,compoundsLocators.tableRow,1)

    }
}