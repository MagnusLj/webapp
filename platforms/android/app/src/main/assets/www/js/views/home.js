import m from 'mithril';
// import { menu } from "./menu.js";


var home = {
    view: function() {
        return m("main.container", [
            m("h1", "Infinity Warehouses"),
            m("p", "Hej och välkomna till Infinity. Här hittar du en massa bra saker."),
            m("p", "Ta med dig dina vänner."),
            m("img", {src: "lager.jpg", width: '100%'}),
            m("nav.bottom-nav", [
                m("a.active", [
                    m("i.material-icons", {
                        href: "/",
                        oncreate: m.route.link
                    }, "home"),
                    m("span.icon-text", "Hem"),
                ]),
                // m("a", [
                //     m("i.material-icons", {
                //         href: "/list",
                //         oncreate: m.route.link
                //     }, "local_shipping"),
                //     m("span.icon-text", "Leveranser"),
                // ]),
                m("a", [
                    m("i.material-icons", {
                        href: "/login",
                        oncreate: m.route.link
                    }, "exit_to_app"),
                    m("span.icon-text", "Logga in"),
                ])
            ])
        ]);
    }
};


// m("div.year-container", nobel.current.prizes.map(function(prize) {
//                 return [
//                     m("h2", prize.category),
//                     prize.laureates.map(function(laureate) {
//                         return m("p", laureate.firstname + " " + laureate.surname);

// var home = {
//     titleText: "Infinity Warehouses",
//     description: "Description",
//
//     showHome: function () {
//         var root = document.getElementById("root");
//
//         // root.innerHTML = window.mainContainer;
//         root.innerHTML = "";
//         window.mainContainer.innerHTML = "";
//
//         var title = document.createElement("h1");
//
//         title.className = "title";
//         title.textContent = home.titleText;
//
//         var greeting = document.createElement("p");
//         var greeting2 = document.createElement("p");
//         var timeOfDayGreeting = "Hej";
//         var now = new Date();
//
//         if (now.getHours() <= 10) {
//             timeOfDayGreeting = "Godmorgon";
//         } else if (now.getHours() >= 17) {
//             timeOfDayGreeting = "Godkväll";
//         }
//
//         greeting.innerHTML = timeOfDayGreeting +
//             " och välkomna till Infinity. Här hittar du en massa bra saker." +
//             "<br><br> Ta med dig dina vänner.<br>";
//
//         greeting2.innerHTML = "<br>Våra öppettider är:<br><br>Vardagar 08-20<br>Lördagar 10-16";
//
//         var image = document.createElement("img");
//
//         image.src = "lager.jpg";
//         image.alt = "Lagret";
//
//         // root.appendChild(title);
//         // root.appendChild(greeting);
//         // root.appendChild(image);
//         // root.appendChild(greeting2);
//
//         window.mainContainer.appendChild(title);
//         window.mainContainer.appendChild(greeting);
//         window.mainContainer.appendChild(image);
//         window.mainContainer.appendChild(greeting2);
//
//         root.appendChild(window.mainContainer);
//
//         // window.rootElement.appendChild(window.mainContainer);
//
//         menu.showMenu("home");
//     }
// };

export { home };





// import m from 'mithril';
//
// var list = {
//     view: function() {
//         return m("main.container", [
//             m("h1", "Inleveranser")
//         ]);
//     }
// };
//
// export default list;
