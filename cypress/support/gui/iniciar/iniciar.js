/// <reference types="Cypress" />

Cypress.Commands.add("gui_iniciar", () => {
    cy.gui_clicarIniciar();
    cy.gui_validarTexto();
})