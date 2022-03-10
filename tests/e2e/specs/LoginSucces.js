describe("Test logIn exitoso", () => {
  it('Se debe poder logear exitosamente y llegar a la vista qr y deslogear luego de 10s"', () => {
    // cy.clearLocalStorage();
    // cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Menú completo");
    cy.wait(5000);

    cy.get("#logOutBtn").click();
    cy.wait(3000);

    cy.get(
      "button.swal2-confirm.sweet-alert-button.swal2-styled.swal2-default-outline"
    ).click();
  });
});
