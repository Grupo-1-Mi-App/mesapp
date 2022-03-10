describe("Test que crea un usuario y lo valida iniciando sesión", () => {
  it('Se debe poder logear exitosamente y llegar a la vista qr"', () => {
    cy.clearCookies();

    // cy.visit("/admin");
    // cy.contains("h1", "Iniciar Sesión");

    // cy.get("#usuarioLabel").type("admin@gmail.com");
    // cy.get("#passwordLabel").type("123456");
    // cy.get("#LogInButton").click();

    // cy.url().should("eq", "http://localhost:8080/qr");
    // cy.contains("h1", "QR Menú completo");

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Menú completo");

    cy.get("#userMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/users");

    cy.get(
      "button.mb-2.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    ).click();

    cy.get("#NameLabelUser").type("Marcos");
    cy.get("#emailLabelUser").type("marcos_ejemplo@gmail.com");
    cy.get("#passwordLabelUser").type("123456");
    cy.get("#selectLabelUser").click();
    cy.get("[role=listbox]").eq(1).click();
    // cy.get("div#list-item-162-1").click();
  });
});
