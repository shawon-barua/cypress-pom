/// <reference types="cypress" />
import {StudioPage} from '../../page-objects/studio/studioColor-page'
import {FileUpLoadPage} from '../../page-objects/studio/studioFileupload-page'


describe('User able to upload image and place on model', () => {
  const studioPage = new StudioPage()
  const fileUploadPage = new FileUpLoadPage()

  before(() => {
    studioPage.navigate()
   
  })

  it('From Product page, user click on “Design Now” button to access the studio', () => {
    studioPage.clickOnDesignBtn()
    studioPage.waitForNextPage();
  })

  it('should go to file upload tab', () => {
    fileUploadPage.clickFileBtn()
  })

  it('User upload image in Image Menu', () => {
    fileUploadPage.fileUpload()
  })

  it('should place the image on model', () => {
    fileUploadPage.placeImage()
  })

  it('Click edit placed image', () => {
    fileUploadPage.editPlacedImage()
  })

  it('Mirror horizontal placed image', () => {
    fileUploadPage.mirrorImageHorizontally()
  })
  
})
