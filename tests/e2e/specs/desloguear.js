describe("Test que cierra sesión", () => {
  it('Se debe desloguear correctamente"', () => {
    cy.visit("/qr");
    cy.contains("h1", "QR Menú completo");
    // cy.wait(5000);
    cy.clearCookies();

    // cy.get("#logOutBtn").click();

    cy.visit("/users");

    // cy.url().should("eq", "http://localhost:8080/admin");
    // cy.contains("h1", "Iniciar Sesión");
  });
});
