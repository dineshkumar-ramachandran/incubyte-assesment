import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPom from "../../support/Utility/loginPom";

Given("User should load the url and assert the application loaded url", () => {
  cy.visit("/");
  loginPom.homePageAssertion();
});

When("User should able to click the account creation button", () => {
  loginPom.clickAccountCreate();
});

When("User should skip all the required fields and click submit button", () => {
  loginPom.clickSubmit();
});

Then("User account should not be created and error should be thrown", () => {
  loginPom.assertRequiredField();
});

When("User should fill all the required fields with invalid details and click submit button", () => {
  loginPom.clickAccountCreate();
  loginPom.enterSmallPassword();
  loginPom.assertPasswordRequirementMessage();
  cy.invalidInputFieldsFill();
  loginPom.clickSubmit();
  loginPom.assertInvalidEmailMessage();
});

Then("User account should not be created and error for email and password field should be thrown", () => {
  loginPom.assertInvalidPasswordMessage();
  loginPom.fillInvalidPassword();
  loginPom.assertSameCharacterErrorMessage();
});

When("User should fill all the required fields with valid details and click submit button", () => {
  cy.inputFieldsFill();
  loginPom.clickSubmit();
});

Then("User account should be created and user should able to login with the credentials", () => {
  loginPom.accountCreationAssertion();
  cy.assertRegisteredData();
});

When("User should fill all the required fields with existing account details and click submit button", () => {
  loginPom.clickAccountCreate();
  cy.inputFieldsFill();
  loginPom.clickSubmit();
});

Then("User account should not be created and error for existing account should thrown", () => {
  loginPom.assertExistingAccount();
});
