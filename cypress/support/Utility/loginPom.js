class loginPom {
  homePageAssertion() {
    return cy.get(".content > p").invoke("text").should("contains", "hello@softwaretestingboard.com");
  }

  clickAccountCreate() {
    return cy.contains("Create an Account").should("be.visible").click();
  }

  clickSubmit() {
    return cy.get(".action.submit.primary").click();
  }

  accountCreationAssertion() {
    return cy.contains("Thank you for registering with Main Website Store.").should("be.visible");
  }

  assertRequiredField() {
    return cy
      .get('div[class="mage-error"]')
      .should("have.length", 5)
      .each(($el) => {
        cy.wrap($el).should("contain", "This is a required field.");
      });
  }

  assertInvalidEmailMessage() {
    return cy
      .get("#email_address-error")
      .should("have.text", "Please enter a valid email address (Ex: johndoe@domain.com).");
  }
  assertInvalidPasswordMessage() {
    return cy.get("#password-confirmation-error").should("have.text", "Please enter the same value again.");
  }

  fillInvalidPassword() {
    return cy.get("#password").clear().type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }

  assertPasswordRequirementMessage() {
    return cy
      .get("#password-error")
      .should(
        "have.text",
        "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters."
      );
  }
}
export default new loginPom();
