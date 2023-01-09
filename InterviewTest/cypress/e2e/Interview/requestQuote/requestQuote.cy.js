import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'

const login = require("../../../../cypress/fixtures/login.json")
const request = require("../../../../cypress/fixtures/requestQuote.json")

Given('User is at the home page',() => {
    cy.login()
})

When('User create the Quotation', () => {
    cy.get(request.common.requestQuotationBtn).click().wait(2000)
})

Then('User should get the unique ID', () => {
    cy.wait(2000)
})
