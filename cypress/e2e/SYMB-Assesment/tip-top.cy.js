describe("Tip-Top Assesment", () => {
  before(() => {
    cy.visit("https://d3pv22lioo8876.cloudfront.net/tiptop/");
  });

  it("Verify that the text input element with xpath .//input[@name='my-disabled'] is disabled in the form", () => {
    cy.get('input[placeholder="Disabled input"]').should("be.disabled");
  });

  it("Verify that the text input with value 'Readonly input' is in readonly state by using 2 xpaths", () => {
    cy.get('input[value="Readonly input"]').should("have.attr", "readonly");
    cy.get('input[name="my-readonly"]').should("have.attr", "readonly");
  });

  it("Verify that the dropdown field to select color is having 8 elements using 2 xpaths", () => {
    cy.get('select[class="form-select"]').find("option").should("have.length", 8);
    cy.get('select[name="my-select"]').find("option").should("have.length", 8);
  });

  it("Verify that the submit button is disabled when no data is entered in Name field", () => {
    cy.get("#my-name-id").clear().should("have.value", "");
    cy.get("#my-password-id").clear().should("have.value", "");
    cy.get("#submit-form").should("be.disabled");
  });

  it("Verify that the submit button enabled when both Name and Password field is entered", () => {
    cy.get("#my-name-id").clear().type("Dinesh");
    cy.get("#my-password-id").clear().type("secretPass");
    cy.get("#submit-form").should("be.enabled");
  });

  it("Verify that on submit of 'Submit' button the page shows 'Received' text", () => {
    cy.get("#my-name-id").clear().type("Dinesh");
    cy.get("#my-password-id").clear().type("secretPass");
    cy.get("#submit-form").should("be.enabled").click();
    cy.get("#message").should("have.text", "Received!");
  });

  it("Verify that on submit of form all the data passed to the URL", () => {
    cy.visit("https://d3pv22lioo8876.cloudfront.net/tiptop/");
    cy.get("#my-name-id").clear().type("Dinesh");
    cy.get("#my-password-id").clear().type("secretPass");
    cy.get('select[class="form-select"]').select("Green");
    cy.get("#submit-form").should("be.enabled").click();
    cy.get("#message").should("have.text", "Received!");
    cy.url().should("contains", "my-name=Dinesh&my-password=secretPass&my-readonly=Readonly+input&my-select=green");
  });
});
