describe('Dialog page', () => {
  beforeEach(() => {
    cy.visit('pages/modal-overlays/dialog')
  })

  it('Modal should appear after clicking on corresponding button and display correct content', () => {
    cy.contains('button', 'Enter Name').click()

    const modalSelectorPrefix = 'nb-dialog-container nb-card'

    cy.get(modalSelectorPrefix).should('be.visible')

    cy.get(`${modalSelectorPrefix} nb-card-header`).should('have.text', 'Enter your name')

    cy.get(`${modalSelectorPrefix} nb-card-body input`).should('exist').and('have.attr', 'placeholder', 'Name')

    cy.get(`${modalSelectorPrefix} nb-card-footer button[status = "danger"]`).should('have.text', 'Cancel')

    cy.get(`${modalSelectorPrefix} nb-card-footer button[status = "success"]`).should('have.text', 'Submit')
  });
})
