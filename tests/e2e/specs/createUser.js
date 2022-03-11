describe("Test que crea un usuario y lo valida iniciando sesión", () => {
  it("Se debe poder crear un usuario Marco, desplegar alerta de creado con exito y borrarlo", () => {
    cy.clearCookies();

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

    cy.get("#NameLabelUser").type("1_Ana");
    cy.get("#emailLabelUser").type("ana_ejemplo@gmail.com");
    cy.get("#passwordLabelUser").type("123456");
    cy.get("#selectLabelUser").click();
    cy.get("[role=listbox]").eq(1).click();
    // cy.get("div#list-item-162-1").click();

    cy.get("#btnCrearUsuario").click();

    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();

    cy.get("button.btn-borrar.v-btn.v-btn--outlined.theme--dark.v-size--small")
      .first()
      .click();

    cy.wait(3000);

    cy.get("#deleteUser").click();

    cy.wait(3000);

    cy.get("#logOutBtn").click();

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
