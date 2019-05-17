// "use strict";
//
// import { home } from "./home.js";
// // import { lager } from "./lager.js";
// // import { orderView } from "./order_view.js";
// // import { product } from "./product.js";
//
// var menu = {
//     showMenu: function (selected) {
//         // container.innerHTML = "";
//
//         var navElements = [{name: "Hem", class: "home", nav: home.showHome},
//             // {name: "Om", class: "free_breakfast", nav: about.showAbout},
//             {name: "Lager", class: "folder", nav: lager.showLager},
//             {name: "Ordrar", class: "assignment", nav: orderView.drawOrderView}];
//             // {name: "Redovisning", class: "people", nav: presentation.showPresentation}];
//
//         navElements.forEach(function (element) {
//             var navElement = document.createElement("a");
//
//             if (selected === element.class) {
//                 navElement.className = "active";
//             }
//
//             navElement.addEventListener("click", element.nav);
//
//             var icon = document.createElement("i");
//
//             icon.className = "material-icons";
//             icon.textContent = element.class;
//             navElement.appendChild(icon);
//
//             var text = document.createElement("span");
//
//             text.className = "icon-text";
//             text.textContent = element.name;
//             navElement.appendChild(text);
//
//             window.navigation.appendChild(navElement);
//         });
//
//         window.rootElement.appendChild(window.navigation);
//     }
// };
//
// export { menu };
