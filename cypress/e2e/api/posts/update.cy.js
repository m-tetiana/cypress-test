describe('Posts', () => {
  it('should update a post', () => {

    const postId = 1

    const body = {
      id: postId,
      title: 'my test post',
      body: 'it is a test post',
      userId: 111
    }

    cy.api({
      url: `/posts/${postId}`,
      method: 'PUT',
      body
    }).as('updatePost')

    cy.get('@updatePost').its('status')
      .should('equal', 200)

    cy.get('@updatePost').its('body')
      .should('deep.include', body)
  });
})
