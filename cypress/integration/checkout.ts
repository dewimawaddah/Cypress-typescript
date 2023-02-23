import { CheckoutPage } from "./pages/checkout_pages";
import { LoginPage } from "./pages/login_pages";

let loginPage = new LoginPage();
let checkoutPage = new CheckoutPage();
const URL = "https://www.saucedemo.com/";

it("User successfully checkout", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();

  checkoutPage.doCheckout("Dewi", "Mawaddah", "14045");
  checkoutPage.assertCheckout();
});

it("user failed checkout with firstname empty", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();

  checkoutPage.doFailedCheckout("", "Mawaddah", "14045");
  checkoutPage.assertFailCheckout();
});
