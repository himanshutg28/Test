import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'

const login = require("../../../../cypress/fixtures/login.json")
Given('User is at login page',() => {
    cy.webPage()
})

When('User enters username as {string} & password as {string} for login', (username, password) => {
cy.get(login.common.emailField).type(login.common.incorrectEmail)
cy.get(login.common.passwordFiled).type(password)
cy.contains(login.common.loginBtn).click()
})

Then('User should be able to get the error message',() => {
    cy.contains(login.errorMsg).should('be.visible')
})

When('User enters username as {string} & password as {string} for login', (username, password) => {
    cy.get(login.common.emailField).type(username)
    cy.get(login.common.passwordFiled).type(login.common.incorrectEmail)
    cy.contains(login.common.loginBtn).click()
    })