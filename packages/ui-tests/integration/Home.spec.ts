/// <reference types="cypress" />

import { Home } from '../pages';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(Home.url)
  })

  it('displays main components correctly', () => {
    cy.getByTestId('header').should('be.visible')
  })
})
