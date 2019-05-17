import m from 'mithril';

import { oneInvoiceModel } from "../models/oneinvoice.js";

// var present = getOneInvoice.present;


// let year = {
//     oninit: function(vnode) {
//         nobel.load(vnode.attrs.year);
//     },
//     view: function(vnode) {
//         return m("main.container", [
//             m("h1", vnode.attrs.year)
//         ]);
//     }
// };



var oneinvoiceview = {
    oninit: function(vnode) {
        oneInvoiceModel.getOneInvoice(vnode.attrs.id);
    },
    view: function() {
        return m("main.container", [
            m("nav.top-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/invoices",
                        oncreate: m.route.link
                    }, "arrow_back"),
                    // m("span.icon-text", "Tillbaka"),
                ])
            ]),
            m("h1", oneInvoiceModel.invoiceArray.name),
            console.log("vnode.attrs"),
            console.log(oneInvoiceModel.invoiceArray),
            m("table.table-striped", [
                m("tr", [
                    // m("td", "Namn"),
                    m("td", oneInvoiceModel.invoiceArray.name),
                    m("td", " "),

                ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", oneInvoiceModel.invoiceArray.address),
                    m("td", " "),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", oneInvoiceModel.invoiceArray.zip + " " +
                    oneInvoiceModel.invoiceArray.city),
                    m("td", " "),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", oneInvoiceModel.invoiceArray.country),
                    m("td", " "),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", " "),
                    m("td", " "),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    m("td", "Att betala"),
                    m("td", oneInvoiceModel.invoiceArray.total_price),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    m("td", "Beställningsdatum"),
                    m("td", oneInvoiceModel.invoiceArray.creation_date),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                m("tr", [
                    m("td", "Betalas senast"),
                    m("td", oneInvoiceModel.invoiceArray.due_date),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
            ])
        ]);
    }
};

export default oneinvoiceview;
export { oneinvoiceview };


// import m from "mithril";
//
// import invoiceModel from "../models/invoices.js";
//
// var invoiceTable = {
//     view: function () {
//         return m("table.table.table-scroll.table-striped" , [
//             m("thead", [
//                 m("tr", [
//                     m("th", "Namn"),
//                     m("th", "Pris"),
//                     m("th", "Fakturadatum"),
//                     m("th", "Förfallodatum")
//                 ])
//             ]),
//             m("tbody", invoiceModel.invoices.map(function (invoice) {
//                 return m("tr", [
//                     m("td", invoice.name),
//                     m("td", invoice.total_price),
//                     m("td", invoice.creation_date),
//                     m("td", invoice.due_date)
//                 ]);
//             }))
//         ]);
//     }
// };
//
// var noInvoices = {
//     view: function () {
//         return m("p", "Det finns inga fakturor.")
//     }
// };
//
// var invoices = {
//     oninit: invoiceModel.getInvoices,
//     view: function () {
//         return [
//             m("h1", "Fakturor"),
//             // invoiceModel.getInvoices.length > 0 ?
//             invoiceModel.invoices.length > 0 ?
//                 m(invoiceTable) :
//                 m(noInvoices),
//                 console.log("invoices.js"),
//                 console.log(invoiceModel.invoices),
//                 m("br"),
//                 m("br"),
//                 m("br"),
//                 m("a.button", { href: "/form2", oncreate: m.route.link}, "Skapa ny faktura"),
//
//                 m("nav.bottom-nav", [
//                     m("a", [
//                         m("i.material-icons", {
//                             href: "/",
//                             oncreate: m.route.link
//                         }, "home"),
//                         m("span.icon-text", "Hem"),
//                     ]),
//                     m("a", [
//                         m("i.material-icons", {
//                             href: "/list",
//                             oncreate: m.route.link
//                         }, "local_shipping"),
//                         m("span.icon-text", "Leveranser"),
//                     ]),
//                     m("a", [
//                         m("i.material-icons", {
//                             href: "/login",
//                             oncreate: m.route.link
//                         }, "exit_to_app"),
//                         m("span.icon-text", "Logga in"),
//                     ]),
//                     m("a.active", [
//                         m("i.material-icons", {
//                             href: "/invoices",
//                             oncreate: m.route.link
//                         }, "local_atm"),
//                         m("span.icon-text", "Fakturor"),
//                     ])
//                 ])
//         ];
//     }
// };
//
