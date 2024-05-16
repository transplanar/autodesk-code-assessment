// cypress/e2e/duckduckgo.ts
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  const target = cy.get("#searchbox_input");
  target.should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});
