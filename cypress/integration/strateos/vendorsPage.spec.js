import VendorsPage from '../../support/pages/VendorsPage';

context(("Strateos application Vendors Page"),()=>{

    const Page = new VendorsPage();

    before(()=>{
        Page.visitURL()
        Page.userLogin()
    })

    beforeEach(()=>{
        Cypress.Cookies.preserveOnce(Cypress.env('session_cookie'))
    })


it(("Go to vendor subtab and create a new vendor"),()=>{
   Page.openVendorsPage()
   Page.createNewVendor()
   Page.enterVendorName()
   Page.submitNewVendor()
   Page.assertVendorName()
})


it(("Delete newly created vendor"),()=>{
   Page.deleteNewVendor()
})
})
