// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const login = require("../fixtures/login.json")

Cypress.Commands.add('webPage', () => {
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
    cy.viewport(1280, 740)
})

Cypress.Commands.add('login', () => {
    cy.webPage()
    cy.get(login.common.emailField).type(login.common.correctEmail)
    cy.get(login.common.passwordFiled).type(login.common.correctPassword)
    cy.contains(login.common.loginBtn).click()
})