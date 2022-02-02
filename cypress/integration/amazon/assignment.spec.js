context(('Amazon website testing'), ()=>{
  
    it(('Open Amazon.in'),()=>{
      cy.visit('https://www.amazon.in/')
    })

    it(('Click on Today\'s Deals'),()=>{
     cy.get('.nav-a').contains('Today\'s Deals')
     .click()
    })

    it(('Get the third deal'),()=>{
      cy.get('[data-testid=grid-deals-container]')
      .children()
      .eq(2)
      .find('[data-testid=deal-card]')
      .children()
      .eq(3)
      .children().then((el)=>{
      cy.log('Third deal of the day is', el.text())
      })
    })

    it(('Add item to the cart'),()=>{
      cy.get('[data-testid=grid-deals-container]')
      .children()
      .eq(2)
      .click()

      //clicking first item in list
      // cy.get('.a-col-left  ul.a-unordered-list  li').first().click()
      cy.get('.a-col-right ul.a-unordered-list li').first().click()
      // cy.get('.s-search-results > .s-result-item').eq(1).find('a.a-link-normal').first().invoke('removeAttr', 'target').click()


      cy.get("#add-to-cart-button").click()
      cy.get("body").then((body)=>{
        if(body.find("#attach-close_sideSheet-link").length>0){
            cy.get("#attach-close_sideSheet-link").click();
        }})
        })
     
    it(('Verfy cart item quantity'),()=>{
      cy.get("#nav-cart-count").should("have.text","1")
    })

    it(('Serch Mobile and scroll down and get last item detail'),()=>{
       cy.get(".nav-search-field > input").type("Mobile{enter}")
       cy.get("div[data-component-type=s-search-result]").last().scrollIntoView().find('.s-list-col-right').then((el)=>{

        if(el.find(".s-title-instructions-style").length>0){
          cy.log(el.find(".s-title-instructions-style").text())
        }

        if(el.find(".s-price-instructions-style").length>0){
         const price=  el.find(".s-price-instructions-style .a-price:first .a-offscreen").text()
         cy.log(price)
        }

       })
    })
    it(('Select amazon prime delivery checkbox'),()=>{
        cy.get(".nav-a").contains("Mobiles").click()
        cy.get("#s-refinements > .a-section").eq(2).find('ul>li').first().find('.a-checkbox').click()
    })

    it(('Get first displayed item delivery date'),()=>{
      cy.get("div[data-component-type=s-search-result]").first()
      .find('.a-section').last().find('span.a-text-bold').then((el)=>{
        cy.log(el.text())
      })
  })

  it(('Open left nav, select mobiles and come back to main menu'),()=>{
    cy.get("#nav-hamburger-menu").click()
    cy.get("#hmenu-content > ul.hmenu-visible > li").contains("Mobiles, Computers").click()
    cy.get("#hmenu-content > ul.hmenu-visible > li").contains("main menu").click()

})

  });