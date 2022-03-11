describe("Test usuario Inexistentes", () => {
  it('Se debe levantar el alert de "El mail es incorrecto"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("EstoNoEsUnCorreo");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });
});

describe("Test usuario Inexistentes", () => {
  it('Se debe levantar el alert de "El usuario no es correcto"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("test@noexiste.com");
    cy.get("#passwordLabel").type("123456");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });
});

describe("Test usuario Inexistentes", () => {
  it('Se debe levantar el alert de "La contraseña es incorrecta"', () => {
    cy.visit("/admin");
    cy.contains("h1", "Iniciar Sesión");

    cy.get("#usuarioLabel").type("admin@gmail.com");
    cy.get("#passwordLabel").type("45678");
    cy.get("#LogInButton").click();
    cy.wait(5000);

    cy.get(".v-alert").should("exist");
  });
});
