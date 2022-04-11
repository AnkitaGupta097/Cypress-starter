import BasePage from './BasePage';
import vendorsLocators from '../../fixtures/locators/vendor_page.json';
import vendorsData from '../../fixtures/data/vendor_page.json';

export default class VendorsPage extends BasePage {
    openMenu() {
        this.clickOnDomElement(vendorsLocators.menu);
    }
    openVendorTab() {
        this.clickOnDomElement(vendorsLocators.vendorTab);
    }

    openVendorsSubTab(){
        this.clickOnDomElement(vendorsLocators.vendorsSubTab);
    }

    openVendorsPage() {
        this.openMenu()
        this.openVendorTab()        
        this.openVendorsSubTab()
    }

    createNewVendor() {
        this.clickOnDomElement(vendorsLocators.addVendorButton);
    }

    enterVendorName() {
        this.typeTextonDom(vendorsLocators.vendorNameInputField,vendorsData.vendorName);
    }

    submitNewVendor() {
        this.clickOnDomElement(vendorsLocators.createVendorButton);
    }

    assertVendorName() {
        this.seesTextVisibleOnDom(vendorsLocators.createdNewVendor, vendorsData.vendorName)
    }

    deleteNewVendor(){
        this.clickOnDomElement(vendorsLocators.deleteIcon)
        this.clickOnDomElement(vendorsLocators.deleteButton)
    }
}