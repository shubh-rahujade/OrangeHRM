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
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it.only("Validating Admin child module List", () => {
    let adminPanel = [
      "User Management ",
      "Job ",
      "Organization ",
      "Qualifications ",
      "Nationalities",
      "Corporate Branding",
      "Configuration ",
    ];
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-topbar-body-nav-tab-item").each((resp) => {
      let abc = cy.wrap(resp.text);
      cy.log(abc);
    });
  });
});
