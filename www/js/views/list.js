import m from 'mithril';

import { deliveries } from "../models/deliveries.js";

var list = {
    oninit: deliveries.getDeliveries,
    view: function() {
        if (deliveries.currentDeliveries.length > 0) {
            return m("main.container", [
                m("h1", "Inleveranser"),
                m("a.button", { href: "/form", oncreate: m.route.link}, "Ny leverans"),
                m("div.deliveries", deliveries.currentDeliveries.map(function(delivery) {
                    return m("div", [
                        m("p", delivery.product_name + " - " + delivery.amount)
                    ]);
                })),


                m("nav.bottom-nav", [
                    m("a", [
                        m("i.material-icons", {
                            href: "/",
                            oncreate: m.route.link
                        }, "home"),
                        m("span.icon-text", "Hem"),
                    ]),
                    m("a.active", [
                        m("i.material-icons", {
                            href: "/list",
                            oncreate: m.route.link
                        }, "local_shipping"),
                        m("span.icon-text", "Leveranser"),
                    ])
                ])
            ]);
        } else {
            return m("main.container", [
                m("h1", "Inleveranser"),
                m("a.button", { href: "/form", oncreate: m.route.link}, "Ny leverans"),
                m("p", "Du har inga leveranser, alls."),


                m("nav.bottom-nav", [
                    m("a", [
                        m("i.material-icons", {
                            href: "/",
                            oncreate: m.route.link
                        }, "home"),
                        m("span.icon-text", "Hem"),
                    ]),
                    m("a.active", [
                        m("i.material-icons", {
                            href: "/list",
                            oncreate: m.route.link
                        }, "local_shipping"),
                        m("span.icon-text", "Leveranser"),
                    ])
                ])
            ]);
        }
    }
};

export default list;
export { list };
