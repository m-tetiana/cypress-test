describe('Posts', () => {
  it('should return all posts', () => {
    cy.api({
      url: `/posts`,
      method: 'GET',
    }).its('body')
      .should('have.lengthOf', 100)
      .and('all.have.property', 'id')
      .and('all.have.property', 'userId')
      .and('all.have.property', 'title')
      .and('all.have.property', 'body')
  });
})
