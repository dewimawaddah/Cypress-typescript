export class CheckoutPage {
  button_cart = "#add-to-cart-sauce-labs-backpack";
  shopping_cart = ".shopping_cart_link";
  button_checkout = "#checkout";
  txt_firstname = "#first-name";
  txt_lastname = "#last-name";
  txt_zipcode = "#postal-code";
  button_continue = "#continue";
  button_finish = "#finish";

  clickButtonCart() {
    cy.get(this.button_cart).click();
  }

  clickIconCart() {
    cy.get(this.shopping_cart).click();
  }

  clickButtonCheckout() {
    cy.get(this.button_checkout).click();
  }

  inputFirstName(fisrtname: string) {
    cy.get(this.txt_firstname).type(fisrtname);
  }

  inputLastName(lastname: string) {
    cy.get(this.txt_lastname).type(lastname);
  }

  inputZipcode(zypcode: string) {
    cy.get(this.txt_zipcode).type(zypcode);
  }

  clickButtonContinue() {
    cy.get(this.button_continue).click();
  }

  clickButtonFinish() {
    cy.get(this.button_finish).click();
  }

  assertCheckout() {
    cy.get(".complete-header").should("be.visible").contains("THANK YOU FOR YOUR ORDER");
  }

  doCheckout(firstname: string, lastname: string, zipcode: string) {
    this.clickButtonCart();
    this.clickIconCart();
    this.clickButtonCheckout();
    this.inputFirstName(firstname);
    this.inputLastName(lastname);
    this.inputZipcode(zipcode);
    this.clickButtonContinue();
    this.clickButtonFinish();
  }

  // start negative
  clickBtnCart() {
    cy.get(this.button_cart).click();
  }

  clickCart() {
    cy.get(this.shopping_cart).click();
  }

  clickBtnCheckout() {
    cy.get(this.button_checkout).click();
  }

  inputFirstname(firstname: any) {
    cy.get(this.txt_firstname).type(firstname);
  }

  inputLastname(lastname: string) {
    cy.get(this.txt_lastname).type(lastname);
  }

  inputZipCode(zipcode: string) {
    cy.get(this.txt_zipcode).type(zipcode);
  }

  clickBtnContinue() {
    cy.get(this.button_continue).click();
  }

  assertFailCheckout() {
    cy.get(".error-message-container").should("be.visible").contains("Error: First Name is required");
  }

  doFailedCheckout(firstname: any, lastname: string, zipcode: string) {
    this.clickBtnCart();
    this.clickCart();
    this.clickBtnCheckout();
    this.inputLastname(lastname);
    this.inputZipCode(zipcode);
    this.clickBtnContinue();
  }
  // end negative
}
