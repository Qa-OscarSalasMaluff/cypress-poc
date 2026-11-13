class LoginPage {

    visit(){
        cy.visit('/')
    }

    get userNameInput(){
        return cy.get('[data-test="username"]')
    }

    get passwordInput() {
        return cy.get('[data-test="password"]')
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]')
    }

    enterUsername(username) {
        this.userNameInput.type(username)
    }

    enterPassword(password) {
        this.passwordInput.type(password)
    }

    clickLogin() {
        this.loginButton.click()
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }
}

module.exports = new LoginPage()