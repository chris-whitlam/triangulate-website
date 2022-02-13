declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByTestId(selector: string): Chainable<JQuery<HTMLElement>>
  }
}
