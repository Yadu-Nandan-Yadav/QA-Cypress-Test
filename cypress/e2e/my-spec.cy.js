describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html');
  });

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1)
  })


  // Add contacts
  it('Test adding contacts', () => {
    const contacts = [];
  
    // Prompt the user for each contact's details
    while (true) {
      const name = prompt('Enter the name of the contact (or leave empty to stop adding contacts):');
      if (!name) {
        break; // Exit the loop if the user leaves the name field empty
      }
  
      const phone = prompt('Enter the phone number of the contact:');
      const email = prompt('Enter the email of the contact:');
  
      contacts.push({ name, phone, email });
    }
  
    // Add each contact to the app
    contacts.forEach((contact) => {
      cy.addContact(contact.name, contact.phone, contact.email);
    });

    // Assert input details
    cy.get('table tbody tr').should('have.length', contacts.length + 1);


     // Prompt the user to select the contact they want to delete
     const contactName = prompt('Enter the name of the contact you want to delete:');
     cy.deleteContact(contactName);

     // Assert input deleted
     cy.contains('tr', contactName).should('not.exist');


     // Prompt the user to select the contact they want to edit
    const contactDetail = prompt('Enter the name of the contact you want to edit:');
    const newName = prompt('Enter the new name:');
    const newPhone = prompt('Enter the new phone number:');
    const newEmail = prompt('Enter the new email:');
  
    //Assert updated details
    cy.editContact(contactDetail, newName, newPhone, newEmail);
    cy.contains('tr', newName).should('contain', newPhone).and('contain', newEmail);

  });
 });