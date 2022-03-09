describe("Test logIn exitoso", () => {
  it('Se debe poder logear exitosamente y llegar a la vista qr"', () => {
    // cy.clearLocalStorage();
    // cy.clearCookies();

    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.url().should("eq", "http://localhost:8080/qr");
    cy.contains("h1", "QR Menú completo");
    // cy.wait(2000);
  });
});
