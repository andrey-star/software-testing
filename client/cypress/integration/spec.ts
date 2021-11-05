describe('Sticker Generator e2e tests', () => {
  beforeEach(() => {
    cy.fixture('packs').then((packs) => {
      cy.intercept(
        {
          method: 'GET',
          url: '/packs',
        },
        packs
      ).as('getStickerPacks');
      cy.intercept(
        {
          method: 'GET',
          url: '/pack?id=1',
        },
        packs[0]
      ).as('getStickerPack');
      cy.intercept(
        {
          method: 'GET',
          url: '/pack?id=2',
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
