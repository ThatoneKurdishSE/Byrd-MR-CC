describe('Contact Form', () => {

    beforeEach(function () {
        cy.visit('http://localhost:3000/contact');
    });

    it('contact form is visible', () => {
        cy.get('[data-cy=contact-form]')
        .should('be.visible')
    });

    it('on a successful message sent, it displays success message.', () => {
        cy.get('[data-cy=name]')
            .click()
            .type('Raz')
            .get('[data-cy=submit-button]')
            .click()
            .get('[data-cy=confirmation-message]')
            .should('contain', 'We got your message. Thank you for taking the time to contact us!')
    });
})