describe('Scripts Fase 1', () => {
    beforeEach(() => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.gui_iniciar()
    })

    it('CT003 - Mostrar fase 1', () => {
      cy.contains('FASE 1').click()
      cy.url().should('include', '/fase-1-1')
    })

    it('CT004 - Navegar até descrição da fase 1', () => {
      cy.contains('FASE 1').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-2')
    })
    
    it('CT005 - Navegar até a primeira atividade da fase 1', () => {
      cy.contains('FASE 1').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-3')
    })

    it('CT006 - Clicando em cartas da primeira atividade Fase 1', () => {
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
      cy.contains('FASE 1').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-1-3')

      cy.contains('Possuem metade do valor anterior').click()
      cy.url().should('include', '/fase-1-3')
    })

      it('CT008 - Clicando nas alternativas incorretas da primeira atividade Fase 1', () => {
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

      it('CT016 - Clicando no botão “↺” da tela de parabéns na Fase 1', () => {
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
      //  ---------------------------- FASE 2 ----------------------------
})

describe('Scripts Fase 2', () => {
    beforeEach(() => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.gui_iniciar()
    })

    it('CT017 - Mostrar fase 2', () => {
      cy.contains('FASE 2').click()
      cy.url().should('include', '/fase-2-1')
    
    })

    it('CT018 - Navegar até segunda descrição da fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
    })
    
    it('CT019 - Navegar até a primeira atividade da fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')
    })
    
    it('CT0020 - Clicando em cartas da primeira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')
    
      cy.get(`div[class*='cards card-sixteen']`).click()
      cy.get(`div[class*='cards card-eight']`).click()
      cy.get(`div[class*='cards card-four']`).click()
      cy.get(`div[class*='cards card-two']`).click()
      cy.get(`div[class*='cards card-one']`).click()
    })

    it('CT021 - Clicando na alternativa correta da primeira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')
      })

    it('CT022 - Clicando nas alternativas incorretas da primeira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('7').click()
      cy.contains('Tente outra vez.').should('be.visible')
        
      cy.contains('13').click()
      cy.contains('Tente outra vez.').should('be.visible')

      cy.contains('5').click()
      cy.contains('Tente outra vez.').should('be.visible')

      })

    it('CT0023 - Clicando em cartas da segunda atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')
      
      cy.get(`div[class*='cards card-sixteen']`).click()
      cy.get(`div[class*='cards card-eight']`).click()
      cy.get(`div[class*='cards card-four']`).click()
      cy.get(`div[class*='cards card-two']`).click()
      cy.get(`div[class*='cards card-one']`).click()
      })

      it('CT024 - Clicando na alternativa correta da segunda atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')
      })

    it('CT025 - Clicando nas alternativas incorretas da segunda atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')
  
      cy.contains('01001 e 10001').click()
      cy.contains('Tente outra vez.').should('be.visible')
          
      cy.contains('10011 e 01101').click()
      cy.contains('Tente outra vez.').should('be.visible')
  
      cy.contains('01101 e 00011').click()
      cy.contains('Tente outra vez.').should('be.visible')
  
      })

    it('CT0026 - Clicando em cartas da terceira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')
    
      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')
          
      cy.get(`div[class*='cards card-sixteen']`).click()
      cy.get(`div[class*='cards card-eight']`).click()
      cy.get(`div[class*='cards card-four']`).click()
      cy.get(`div[class*='cards card-two']`).click()
      cy.get(`div[class*='cards card-one']`).click()
      })

    it('CT027 - Escrevendo resposta correta da terceira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()

      })

    it('CT028 - Escrevendo resposta incorreta da terceira atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible')

      })

    it('CT0029 - Clicando em cartas da quarta atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')
    
      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()
      cy.url().should('include', '/fase-2-3')
          
      cy.get(`div[class*='cards card-sixteen']`).click()
      cy.get(`div[class*='cards card-eight']`).click()
      cy.get(`div[class*='cards card-four']`).click()
      cy.get(`div[class*='cards card-two']`).click()
      cy.get(`div[class*='cards card-one']`).click()
      })

    it('CT030 - Escrevendo resposta correta da quarta atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      //Digitar o MAIOR número
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()
      
      cy.wait(3000)

      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click()

      })

    it('CT031 - Escrevendo resposta incorreta da quarta atividade Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      //Digitar o MAIOR número
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()
      
      cy.wait(2000)

      cy.get('#answer').type('15')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible')
      })

    it('CT032 - Clicando no botão “>” da tela de parabéns na Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      //Digitar o MAIOR número
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()
      
      cy.wait(2000)

      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click()

      cy.wait(1000)

      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fases')

    })

    it('CT033 - Clicando no botão “↺” da tela de parabéns na Fase 2', () => {
      cy.contains('FASE 2').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-2')
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('19').click()
      cy.url().should('include', '/fase-2-3')

      cy.contains('00011 e 01100').click()
      cy.url().should('include', '/fase-2-3')

      //Digitar o MAIOR número
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click()
      
      cy.wait(2000)

      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click()
      
      cy.wait(1000)

      cy.get('.bi.bi-arrow-counterclockwise').click()
      cy.url().should('include', '/fase-2-1')
      
    })
})
    // ----------------------------- FASE 3 ---------------------------------------

