import m from "mithril";
import position from "../models/position.js";

// import auth from "./auth.js";

var oneReadyModel = {
    baseURL: "https://lager.emilfolino.se/v2/orders/",
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    readyArray: [],


    // url: deliveries.baseURL + "?api_key=" + deliveries.apiKey

    getOneReady: function (id) {
        return m.request({
            url: oneReadyModel.baseURL + id + "?api_key=" + "c34b66717ff6f7781fee7b866489a54c",
            method: "GET"
            // headers: {
            //     'x-access-token': auth.token
            // }
        }).then(function(result) {
            // console.log("getOneInvoice");
            // console.log(result.data);
            oneReadyModel.readyArray = result.data;
            // console.log("array");
            // console.log(oneInvoiceModel.invoiceArray);
            // var present = result.data;
            // console.log("present");
            // console.log(present);
            // m.route.set("/oneinvoiceview");
        });
    },

    // currentInvoice: {},

//     save: function() {
//         return m.request({
//             method: "POST",
//             url: invoiceModel.baseURL,
//             data: invoiceModel.currentInvoice,
//             headers: {
//                 'x-access-token': auth.token
//             }
//         }).then(function(result) {
//             // m.route.set("/invoices");
// });
//         console.log(invoiceModel.currentInvoice);
//
//         // .then(function(result) {
//         //     deliveries.currentDeliveries = result.data;
//         // });
//         // console.log(deliveries.currentDelivery);
//     }
};

export default oneReadyModel;
export { oneReadyModel };
