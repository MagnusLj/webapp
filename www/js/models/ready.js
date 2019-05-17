import m from "mithril";

// import auth from "./auth.js";

var readyModel = {
    baseURL: "https://lager.emilfolino.se/v2/orders",
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    readies: [],

    getReadies: function () {
        return m.request({
            url: "https://lager.emilfolino.se/v2/orders?api_key=c34b66717ff6f7781fee7b866489a54c",
            method: "GET"
            // headers: {
            //     'x-access-token': auth.token
            // }
        }).then(function(result) {
            readyModel.readies = [];
            // console.log("getReadies");
            console.log(result.data);
            console.log("Length:");
            console.log(result.data.length);
            for (var i=0; i< result.data.length; i++) {
                if (result.data[i].status_id == 200) {
                    readyModel.readies.push(result.data[i]);
                }
            }
            console.log("readies:");
            console.log(readyModel.readies);
            // readyModel.readies = result.data;
        });
    },

    currentInvoice: {},

    save: function() {
        return m.request({
            method: "POST",
            url: readyModel.baseURL,
            data: readyModel.currentReady,
            // headers: {
            //     'x-access-token': auth.token
            // }
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

export default readyModel;
export { readyModel };
