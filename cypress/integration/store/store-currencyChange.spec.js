/// <reference types="cypress" />
import {StoreHome} from '../../page-objects/store/store-page'
const data = require('../../fixtures/testdata.json')

describe('Currecy change in store', function() {
  const storePage = new StoreHome()

  before(() => {
    storePage.navigate()
  })

  it(`should change currency to ${data.USD}`, () => {
    storePage.selectCurrency(data.USD);
  })

  it('verify currency changed correctly', () => {
    storePage.verifyCurrency(data.USDSIGN)
  })

  
})
