import BasePage from './BasePage';
import resourcesLocators from '../../fixtures/locators/resources_page.json';
import compoundsLocators from '../../fixtures/locators/compounds_page.json';
import resourcesData from '../../fixtures/data/resources_page.json';
import compoundsData from '../../fixtures/data/compounds_page.json';


export default class ResourcesPage extends BasePage {
    openMenu() {
        this.clickOnDomElement(resourcesLocators.menu);
    }
    openVendorTab() {
        this.clickOnDomElement(resourcesLocators.vendorTab);
    }

    openResourcesTab(){
        this.clickOnDomElement(resourcesLocators.resourceTab)
    }

    openResourcesPage() {
        this.openMenu();
        this.openVendorTab();
        this.openResourcesTab()
    }

    addResource() {
        this.clickOnDomElement(resourcesLocators.addResourceButton);
    }

    enterResourceName() {
        this.typeTextonDom(resourcesLocators.resourceNameInput, resourcesData.resourceName);
    }

    kindSelect() {
        this.clickOnDomElement(resourcesLocators.resourceKindSelector);
    }

    selectChemicalStructure() {
        this.clickOnDomElement(resourcesLocators.chemicalStructure);
    }

    linkCompound() {
        this.clickOnDomElement(resourcesLocators.linkCompoundButton);
    }

    selectCompound() {
        this.typeTextonDom(compoundsLocators.smileSearchInput,compoundsData.smileString)
        this.wait(3000)
        this.clickOnFirstChildDom(compoundsLocators.tBodyRow,compoundsLocators.rowCheckbox,0)
    }

    addButton() {
        this.clickOnDomElement(resourcesLocators.createResource);
    }

    filterByKind() {
        this.clickOnDomElement(resourcesLocators.kindFilter);
    }

    filterByStorage() {
        this.clickOnDomElement(resourcesLocators.storageFilter);
    }

    filterByChemicalStructureKind() {
        this.clickOnDomElement(resourcesLocators.chemicalStructureRadio);
    }

    filterByCold20Storage() {
        this.clickOnDomElement(resourcesLocators.cold_20);
    }

    assertStorageFilter(value: string) {
        this.seeAllChildDomsValue(resourcesLocators.resourceCards,resourcesLocators.storageValue,value)
        }

    assertKindFilter(value: string) {
            this.seeAllChildDomsValue(resourcesLocators.resourceCards,resourcesLocators.kindValue,value)
        }
}
