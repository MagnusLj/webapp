// import m from "mithril";
//
//
// //other apiKey=fc647610cb500423ea563a4db69f6978
//
// var deliveries = {
//     // baseURL: "https://lager.emilfolino.se/v2/deliveries",
//     baseURL: "https://lager.emilfolino.se/v2/deliveries",
//     // apiKey: "c34b66717ff6f7781fee7b866489a54c",
//     apiKey: "fc647610cb500423ea563a4db69f6978",
//
//     currentDeliveries: [],
//
//     getDeliveries: function () {
//         return m.request({
//             url: deliveries.baseURL + "?api_key=" + deliveries.apiKey,
//             method: "GET"
//         }).then(function(result) {
//             deliveries.currentDeliveries = result.data;
//             console.log(result.data);
//         });
//     },
//
//     currentDelivery: {},
//
//     save: function() {
//         console.log(deliveries.currentDelivery);
//     }
// };
//
// export default deliveries;
// export { deliveries };
