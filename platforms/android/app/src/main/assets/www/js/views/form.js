import m from 'mithril';

import { deliveries } from "../models/deliveries.js";
import { products } from "../models/products.js";

var form = {
    oninit: products.getProducts,
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    stock: "",
    view: function() {
        return m("main.container", [




            m("p", "hej"),
            m("h1", "Ny inleverans"),

            m("nav.top-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/list",
                        oncreate: m.route.link
                    }, "arrow_back"),
                    m("span.icon-text", "Tillbaka"),
                ])
            ]),





            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    deliveries.currentDelivery.api_key = form.apiKey;
                    products.currentProduct.api_key = form.apiKey;
                    // products.currentProduct.stock = products.getProducts2(form.stock);
                    deliveries.save();
                    products.save();
                }
            }, [
                m("select.input", {
                    onchange: function (e) {
                        deliveries.currentDelivery.product_id = parseInt(e.target.value);
                        // products.currentProduct.product_id = parseInt(e.target.value);
                        products.getProducts2(parseInt(e.target.value));
                        console.log("Hej");
                        console.log(products.currentProduct);
                        // form.stock = parseInt(e.target.value);
                    }
                }, m("option", { value: 123 }, "Välj produkt"),
                products.currentProducts.map(function(product) {
                    return m("option", { value: product.id }, product.name);
                })),
                m("label.input-label", "Antal"),
                m("input[type=number].input", {
                    oninput: function(e) {
                        console.log(e.target.value);
                        console.log("Provar igen");
                        console.log(products.currentProduct);
                        deliveries.currentDelivery.amount = parseInt(e.target.value);
                        // products.currentProduct.stock = parseInt(e.target.value);
                        var total = products.currentProduct.stock +
                            deliveries.currentDelivery.amount;

                        console.log("Total:");
                        console.log(total);
                        products.currentProduct.stock = total;
                    }
                }),
                m("label.input-label", "Leveransdatum"),
                m("input[type=date].input", {
                    oninput: function(e) {
                        console.log(e.target.value);
                        deliveries.currentDelivery.delivery_date = e.target.value;
                    }
                }),

                m("label.input-label", "Kommentar"),
                m("input[type=textarea] [placeholder=Skriv kommentar här].textarea", {
                    oninput: function(e) {
                        console.log(e.target.value);
                        deliveries.currentDelivery.comment = e.target.value;
                    }
                }),

                m("input[type=submit][value=Spara].button full-width-button", "Spara")
            ])
        ]);
    }
};

console.log(deliveries.currentDeliveries);

export default form;
export { form };
