/// <reference types="Cypress" />

Cypress.Commands.add("gui_clicarIniciar", () => {
    cy.get('.btn').contains('INICIAR').click();
})

Cypress.Commands.add("gui_validarTexto", () => {
    cy.contains('strong', 'Seleção de fase').should('exist');
})