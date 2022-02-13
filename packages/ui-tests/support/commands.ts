/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (selector) => {
  return cy.get(`[data-testid=${selector}]`)
})