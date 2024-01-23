import { Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
  `;
  router.updatePageLinks();
  afterRender(state);
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
  });

  if (state.view === "Bitmap") {
    // Add an event handler for the submit button on the form
    document.getElementById("bitmapForm").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inscriptionLookup = event.target.elements.bitmapInput.value;
      console.log("This is the input Inscription ID", inscriptionLookup);
      // Create a request body object to send to the API

      axios
        // Make a GET request to the API to look up Bitmap attributes
        // https://api-mainnet.magiceden.dev/v2/ord/btc/activities?collectionSymbol=bitmap&kind=transfer&tokenId=28c7b6e206d74172182f1bf5dc0ddfeb4e3d6fc3996964a4f973e6c21fac943bi0
        .get(`${process.env.BITCORNS_API_URL}/bitmaps/${inscriptionLookup}`)
        .then(response => {
          //  Then use returned attributes to get Magic Eden floor price for each trait
          console.log("bitmapResponse", response.data);
          store.Bitmap.bitmap = response.data;
          router.navigate("/Bitmap");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("Error!", error);
        });
    });
  }
  if (state.view === "Collab") {
    // Add an event handler for the submit button on the form
    document.getElementById("collabForm").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const collab = event.target;
      console.log("Input Element List", collab);

      const contact = [];

      for (let input of collab.elements) {
        // Check if the input is a checkbox and if it is checked
        if (input.type === "checkbox" && input.checked) {
          // Add the value to the contact array
          contact.push(input.value);
        }
      }

      // Create a request body object to send to the API
      const requestData = {
        project: collab.elements.project.value,
        representative: collab.elements.representative.value,
        contact: contact
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        .post(`${process.env.BITCORNS_API_URL}/pending`, requestData)
        .then(response => {
          store.Pending.collab.push(response.data);
          router.navigate("/Pending");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      // case "Bitmap":
      //   axios
      //     .get(`${process.env.BITCORNS_API_URL}/Bitmap/`)
      //     .then(response => {
      //       //  Then use returned attributes to get Magic Eden floor price for each trait
      //       console.log("bitmapResponse", response.data);
      //       store.Bitmap.bitmap.push(response.data);
      //       done();
      //     })
      //     .catch(err => {
      //       console.log(err);
      //       done();
      //     });
      //   break;
      case "Pending":
        axios
          .get(`${process.env.BITCORNS_API_URL}/pending`)
          .then(response => {
            store.Pending.collab = response.data;
            done();
          })
          .catch(error => {
            console.log("It puked", error);
            done();
          });
        break;
      default:
        done();
    }
  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      if (view in store) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    }
  })
  .resolve();
// render();
