import m from "mithril";

import invoiceModel from "../models/invoices.js";

//other apiKey=fc647610cb500423ea563a4db69f6978

// var deliveries = {
//     baseURL: "https://lager.emilfolino.se/v2/deliveries",
//     // apiKey: "c34b66717ff6f7781fee7b866489a54c",
//     // apiKey: "fc647610cb500423ea563a4db69f6978",
//     apiKey: "c34b66717ff6f7781fee7b866489a54c",
//
//     currentDeliveries: [],

var orders = {
    baseURL: "https://lager.emilfolino.se/v2/orders",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    //apiKey: "c34b66717ff6f7781fee7b866489a54c",

    currentOrders: [],

    getOrders: function () {
        console.log("currentOrders start");
        return m.request({
            url: orders.baseURL + "?api_key=" + orders.apiKey,
            method: "GET"
        }).then(function(result) {
            orders.currentOrders = result.data;
            console.log("currentOrders");
            console.log(orders.currentOrders);
        });
    },


    //     array1.forEach(function(element) {
    //   console.log(element);
    // });


    getOrders2: function (id) {
        return m.request({
            url: orders.baseURL + "/" + id + "?api_key=" + orders.apiKey,
            method: "GET"
        }).then(function(result) {
            var totalPrice = 0;

            orders.currentOrder = result.data;
            console.log("getOrders2");
            // console.log(result.data);
            console.log(orders.currentOrder);
            console.log(orders.currentOrder.order_items[0].price);
            orders.currentOrder.order_items.forEach(function(price) {
                console.log("Pris:");
                console.log(price.price);
                totalPrice = totalPrice + (price.price * price.amount);
            });
            invoiceModel.currentInvoice.total_price = totalPrice;

            var today = new Date();

            var due = "";

            var dd = String(today.getDate()).padStart(2, '0');

            var mm = String(today.getMonth() + 1).padStart(2, '0');

            var mm2 = String(today.getMonth() + 2).padStart(2, '0');

            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            due = yyyy + '-' + mm2 + '-' + dd;
            console.log("Datum");
            console.log(today);
            console.log(due);
            invoiceModel.currentInvoice.creation_date = today;
            invoiceModel.currentInvoice.due_date = due;


            console.log("currentInvoice");
            console.log(invoiceModel.currentInvoice);
        });
        // callback();
    },

    currentOrder: {},

    // save: function() {
    //     return m.request({
    //         method: "POST",
    //         url: deliveries.baseURL,
    //         data: deliveries.currentDelivery
    //     });
    //     // .then(function(result) {
    //     //     deliveries.currentDeliveries = result.data;
    //     // });
    //     // console.log(deliveries.currentDelivery);
    // }
    // },


    // save: function() {
    //     return m.request({
    //         method: "PUT",
    //         url: orders.baseURL,
    //         data: orders.currentOrders
    //     })
    //     console.log(orders.currentOrder);
    // }


    save: function() {
        return m.request({
            method: "PUT",
            url: orders.baseURL,
            data: orders.currentOrder
        }).then(function() {
            // console.log(currentOrder);
            m.route.set("/invoices");
        });
        // console.log("currentProduct")
        // console.log(products.currentProduct);
    }
};

// save: function() {
//      return m.request({
//          method: "PUT",
//          url: "www.api-url.com/save",
//          data: computer.current
//      }).then(function() {
//          m.route.set("/computers");
//      });
//  }

export default orders;
export { orders };
