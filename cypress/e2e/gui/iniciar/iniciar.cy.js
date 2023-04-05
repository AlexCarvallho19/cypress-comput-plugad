describe('Acessar a pagina Computação Plugada WEB', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Validar acesso', () => {
      cy.title().should('be.equal', 'Computação Plugada WEB')
      cy.gui_iniciar()
    })
  
})