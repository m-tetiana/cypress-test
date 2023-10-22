describe("Login", () => {

  it('should login with valid credentials', () => {
    cy.login('test@email.com', 'testpassword123', true)
  });
})
