/// <reference types="cypress" />

//////////////////////////////////////////////////////////////////////////////
describe("Validating User", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  it.only("Vaidating User Url", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it("", () => {
    cy.get(".oxd-table-filter-header-options").click().should("be.hidden");
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
  });
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
  });
});
