/// <reference types="cypress" />
/// <reference types="cypress" />
describe("Validating Admin-User Management Module", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.get(".oxd-main-menu-item-wrapper").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.text() === "Admin") {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click();
        cy.url().should(
          "eq",
          "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
        );
      }
    });
  });
  it.only("Validating Admin child module List", () => {
    cy.get(".Topbar Menu").should("have.length", 11);
  });
});
