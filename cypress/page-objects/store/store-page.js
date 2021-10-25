/// <reference types="cypress" />

export class StoreHome {
  navigate() {
    cy.visit('/store/salut-partners')
  }

  selectCurrency(currency){
    cy.get('[data-cy=select-currency]',{ timeout: 25000 }).select(`${currency}`)

  }
  verifyCurrency(currencySign) {
    cy.get('[data-cy=product-sale-price-on-card]',{ timeout: 15000 }).contains(`${currencySign}`)
  }

  
  
}
