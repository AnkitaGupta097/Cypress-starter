import CompoundsPage from '../../support/pages/CompoundsPage';

context(("Strateos application Compounds Page"),()=>{

    const Page = new CompoundsPage();

    before(()=>{
        Page.visitURL()
        Page.userLogin()
    })

    beforeEach(()=>{
        Cypress.Cookies.preserveOnce(Cypress.env('session_cookie'))
    })

    it(("open compound tab"),()=>{
    Page.openCompoundsTab();
    })

    it(("create a new public compound"),()=>{
        Page.registerNewCompound();
        Page.drawCompound();
        Page.enablePublicCompoundToggle()
        Page.enterSmileString();
        Page.nextPage();
        Page.createCompoundIfNotExist()

    })

    it("assert compound",()=>{
    Page.openCompoundsTab()
    Page.assertCreatedCompound()
    })

})