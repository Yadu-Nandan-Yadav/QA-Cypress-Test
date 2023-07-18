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

Cypress.Commands.add('addContact', (name, phone, email) => {
    cy.get('input[placeholder="Name"]').type(name);
    cy.get('input[placeholder="Phone"]').type(phone);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('button[name="add"]').click();
    cy.wait(1000);
  });

  Cypress.Commands.add('editContact', (name, newName, newPhone, newEmail) => {
    cy.contains('tr', name).within(() => {
      cy.wait(1000);
      cy.get('button[name="edit"]').click();
      cy.get('td:nth-child(1) > input[type=text]').clear().type(newName);
      cy.get('td:nth-child(2) input[type=text]').clear().type(newPhone);
      cy.get('td:nth-child(3) input[type=text]').clear().type(newEmail);
      cy.get('td:last-child button[name="update"]').click();
    });
  });
  
  
  Cypress.Commands.add('deleteContact', (name) => {
    cy.contains('tr', name)
      .within(() => {
        cy.wait(1000);
        cy.get('button[name="delete"]').click();
        cy.wait(1000);
      });
  });
  
  




  