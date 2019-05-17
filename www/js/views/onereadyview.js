import m from 'mithril';

import { oneReadyModel } from "../models/oneready.js";

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



var onereadyview = {
    oninit: function(vnode) {
        oneReadyModel.getOneReady(vnode.attrs.id);
    },
    view: function() {
        return m("main.container", [
            m("nav.top-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/ready",
                        oncreate: m.route.link
                    }, "arrow_back"),
                    // m("span.icon-text", "Tillbaka"),
                ])
            ]),
            m("h3", oneReadyModel.readyArray.name),
            // console.log("vnode.attrs"),
            // console.log(oneInvoiceModel.invoiceArray),
            m("table", [
                m("tr", [
                    // m("td", "Namn"),
                    m("td", oneReadyModel.readyArray.address),
                    // m("td", " "),

                ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", oneReadyModel.readyArray.zip + " " + oneReadyModel.readyArray.city),
                    // m("td", oneReadyModel.readyArray.city),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                // m("tr", [
                //     // m("td", "Fakturadatum"),
                //     m("td", oneInvoiceModel.invoiceArray.zip + " " +
                //     oneInvoiceModel.invoiceArray.city),
                //     m("td", " "),
                //     // m("td", "Fakturadatum"),
                //     // m("td", "Förfallodatum")
                // ]),
                // m("tr", [
                //     // m("td", "Fakturadatum"),
                //     m("td", oneInvoiceModel.invoiceArray.country),
                //     m("td", " "),
                //     // m("td", "Fakturadatum"),
                //     // m("td", "Förfallodatum")
                // ]),
                m("tr", [
                    // m("td", "Fakturadatum"),
                    m("td", " "),
                    m("td", " "),
                    // m("td", "Fakturadatum"),
                    // m("td", "Förfallodatum")
                ]),
                // m("tr", [
                //     m("td", "Att betala"),
                //     m("td", oneInvoiceModel.invoiceArray.total_price),
                //     // m("td", "Fakturadatum"),
                //     // m("td", "Förfallodatum")
                // ]),
                // m("tr", [
                //     m("td", "Beställningsdatum"),
                //     m("td", oneInvoiceModel.invoiceArray.creation_date),
                //     // m("td", "Fakturadatum"),
                //     // m("td", "Förfallodatum")
                // ]),
                // m("tr", [
                //     m("td", "Betalas senast"),
                //     m("td", oneInvoiceModel.invoiceArray.due_date),
                //     // m("td", "Fakturadatum"),
                //     // m("td", "Förfallodatum")
                // ]),
            ])
        ]);
    }
};

export default onereadyview;
export { onereadyview };
