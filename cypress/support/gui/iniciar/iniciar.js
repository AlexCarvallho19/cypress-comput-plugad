Cypress.Commands.add('gui_iniciar', () => {
    cy.get('.btn').contains('INICIAR').click();
    cy.contains('strong', 'Seleção de fase').should('exist');
})