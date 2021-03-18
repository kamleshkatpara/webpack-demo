import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "Webpack Demo"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe; // onclick event is bind to the original printMe function

  element.appendChild(btn);

  return element;
}

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

// if (module.hot) {
//   // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
//   // while `hot` would configure HMR for the CURRENT module
//   module.hot.accept('./containers/App', () => {
//     // if you are using harmony modules ({modules:false})
//     render(App);
//     // in all other cases - re-require App manually
//     render(require('./containers/App'));
//   });
// }
