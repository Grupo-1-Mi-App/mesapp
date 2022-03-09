describe("Test usuario Inexistentes", () => {
  it('Se debe levantar el alert de "El mail es incorrecto"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("EstoNoEsUnCorreo");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();

    cy.get(".v-alert").should("exist");
  });
});

