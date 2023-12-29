// importing all as a Module object
import * as components from "/components";

// importing all by name
import { Header, Nav, Main, Footer } from "/components";

function render() {
  document.querySelector("#root").innerHTML = `
      ${Header()}
      ${Nav()}
      ${Main()}
      ${Footer()}
    `;
}

render();
