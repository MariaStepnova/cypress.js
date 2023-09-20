describe('Автотесты на покупку аватара тренера', function () {
   it('Авторизация валидными данными', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('mariiastepnova@yandex.ru');
        cy.get('#password').type('Marika13');
        cy.get('.auth__button').click();
        cy.contains('Покемоны').should('be.visible');
        cy.visit('https://pokemonbattle.me/shop');
        cy.contains('Магазин').should('be.visible');
        cy.get(':nth-child(1) > .shop__button').click();
        cy.contains('Карта').should('be.visible');
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('6011000000000004{enter}');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('MARIIA STEPNOVA{enter}');
        cy.contains('Подтверждение покупки').should('be.visible');
        cy.get('#cardnumber').type('56456{enter}');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        cy.contains('Магазин').should('be.visible');
        
  })
   

})
  
  
