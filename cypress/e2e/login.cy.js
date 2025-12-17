describe('Login Page UI Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html')

  })

  it('Shows error message for invalid login', () => {
    cy.get('#username').type('wronguser')
    cy.get('#password').type('wrongpass')
    cy.get('#loginBtn').click()

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Invalid')
  })

  it('Logs in successfully with valid credentials', () => {
    cy.get('#username').type('admin')
    cy.get('#password').type('admin123')
    cy.get('#loginBtn').click()

    cy.get('#message')
      .should('be.visible')
      .and('contain', 'Login successful')
  })

})
