describe('Posts', () => {
  it('should delete post by Id', () => {
    const postId = 2
    cy.api({
      url: `/posts/${postId}`,
      method: 'DELETE',
    }).its('status').should('equal', 200)
  });
})
