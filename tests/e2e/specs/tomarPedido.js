describe("Test generar pedido de camarero", () => {
  it("Se debe poder crear un usuario Marco, desplegar alerta de creado con exito y borrarlo", () => {
    cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Menú completo");

    cy.get("#garzonMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/waiter");

    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(6)
      .click();
    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(11)
      .click();
    cy.get(
      "button.text-capitalize.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.v-size--default"
    )
      .eq(7)
      .click();

    cy.get("div.v-select__selections").click();
    cy.get("[role=listbox]").eq(1).click();

    cy.get("button#agregarOtro").eq(2).click();
    cy.get("#confirmarPedido").click();

    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();

    cy.get("#cocinaMenuOption").click();
    cy.url().should("eq", "http://localhost:8080/kitchen");

    cy.get(
      "button.btn-editar.mr-5.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--dark.v-size--small"
    )
      .eq(0)
      .click();

    cy.wait(5000);

    cy.get("#logOutBtn").click();

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
