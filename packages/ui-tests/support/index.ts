/// <reference types="cypress" />
import {DEVICE_SIZES} from '../utils'

// Default settings
before(() => {
  const { desktop: { width, height } } = DEVICE_SIZES;

  cy.viewport(width, height);
})


import './commands'