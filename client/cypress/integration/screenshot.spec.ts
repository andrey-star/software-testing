describe('Screenshot tests with cypress', () => {
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
          url: '/api/packs/1',
        },
        packs[0]
      ).as('getStickerPack');
      cy.intercept(
        {
          method: 'GET',
          url: '/api/packs/2',
        },
        packs[1]
      ).as('getStickerPack');
    });
  });

  it(`Welcome from home page`, () => {
    cy.visit('/');
    cy.screenshot();
  });

  it(`Open login page`, () => {
    cy.visit('/login');
    cy.screenshot();
  });
});
