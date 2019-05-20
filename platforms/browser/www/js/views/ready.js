import m from "mithril";

import readyModel from "../models/ready.js";
// import oneInvoiceModel from "../models/oneinvoice.js";
// import oneinvoiceview from "./oneinvoiceview.js";



var readyTable = {
    view: function () {
        return m("table.table.table-scroll.table-striped", [
            m("thead", [
                m("tr", [
                    m("th", "Namn"),
                    m("th", "Ordernummer"),
                    // m("th", "Fakturadatum"),
                    // m("th", "Förfallodatum")
                ])
            ]),
            m("tbody", readyModel.readies.map(function (order) {
                return m("tr", [

                    m("td", {href: "/onereadyview/" +
                       order.id + "/" + order.address, oncreate: m.route.link }, order.name),

                    m("td", order.id),
                ]);
            }))
        ]);
    }
};

var noReadies = {
    view: function () {
        return m("p", "Det finns inga färdiga ordrar.");
    }
};

var ready = {
    oninit: readyModel.getReadies,
    view: function () {
        return m("main.container", [
            m("div.slide-up", [
            m("h1", "Ordrar"),
            // invoiceModel.getInvoices.length > 0 ?
            readyModel.readies.length > 0 ?
                m(readyTable) :
                m(noReadies),
            // console.log("readies.js"),
            // console.log(invoiceModel.invoices),
            m("br"),
            m("br"),
            m("br")]),
            // m("a.button", { href: "/form2", oncreate: m.route.link}, "SKAPA NY FAKTURA"),

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
                        href: "/ready",
                        oncreate: m.route.link
                    }, "assignment_turned_in"),
                    m("span.icon-text", "Klara"),
                ]),
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

export default ready;
export { ready };
