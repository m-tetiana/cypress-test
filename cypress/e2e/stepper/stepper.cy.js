describe('Stepper page', () => {
  beforeEach(() => {
    cy.visit('pages/layout/stepper')
  })

  it('Horizontal stepper should display correct title on each step', () => {
    cy.get('nb-stepper[orientation="horizontal"] h3').as('stepperTitle')
    cy.get('nb-stepper[orientation="horizontal"] button').last().as('nextButton')
    cy.get('nb-stepper[orientation="horizontal"] button').first().as('previousButton')

    cy.get('@stepperTitle').should('have.text', 'Step content #1')
    cy.get('@previousButton').should('be.disabled')
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #2')
    cy.get('@previousButton').should('not.be.disabled')
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #3')
    cy.get('@previousButton').should('not.be.disabled')
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #4')
    cy.get('@previousButton').should('not.be.disabled')
    cy.get('@nextButton').should('be.disabled')
  });
})
