/// <reference types="cypress" />

export class StudioPage {
  navigate() {
    cy.visit('/sweatshirtmen')
  }

  clickOnDesignBtn() {
    cy.get('[data-cy=add-to-cart]',{ timeout: 15000 }).click()
  }

  waitForNextPage(){
    cy.get('[data-index=0]',{ timeout: 25000 }).should('have.attr', 'aria-selected', 'true')
  }

  clickColorBtn() {
    cy.get('[data-index=1]',{ timeout: 25000 }).click()  
  }

  selectColor(index) {
    cy.get(`[data-cy=color-index-${index}]`).click() 
  }

  selectColorZone(zone){
    cy.get('select').select(`COLORZONE-${zone}`)

  }
 
}
