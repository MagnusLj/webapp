import m from "mithril";

import auth from "./auth.js";

var invoiceModel = {
    baseURL: "https://lager.emilfolino.se/v2/invoices",
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    invoices: [],

    getInvoices: function () {
        return m.request({
            url: "https://lager.emilfolino.se/v2/invoices?api_key=c34b66717ff6f7781fee7b866489a54c",
            method: "GET",
            headers: {
                'x-access-token': auth.token
            }
        }).then(function(result) {
            console.log("getInvoices");
            console.log(result.data);
            invoiceModel.invoices = result.data;
        });
    },

    currentInvoice: {},

    save: function() {
        return m.request({
            method: "POST",
            url: invoiceModel.baseURL,
            data: invoiceModel.currentInvoice,
            headers: {
                'x-access-token': auth.token
            }
        }).then(function() {
            // m.route.set("/invoices");
        });
        // console.log(invoiceModel.currentInvoice);

        // .then(function(result) {
        //     deliveries.currentDeliveries = result.data;
        // });
        // console.log(deliveries.currentDelivery);
    }
};

export default invoiceModel;
export { invoiceModel };
