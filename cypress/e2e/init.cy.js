describe("visits homepage", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Ashesi Hackers League");
    cy.contains("powered by gdsc - ashesi univesity");
    cy.contains(
      "a competitive series of coding challenges across Algorithms, SQL, and Scripting (bash & python)"
    );
    cy.contains("view rankings").click();
  });
});
