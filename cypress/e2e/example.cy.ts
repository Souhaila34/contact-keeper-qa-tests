describe('Contact Keeper E2E Tests', () => {
  const email = 'souhailadouahi36@gmail.com';
  const password = 'AZERTY123';

  beforeEach(() => {
    // Log in before each test
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[type="submit"]').click();
    cy.url().should('not.include', '/login');
  });

  it('should log in successfully and redirect to the dashboard', () => {
    // After login, check for a known dashboard element
    cy.contains('Hello');
  });

  it('should add a new contact successfully', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('input[name="phone"]').type('1234567890');
    cy.get('input[value="personal"]').check();

    cy.get('input[type="submit"]').click();

    // Confirm the new contact appears
    cy.contains('John Doe');
    cy.contains('john@example.com');
    cy.contains('1234567890');
  });

  it('should filter contacts based on input', () => {
    cy.get('input[placeholder="Filter Contacts..."]').type('taher');

    // Confirm filtered contact appears
    cy.contains('taher');
  });
});
