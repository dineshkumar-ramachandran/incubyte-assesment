Feature: Register and Login into an Application

Scenario: Create an account in the website and login with empty inputs
Given User should load the url and assert the application loaded url
When User should able to click the account creation button
When User should skip all the required fields and click submit button
Then User account should not be created and error should be thrown

Scenario: Create an account in the website and login with invalid credentials
Given User should load the url and assert the application loaded url
When User should able to click the account creation button
When User should fill all the required fields with invalid details and click submit button
Then User account should not be created and error for email and password field should be thrown

Scenario: Create an account in the website and login with valid credentials
Given User should load the url and assert the application loaded url
When User should able to click the account creation button
When User should fill all the required fields with valid details and click submit button
Then User account should be created and user should able to login with the credentials

Scenario: Create an account in the website with existing account credentials
Given User should load the url and assert the application loaded url
When User should able to click the account creation button
When User should fill all the required fields with existing account details and click submit button
Then User account should not be created and error for existing account should thrown