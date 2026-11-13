const loginPage = require('../../pages/LoginPage')


describe('SauceDemo - Login', () => {

    beforeEach(() => {
        loginPage.visit()
    })

    it('TC_LOGIN_001 - Should login successfully with valid credentials', () => {

        cy.fixture('users').then((users) => {

            loginPage.login(
                users.standardUser.username,
                users.standardUser.password
            )

            cy.url().should('include', '/inventory.html')

            cy.get('.inventory_list').should('be.visible')

        })

    })

      it('TC_LOGIN_002 - Should display an error with incorrect password', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.standardUser.username,
        'password_incorrecto'
      )
    })

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

  it('TC_LOGIN_003 - Should display an error when user is blocked', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.lockedUser.username,
        users.lockedUser.password
      )
    })

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Sorry, this user has been locked out')
  })

  it('TC_LOGIN_004 - Should display an error with incorrect username', () => {
    cy.fixture('users').then((users) => {
      loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
      )
    })

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

})