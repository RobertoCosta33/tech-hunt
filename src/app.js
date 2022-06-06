import { login } from "./pages/login.js";
import { footerPage } from "./pages/footer.js";

export const app = () => {
  login();
  footerPage();
};

app();
