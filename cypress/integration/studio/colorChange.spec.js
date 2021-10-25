/// <reference types="cypress" />
import {StudioPage} from '../../page-objects/studio/studioColor-page'
const data = require('../../fixtures/testdata.json')

describe('User try out the Studio Demo by changing clothes color', () => {
  const studioPage = new StudioPage()

  before(() => {
  
      studioPage.navigate()
  })

  it('First,From Product page, user click on “Design Now” button to access the studio', () => {
      studioPage.clickOnDesignBtn()
      studioPage.waitForNextPage();
  })

  it('Than,should open color option', () => {
      studioPage.clickColorBtn()
  })

 
  it('should select  red for colorzone1 correctly', () => {
      studioPage.selectColor(data.red);
    })

  it('should select  orange  from colorzone2 correctly', () => {
      studioPage.selectColorZone(data.zone2)
      studioPage.selectColor(data.orange)
    })

  it('should select  white from colorzone3 correctly', () => {
      studioPage.selectColorZone(data.zone3)
      studioPage.selectColor(data.white)
    })
    
  
})
