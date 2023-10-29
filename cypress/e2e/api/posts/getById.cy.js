describe('Posts', () => {
  it('should return post by id', () => {
    const postId = 2
    cy.api({
      url: `/posts/${postId}`,
      method: 'GET',
    }).its('body').should('deep.include', {id: postId})
  });
})
