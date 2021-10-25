/// <reference types="cypress" />

export class FileUpLoadPage {
  navigate() {
    cy.visit('/sweatshirtmen')
  }


  clickFileBtn() {
    cy.get('[data-index=4]',{ timeout: 25000 }).click()  
  }


  fileUpload() {
    const filepath = 'images/test.jpg'
    cy.get('input[type="file"]').attachFile(filepath)
    cy.get('[data-cy=modal-upload-button]').click()
    
 
  }

  placeImage(){
   // cy.get('[data-cy=studio-image-dropzone-placeimage-button]').should('have.class', 'chakra-button css-13978gh').click()
    cy.get('[data-cy=studio-image-dropzone-library] > .css-1ojxlgc > .css-rmu82j > [data-cy=studio-image-dropzone-placeimage-button]').click()
    cy.get('.chakra-toast > .chakra-toast__inner').should("be.visible")
    cy.get('.css-8zb1o3 > :nth-child(3)').click()
    cy.get('#THREEJS > canvas').click()
  }

  editPlacedImage(){
    cy.get('[data-cy=images-placed-section] > .chakra-icon').click()
    cy.get('[data-cy=studio-image-dropzone-edit-placedimage-button]').click()
   


  }

  mirrorImageHorizontally(){
    cy.get('[aria-label="Mirror Y"]').click()


  }
}
