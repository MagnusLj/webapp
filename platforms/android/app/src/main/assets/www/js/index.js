// www/js/index.js
import m from 'mithril';

// import { auth } from "./models/auth.js";
// import { layout } from "./views/layout.js";
import { list } from "./views/list.js";
import { home } from "./views/home.js";
// import { menu } from "./views/menu.js";
import { form } from "./views/form.js";
import { invoices } from "./views/invoices.js";
import { login } from "./views/login.js";
import { newuser } from "./views/newuser.js";
import { form2 } from "./views/form2.js";
import { oneinvoiceview } from "./views/oneinvoiceview.js";
// var m = require("mithril").default;
// var hello = require("./views/hello.js")

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        // m.mount(document.body, hello);
        m.route(document.body, "/", {
            "/": home,
            "/list": list,
            "/form": form,
            "/login": login,
            "/invoices": invoices,
            "/newuser": newuser,
            "/form2": form2,
            "/oneinvoiceview/:id": oneinvoiceview
            // ,
            // "/product/:id": product
        });
    }
};

app.initialize();
