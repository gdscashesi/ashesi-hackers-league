import Button from "components/button/Button";

describe("Button.cy.js", () => {
  it("mounts", () => {
    cy.mount(<Button text="hello" />);
  });
});
