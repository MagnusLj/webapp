import m from 'mithril';

// import { deliveries } from "../models/deliveries.js";
// import { products } from "../models/products.js";
import { orders } from "../models/orders.js";
// import { products } from "../models/products.js";
// import { invoiceModel } from "../models/invoices.js";
import invoiceModel from "../models/invoices.js";

var form2 = {
    // oninit: products.getProducts,
    oninit: orders.getOrders,
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    stock: "",
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

            m("br"),

            m("h1", "Ordrar"),





            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    // deliveries.currentDelivery.api_key = form.apiKey;
                    // products.currentProduct.api_key = form.apiKey;
                    orders.currentOrder.api_key = form2.apiKey;
                    invoiceModel.currentInvoice.api_key = form2.apiKey;
                    orders.currentOrder.status_id = 600;

                    // products.currentProduct.stock = products.getProducts2(form.stock);
                    // deliveries.save();
                    // products.save();
                    invoiceModel.save();
                    orders.save();
                }
            }, [

                m("select.input", {
                    onchange: function (e) {
                        orders.currentOrder.id = parseInt(e.target.value);
                        // products.currentProduct.product_id = parseInt(e.target.value);
                        orders.getOrders2(parseInt(e.target.value));
                        // console.log("Hej");
                        // orders.currentOrder.status_id = 600;
                        console.log(orders.currentOrder);
                        console.log("Order items");
                        console.log(orders.currentOrder.name);
                        invoiceModel.currentInvoice.order_id = parseInt(e.target.value);


                        console.log("currentInvoice");
                        console.log(invoiceModel.currentInvoice);
                        // form.stock = parseInt(e.target.value);
                    }
                }, m("option", { value: 123 }, "Välj orderläggare"),
                orders.currentOrders.map(function(order) {
                    if (order.status_id !== 600) {
                        return m("option", { value: order.id }, order.name);
                    }
                })),


                m("input[type=submit][value=SKAPA FAKTURA].button full-width-button", "SKAPA")
            ]),
            m("nav.bottom-nav", [
                m("a", [
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
                ]),
                m("a.active", [
                    m("i.material-icons", {
                        href: "/invoices",
                        oncreate: m.route.link
                    }, "local_atm"),
                    m("span.icon-text", "Fakturor"),
                ])
            ])
        ]);
    }
};

console.log(orders.currentOrders);

export default form2;
export { form2 };
