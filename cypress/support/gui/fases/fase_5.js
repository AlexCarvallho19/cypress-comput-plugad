Cypress.Commands.add('clicar_fase5', () => {
    cy.menuFases_clicarFase5();
})

Cypress.Commands.add('fase_5_exibir_fase', () => {
    cy.contains('FASE 5').click()
    cy.url().should('include', '/fase-5-1')
})

Cypress.Commands.add('fase_5_navegar_ate_segunda_descrição', () => {
    cy.contains('FASE 5').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-5-2')
})

Cypress.Commands.add('fase_5_navegar_ate_primeira_atividade', () => {
    cy.contains('FASE 5').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()
})

Cypress.Commands.add('fase_5_respondendo_primeira_atividade_em_branco', () => {
    cy.contains('FASE 5').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()

    //cy.get('#answer').type('')
    cy.get('button[type="button"]').click()
    cy.contains('Este campo não pode ficar em branco.').should('be.visible')
    })
    it('CT071 - Respondendo segunda atividade fase 5 sem espaçamento', () => {
    cy.contains('FASE 5').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()


    cy.get('#answer').type('alex')
    cy.get('button[type="button"]').click()

    cy.wait(1000)
    cy.get('#answer').type('muito prazeralex')
    cy.get('button[type="button"]').click()
    cy.contains('Tente outra vez.').should('be.visible')
})

Cypress.Commands.add('fase_5_respondendo_segunda_atividade_com_espacamento_ao_final', () => {
    cy.contains('FASE 5').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()

    //Passando resposta para atividade seguinte com um "espaço" ao final do nome
    cy.get('#answer').type('alex ')
    cy.get('button[type="button"]').click()

    //Verificando se ele aceita a resposta sem o espaço depois de "alex"
    cy.wait(1000)
    cy.get('#answer').type('muito prazer alex')
    cy.get('button[type="button"]').click()
    cy.contains('Tente outra vez.').should('be.visible')
})

Cypress.Commands.add('gui_executar_fase5', () => {
    cy.clicar_fase5()
    cy.fase_5_exibir_fase()
    cy.fase_5_navegar_ate_segunda_descrição()
    cy.fase_5_navegar_ate_primeira_atividade()
    cy.fase_5_respondendo_primeira_atividade_em_branco()
    cy.fase_5_respondendo_segunda_atividade_com_espacamento_ao_final()
})