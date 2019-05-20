import m from "mithril";

import invoiceModel from "../models/invoices.js";
// import oneInvoiceModel from "../models/oneinvoice.js";
// import oneinvoiceview from "./oneinvoiceview.js";



var invoiceTable = {
    view: function () {
        return m("table.table.table-scroll.table-striped", [
            m("thead", [
                m("tr", [
                    m("th", "Namn"),
                    m("th", "Att betala"),
                    // m("th", "Fakturadatum"),
                    // m("th", "Förfallodatum")
                ])
            ]),
            m("tbody", invoiceModel.invoices.map(function (invoice) {
                return m("tr", [
                    // m("button", {onclick: function() {console.log("tut")}}, "Tut"),
                    // m("td", {onclick: function() {console.log(invoice.name)}}, invoice.name),

                    m("td", {href: "/oneinvoiceview/" +
                       invoice.id, oncreate: m.route.link }, invoice.name),

                    m("td", invoice.total_price),
                    // m("td", invoice.creation_date),
                    // m("td", invoice.due_date)
                ]);

                // m("a.button.blue-button",
                // { href: "/year/" + startYear, oncreate: m.route.link },
                // startYear)

                //
                // href: `/invoiceDetails/${invoice.id}`,
                //                                     oncreate: m.route.link
                //
                //
                //
                //         m("a.button.blue-button",
                //                         { href: "/year/" + startYear, oncreate: m.route.link },
                //                         startYear)
                // m("button", {
                //    onclick: function() {
                //        count += 1
                //    }

                // ("a", {
                //         href: "/newuser",
                //         oncreate: m.route.link
                //     }, "Skapa ny profil")

                // m("a[href=/otherPage]", { config: m.route }, "Account")
            }))
        ]);
    }
};

var noInvoices = {
    view: function () {
        return m("p", "Det finns inga fakturor.");
    }
};

var invoices = {
    oninit: invoiceModel.getInvoices,
    view: function () {
        return [
            m("h1", "Fakturor"),
            // invoiceModel.getInvoices.length > 0 ?
            invoiceModel.invoices.length > 0 ?
                m(invoiceTable) :
                m(noInvoices),
            console.log("invoices.js"),
            console.log(invoiceModel.invoices),
            m("br"),
            m("br"),
            m("br"),
            m("a.button", { href: "/form2", oncreate: m.route.link}, "SKAPA NY FAKTURA"),

            m("nav.bottom-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/",
                        oncreate: m.route.link
                    }, "home"),
                    m("span.icon-text", "Hem"),
                ]),
                m("a", [
                    m("i.material-icons", {
                        href: "/ready",
                        oncreate: m.route.link
                    }, "assignment_turned_in"),
                    m("span.icon-text", "Klara"),
                ]),
                m("a.active", [
                    m("i.material-icons", {
                        href: "/invoices",
                        oncreate: m.route.link
                    }, "local_atm"),
                    m("span.icon-text", "Fakturor"),
                ])
            ])
        ];
    }
};

export default invoices;
export { invoices };
