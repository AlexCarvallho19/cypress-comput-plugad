describe('acessar pagina web', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.gui_iniciar()
    })

    it('CT003 - Mostrar fase 1', () => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.contains('INICIAR').click()
      cy.contains('FASE 1').click()
      cy.url().should('include', '/fase-1-1')
    })

    it('CT004 - Navegar até descrição da fase 1', () => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.contains('INICIAR').click()
      cy.contains('FASE 1').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-2')
    })
    
    it('CT005 - Navegar até a primeira atividade da fase 1', () => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.contains('INICIAR').click()
      cy.contains('FASE 1').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-3')
    })

    it('CT006 - Clicando em cartas da primeira atividade Fase 1', () => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.contains('INICIAR').click()
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

      it('CT007 - Clicando na alternativa correta da primeira atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
        cy.contains('FASE 1').click()
        cy.get('.bi.bi-chevron-right').click()
        cy.url().should('include', '/fase-1-2')
        cy.get('.bi.bi-chevron-right').click()
        cy.url().should('include', '/fase-1-3')

        cy.contains('Possuem metade do valor anterior').click()
        cy.url().should('include', '/fase-1-3')
      })

      it('CT008 - Clicando nas alternativas incorretas da primeira atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT009 - Clicando em cartas da segunda atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT010 - Clicando na alternativa correta da segunda atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT011 - Clicando nas alternativas incorretas da segunda atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT012 - Clicando em cartas da terceira atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT013 - Clicando na alternativa correta da terceira atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT014 - Clicando nas alternativas incorretas da terceira atividade Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it('CT015 - Clicando no botão “>” da tela de parabéns na Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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

      it.only('CT016 - Clicando no botão “↺” da tela de parabéns na Fase 1', () => {
        cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
        cy.contains('INICIAR').click()
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
      
})