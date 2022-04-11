import ResourcesPage from '../../support/pages/ResourcesPage';
import ResourcesData from '../../fixtures/data/resources_page.json';

context(("Strateos application Resources Page"),()=>{

    const Page = new ResourcesPage();

    before(()=>{
        Page.visitURL()
        Page.userLogin()
    })

    beforeEach(()=>{
        Cypress.Cookies.preserveOnce(Cypress.env('session_cookie'))
    })

    it(("open compound tab"),()=>{
    Page.openResourcesPage();
    })

    it(("create a new resource"),()=>{
        Page.addResource();
        Page.enterResourceName()
        Page.kindSelect();
        Page.selectChemicalStructure();
        Page.linkCompound();
        Page.selectCompound();
        Page.addButton();

    })

    it("Filter by kind and storage", () => {
        Page.filterByKind();
        Page.filterByChemicalStructureKind();
        Page.filterByStorage();
        Page.filterByCold20Storage();
        Page.wait(3000)
        Page.assertStorageFilter(ResourcesData.cold20)
        Page.assertKindFilter(ResourcesData.chemicalStructure)
    });

})