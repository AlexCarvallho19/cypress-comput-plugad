/// <reference types="Cypress" />

describe('acessar pagina web', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Validar acesso', () => {
      cy.title().should('be.equal', 'Computação Plugada WEB')
      cy.gui_iniciar()
    })
    
  })