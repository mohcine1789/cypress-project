declare namespace Cypress {
    interface Chainable<Subject> {
        getIframeBody(): Chainable<JQuery<any>>;
    }
  }