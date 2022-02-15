// import projectLocator from 'fixtures/locators/projects_page.json';
import loginLocator from '../../fixtures/locators/login_page.json';


context(("Strateos application"),()=>{

    it(("Visit Strateos"),()=>{
     cy.visit("https://strateos.dev-apps.io")
    })

    it(("Login the application"),()=>{
        const email = Cypress.env("user")
        const password = Cypress.env("str-password")

       cy.get(loginLocator.loginForm).within(()=>{
           cy.get(loginLocator.emailAddressInput).type(email)
           cy.get(loginLocator.passwordInput).type(password)
           cy.get(loginLocator.submitButton).click()
       })
    })

})