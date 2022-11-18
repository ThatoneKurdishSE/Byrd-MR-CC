describe('Navigation Bar', () => {

  beforeEach(function () {
    cy.visit('http://localhost:3000/');
  })
  
  it('navigation bar is visible and displays all contents', () => {
    cy.get('[data-cy=navigationBar]').should('be.visible');
  });

  it('has a home route', () => {
    cy.get('[data-cy=home]').should('have.text', 'Home')
      .click();
  })
  it('has a store route', () => {
    cy.get('[data-cy=store]').should('have.text', 'Store')
      .click();
  })
  it('has a blog route', () => {
    cy.get('[data-cy=blog]').should('have.text', 'Blog')
      .click();
  })
  it('has a contact route', () => {
    cy.get('[data-cy=contact]').should('have.text', 'Contact')
      .click();
  })
})