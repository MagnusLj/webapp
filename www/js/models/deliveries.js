import m from "mithril";


//other apiKey=fc647610cb500423ea563a4db69f6978

var deliveries = {
    baseURL: "https://lager.emilfolino.se/v2/deliveries",
    // apiKey: "c34b66717ff6f7781fee7b866489a54c",
    // apiKey: "fc647610cb500423ea563a4db69f6978",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",

    currentDeliveries: [],

    getDeliveries: function () {
        console.log("currentDeliveries start");
        return m.request({
            url: deliveries.baseURL + "?api_key=" + deliveries.apiKey,
            method: "GET"
        }).then(function(result) {
            deliveries.currentDeliveries = result.data;
            console.log("currentDeliveries");
            console.log(deliveries.currentDeliveries);
        });
    },

    currentDelivery: {},

    save: function() {
        return m.request({
            method: "POST",
            url: deliveries.baseURL,
            data: deliveries.currentDelivery
        });
        // .then(function(result) {
        //     deliveries.currentDeliveries = result.data;
        // });
        // console.log(deliveries.currentDelivery);
    }
};


// save: function() {
//     return m.request({
//         method: "POST",
//         url: deliveries.baseURL,
//         data: deliveries.currentDeliveries
//     })
//     console.log(deliveries.currentDelivery);
// }

// save: function() {
//      return m.request({
//          method: "PUT",
//          url: "www.api-url.com/save",
//          data: computer.current
//      }).then(function() {
//          m.route.set("/computers");
//      });
//  }

export default deliveries;
export { deliveries };
