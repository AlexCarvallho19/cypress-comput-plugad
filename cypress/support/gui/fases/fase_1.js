const cypress = require("cypress");

Cypress.Commands.add('fase_1_clicarMenu', () => {
    cy.menuFases_clicarFase1();  
})

Cypress.Commands.add('fase_1_mostrar_fase', () => {
    cy.contains('FASE 1').click()
    cy.url().should('include', '/fase-1-1')
})

Cypress.Commands.add('fase_1_navegar_descrição', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
})
  
Cypress.Commands.add('fase_1_navegar_ate_primeira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')
})

Cypress.Commands.add('fase_1_clicando_cartas_da_primeira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.get('.cards.card-sixteen.ng-tns-c43-0').click()

    cy.get('.cards.card-eight.ng-tns-c43-0').click()

    cy.get('.cards.card-four.ng-tns-c43-0').click()

    cy.get('.cards.card-two.ng-tns-c43-0').click()

    cy.get('.cards.card-one.ng-tns-c43-0').click()
})

Cypress.Commands.add('fase_1_clicando_na_alternativa_correta_da_primeira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')
})

Cypress.Commands.add('fase_1_clicando_nas_alternativas_incorretas_da_primeira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('São a soma do próximo com o anterior').click()
    cy.contains('Tente outra vez').should('be.visible')

    cy.contains('São valores aleatórios').click()
    cy.contains('Tente outra vez').should('be.visible')

    cy.contains('Estão em ordem crescente').click()
    cy.contains('Tente outra vez').should('be.visible')
})

Cypress.Commands.add('fase_1_clicando_em_cartas_da_segunda_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.get(`div[class*='cards card-sixteen']`).click()
    cy.get(`div[class*='cards card-eight']`).click()
    cy.get(`div[class*='cards card-four']`).click()
    cy.get(`div[class*='cards card-two']`).click()
    cy.get(`div[class*='cards card-one']`).click()
})

Cypress.Commands.add('fase_1_clicando_na_alternativa_correta_da_segunda_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')
})

Cypress.Commands.add('fase_1_clicando_nas_alternativas_incorretas_da_segunda_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('18').click()
    cy.contains('Tente outra vez').should('be.visible')
    
    cy.contains('20').click()
    cy.contains('Tente outra vez').should('be.visible')

    cy.contains('24').click()
    cy.contains('Tente outra vez').should('be.visible')

})

Cypress.Commands.add('fase_1_clicando_em_cartas_da_terceira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')

    cy.get(`div[class*='cards card-sixteen']`).click()
    cy.get(`div[class*='cards card-eight']`).click()
    cy.get(`div[class*='cards card-four']`).click()
    cy.get(`div[class*='cards card-two']`).click()
    cy.get(`div[class*='cards card-one']`).click()
})

Cypress.Commands.add('fase_1_clicando_na_alternativa_correta_da_terceira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('10001').click()
    cy.url().should('include', '/fase-1-4')

})

Cypress.Commands.add('fase_1_clicando_nas_alternativas_incorretas_da_terceira_atividade', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('01101').click()
    cy.contains('Tente outra vez').should('be.visible')

    cy.contains('01001').click()
    cy.contains('Tente outra vez').should('be.visible')

    cy.contains('10011').click()
    cy.contains('Tente outra vez').should('be.visible')
})

Cypress.Commands.add('fase_1_clicando_no_botão_avançar_da_tela_de_parabéns', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('10001').click()
    cy.url().should('include', '/fase-1-4')

    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fases')
})

Cypress.Commands.add('fase_1_clicando_no_botão_atualizar_da_tela_de_parabéns', () => {
    cy.contains('FASE 1').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-2')
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('Possuem metade do valor anterior').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('32').click()
    cy.url().should('include', '/fase-1-3')

    cy.contains('10001').click()
    cy.url().should('include', '/fase-1-4')

    cy.get('.bi.bi-arrow-counterclockwise').click()
    cy.url().should('include', '/fase-1-1')
})

Cypress.Commands.add('gui_executar_fase1', () => {
    cy.fase_1_clicarMenu()
    cy.fase_1_mostrar_fase()
    cy.fase_1_navegar_descrição()
    cy.fase_1_navegar_ate_primeira_atividade()
    cy.fase_1_clicando_cartas_da_primeira_atividade()
    cy.fase_1_clicando_na_alternativa_correta_da_primeira_atividade()
    cy.fase_1_clicando_nas_alternativas_incorretas_da_primeira_atividade()
    cy.fase_1_clicando_em_cartas_da_segunda_atividade()
    cy.fase_1_clicando_na_alternativa_correta_da_segunda_atividade()
    cy.fase_1_clicando_nas_alternativas_incorretas_da_segunda_atividade()
    cy.fase_1_clicando_em_cartas_da_terceira_atividade()
    cy.fase_1_clicando_na_alternativa_correta_da_terceira_atividade()
    cy.fase_1_clicando_nas_alternativas_incorretas_da_terceira_atividade()
    cy.fase_1_clicando_no_botão_avançar_da_tela_de_parabéns()
    cy.fase_1_clicando_no_botão_atualizar_da_tela_de_parabéns()
})