describe('Scripts Fase 3', () => {
    beforeEach(() => {
      cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
      cy.gui_iniciar()
    })

    it('CT034 - Mostrar descrição fase 3', () => {
      cy.contains('FASE 3').click()
      cy.url().should('include', '/fase-3-1')
    
    })

    it('CT035 - Navegar até segunda descrição da fase 3', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-3-2')
    })
    
    it('CT036 - Navegar até primeira atividade da fase 3', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-3-3')

    })
    
    it('CT037 - Respondendo primeira atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-3-3')

      //Escrevendo texto e clicando em enviar

      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      
      cy.wait(1000)
    })

    it('CT038 - Respondendo primeira atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fase-3-3')

      //Escrevendo texto e clicando em enviar

      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible')


    })
    
    it('CT039 - Respondendo segunda atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()

      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      
      
    })

    it('CT040 - Respondendo segunda atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()

      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible')

    })
    
    it('CT041 - Respondendo terceira atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      
    })

    it('CT042 - Respondendo terceira atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()

      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      
      //Digitando resposta errada na atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible')

    })

    it('CT043 - Respondendo quarta atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
    })

    it('CT044 - Respondendo quarta atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta errada na quarta atividade 
      cy.get('#answer').type('15')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible')

    })

    it('CT045 - Respondendo quinta atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
    })

    it('CT046 - Respondendo quinta atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('1')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible')
    })

    it('CT047 - Respondendo sexta atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
    })
    
    it('CT048 - Respondendo sexta atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('55')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible')
    })

    it('CT049 - Respondendo sétima atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 

    })
    it('CT050 - Respondendo sétima atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta errada na sétima atividade
      cy.get('#answer').type('1')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible')
    })

    it('CT051 - Respondendo oitava atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
    })

    it('CT052 - Respondendo oitava atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('30')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible')
    
    })
    it('CT053 - Respondendo nona atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
    })
    
    it('CT054 - Respondendo nona atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('22')
      cy.get('button[type="button"]').click()
      cy.contains('Tente outra vez.').should('be.visible') 
    })

    it('CT055 - Respondendo décima atividade da fase 3 corretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na decima atividade
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click() 
    })

    it('CT056 - Respondendo décima atividade da fase 3 incorretamente', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na decima atividade
      cy.get('#answer').type('33')
      cy.get('button[type="button"]').click() 
      cy.contains('Tente outra vez.').should('be.visible') 
    })

    it('CT057 - Clicando no botão “>” da tela de parabéns na Fase 3', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na decima atividade
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click() 

      //Clicando no botão ">"
      cy.get('.bi.bi-chevron-right').click()
      cy.url().should('include', '/fases')
    })

    it('CT058 - Clicando no botão “↺” da tela de parabéns na Fase 3', () => {
      cy.contains('FASE 3').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('.bi.bi-chevron-right').click()
      cy.get('#answer').type('9')
      cy.get('button[type="button"]').click()
      //Escrevendo texto e clicando em enviar
      cy.wait(1000)
      cy.get('#answer').type('10')
      cy.get('button[type="button"]').click()
      cy.wait(1000)
    
      //Inserindo resposta na terceira atividade
      cy.get('#answer').type('5')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quarta atividade
      cy.get('#answer').type('11')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)

      //Inserindo resposta na quinta atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sexta atividade
      cy.get('#answer').type('17')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      
      //Inserindo resposta na sétima atividade
      cy.get('#answer').type('2')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na oitava atividade
      cy.get('#answer').type('0')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na nona atividade
      cy.get('#answer').type('20')
      cy.get('button[type="button"]').click() 
      cy.wait(1000)
      //Inserindo resposta na decima atividade
      cy.get('#answer').type('31')
      cy.get('button[type="button"]').click() 

      //Clicando no botão “↺” da Fase 3
      cy.get('.bi.bi-arrow-counterclockwise').click()
      cy.url().should('include', '/fase-3-1')
    })
})

// --------------------- Fase 4 --------------------------

describe('Scripts Fase 4', () => {
  beforeEach(() => {
    cy.visit('https://wyllianyurk77.github.io/plugged-computing-web-front/')
    cy.gui_iniciar()
  })

  it('CT059 - Mostrar fase 4', () => {
    cy.contains('FASE 4').click()
    cy.url().should('include', '/fase-4-1')
  
  })

  it('CT060 - Navegar até segunda descrição da fase 4', () => {
    cy.contains('FASE 4').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-4-2')
  })
  
  it('CT061 - Navegar até a primeira atividade fase 4', () => {
    cy.contains('FASE 4').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-4-2')

    //clicando em avançar novamente
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-4-3')
  })

  it('CT062 - Respondendo primeira atividade da fase 4 corretamente', () => {
    cy.contains('FASE 4').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-4-3')

    //Escrevendo texto e clicando em enviar

    cy.get('#answer').type('1')
    cy.get('button[type="button"]').click()
    
    cy.wait(1000)
  })

  it('CT063 - Respondendo primeira atividade da fase 4 incorretamente', () => {
    cy.contains('FASE 4').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.get('.bi.bi-chevron-right').click()
    cy.url().should('include', '/fase-4-3')

    //Escrevendo texto e clicando em enviar
    cy.wait(1000)

    cy.get('#answer').type('0')
    cy.get('button[type="button"]').click()
    cy.contains('Tente outra vez.').should('be.visible')


  })

})
