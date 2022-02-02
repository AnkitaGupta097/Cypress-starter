context(('Amazon website testing part-2'), ()=>{
  
      it(('Open Amazon.in'),()=>{
        cy.visit('https://www.amazon.in/')
      })
  
      it(('Go to orders'),()=>{
       cy.get("#nav-orders").click()

       //sign in
       const phone = Cypress.env("phone")
       const password = Cypress.env("password")

       cy.get("#ap_email").type(phone)
       cy.get(".a-button-inner > #continue").click()
       cy.get("#ap_password").type(atob(password),{log:false})
       cy.get("#signInSubmit").click()
      })

      it(('Select past one year orders'),()=>{
         const date = new Date()
         date.setFullYear(date.getFullYear-1)
         cy.get(".order-filter-dropdown").click()


      })

      it(('Go to payment options'),()=>{

      })

      it(('Add new payment option'),()=>{

    })

    it(('Verify payment option is added'),()=>{

    })

    it(('Go to addresses'),()=>{

    })

    it(('Add new address'),()=>{

    })

    it(('Verify new address'),()=>{

    })


    });