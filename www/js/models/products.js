import m from "mithril";

// import { form } from "../views/form.js";


//other apiKey=fc647610cb500423ea563a4db69f6978

var products = {
    baseURL: "https://lager.emilfolino.se/v2/products",
    apiKey: "c34b66717ff6f7781fee7b866489a54c",
    // apiKey: "fc647610cb500423ea563a4db69f6978",

    currentProducts: [],

    currentProducts2: [],

    getProducts: function () {
        return m.request({
            url: products.baseURL + "?api_key=" + products.apiKey,
            method: "GET"
        }).then(function(result) {
            products.currentProducts = result.data;
            console.log("getProducts");
            // console.log(result.data);
        });
    },

    getProducts2: function (id) {
        return m.request({
            url: products.baseURL + "/" + id + "?api_key=" + products.apiKey,
            method: "GET"
        }).then(function(result) {
            products.currentProduct = result.data;
            console.log("getProducts2");
            // console.log(result.data);
            console.log(products.currentProduct);
        });
        // callback();
    },

    currentProduct: {},

    save: function() {
        return m.request({
            method: "PUT",
            url: products.baseURL,
            data: products.currentProduct
        }).then(function() {
            m.route.set("/list");
        });
        // console.log("currentProduct")
        // console.log(products.currentProduct);
    }
};





export default products;
export { products };
