/// <reference types="cypress" />
/// <reference types="cypress" />
describe("", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Login First", () => {
    cy.login("Admin", "admin123");
    cy.get(".oxd-main-menu-item-wrapper");
  });
});
