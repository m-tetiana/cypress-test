describe('Posts', () => {
  it('should create new post', () => {
    const body = {
      title: 'my test post',
      body: 'it is a test post',
      userId: 111
    }

    cy.api({
      url: '/posts',
      method: 'POST',
      body
    }).as('createPost')

    cy.get('@createPost').its('status')
      .should('equal', 201)

    cy.get('@createPost').its('body')
      .should('deep.include', body)
  });
})
