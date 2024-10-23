describe('xCruise Landing Page Tests', () => {
  beforeEach(() => {
    // Visit the xCruise home page before each test
    cy.visit('http://localhost:3000/') // Replace with the actual URL
  });

  it('Navigation Bar - should display the xCruise logo', () => {
    cy.get('.navbar .logo img').should('be.visible');
  });

  it('Navigation Bar - should have links to Home, Destinations, and Deals', () => {
    cy.get('.navbar .menu a').contains('Home').should('be.visible');
    cy.get('.navbar .menu a').contains('Destinations').should('be.visible');
    cy.get('.navbar .menu a').contains('Deals').should('be.visible');
  });

  it('Navigation Bar - should have a background color of #000033', () => {
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(0, 0, 51)');
  });

  it('Hero Section - should display the main heading', () => {
    cy.get('.hero h1').contains('DISCOVER THE BEAUTY OF CRUISING WITH US').should('be.visible');
  });

  it('Hero Section - should have a Book Now button', () => {
    cy.get('.hero button').contains('Book Now').should('be.visible');
  });

  it('Hero Section - should display the hero image as a background', () => {
    cy.get('.hero').should('have.css', 'background-image').and('include', 'hero-cruise.png');
  });

  it('Discover Section - should display the heading "DISCOVER OUR DESTINATIONS"', () => {
    cy.get('.discover .heading h2').contains('DISCOVER OUR DESTINATIONS').should('be.visible');
  });

  it('Discover Section - should display popular destinations with images', () => {
    cy.get('.discover .popular .pills div img').should('have.length', 3);
  });

  it('Discover Section - should have cards with a cursor pointer on hover', () => {
    cy.get('.discover .card').should('have.css', 'cursor', 'pointer');
  });

  it('Discover Section - popular pills should have a shadow', () => {
    cy.get('.discover .popular .pills > div').first().invoke('css', 'box-shadow').should('not.be.empty');
  });

  it('Contact Us Section - should display the Contact Us section with correct information', () => {
    // Verify the Contact Us heading
    cy.get('#contact > h3').should('contain', 'Contact Us');

    // Check for Contact Information
    cy.get('.contact_info > div').first().within(() => {
      cy.get('h4').should('contain', 'Contact Information');
      cy.get('p').first().should('contain', '6750 N. Andrews Avenue Suite 100 Fort Lauderdale, FL 33309');
      cy.get('p').last().should('contain', 'Call Us: +62-813 346 100');
    });

    // Check Hours of Operation
    cy.get('.contact_info > div').last().within(() => {
      cy.get('h4').should('contain', 'Hours of Operation');
      cy.get('p').first().should('contain', 'Mon-Fri: 8:00 am - 11:00 pm EST');
      cy.get('p').last().should('contain', 'Sat-Sun: 9:00 am - 9:00 pm EST');
    });
  });

  it('Footer Section - should display the Footer section with all elements correctly', () => {
    cy.get('.social-icons').children().should('have.length', 4);
    cy.get('.footer_rights').should('contain', '© 2024 xCruise In. All rights reserved');
  });
});