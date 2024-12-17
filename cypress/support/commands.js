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

import { faker } from "@faker-js/faker";
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email(firstName, lastName, "example.com");
const password = faker.internet.password();

Cypress.Commands.add("inputFieldsFill", () => {
  cy.get("#firstname").type(firstName);
  cy.get("#lastname").type(lastName);
  cy.get("#email_address").type(email);
  cy.get("#password").type(password);
  cy.get("#password-confirmation").type(password);
});

Cypress.Commands.add("invalidInputFieldsFill", () => {
  cy.get("#firstname").type(firstName);
  cy.get("#lastname").type(lastName);
  cy.get("#email_address").type("testmail.com");
  cy.get("#password").type(password);
  cy.get("#password-confirmation").type("password");
});

Cypress.Commands.add("assertRegisteredData", () => {
  cy.get(".box-content>p")
    .invoke("text")
    .should("contains", (firstName, lastName, email));
});

Cypress.Commands.add("signOut", () => {
  cy.get(".action.switch:visible").click();
  cy.contains("Sign Out").click();
});

Cypress.Commands.add("signIn", () => {
  cy.contains("Sign In").click();
  cy.get("#email").type(email);
  cy.get("#pass").type(password);
  cy.get(".action.login.primary").click();
  cy.get(".logged-in:visible").should("have.text", `Welcome, ${firstName} ${lastName}!`);
});
