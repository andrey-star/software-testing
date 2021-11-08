describe('Sticker Generator e2e tests', () => {
  describe('Packs', () => {
    beforeEach(() => {
      cy.fixture('packs').then((packs) => {
        cy.intercept(
          {
            method: 'GET',
            url: '/api/packs',
          },
          packs
        ).as('getStickerPacks');
        cy.intercept(
          {
            method: 'GET',
            url: '/api/pack?id=1',
          },
          packs[0]
        ).as('getStickerPack');
        cy.intercept(
          {
            method: 'GET',
            url: '/api/pack?id=2',
          },
          packs[1]
        ).as('getStickerPack');
      });
    });

    it('Visits the initial project page', () => {
      cy.visit('/');
      cy.contains('Sticker Generator');
    });

    it('Visits pack page after click', () => {
      cy.visit('/');
      cy.contains('test pack 2').last().click();
      cy.url().should('contain', 'pack/2');
      cy.contains('Funny test pack 2');
    });

    it('Goes back to home page on header link click', () => {
      cy.visit('/pack/2');
      cy.contains('Packs').click();
    });
  });

  describe('Auth', () => {
    it('Goes to login page on header link click', () => {
      cy.visit('/');
      cy.contains('Login').click();
      cy.url().should('contain', 'login');
    });

    it('Logged out - display login button', () => {
      cy.visit('/login');
      cy.contains('Login with Google');
    });

    it('Logged in - display email and logout button', () => {
      cy.visit('/login');
      cy.login();
      cy.contains('fastrazor2000@gmail.com');
      cy.contains('Log out');
    });

    it('Log the user out in log out click', () => {
      cy.visit('/login');
      cy.login();
      cy.contains('Log out').click();
      cy.contains('Login with Google');
    });

    afterEach(() => {
      cy.logout();
    });
  });
});
