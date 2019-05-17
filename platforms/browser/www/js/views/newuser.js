import m from 'mithril';

import { register } from "../models/register.js";

var newuser = {
    // oninit: auth.clear,
    view: function() {
        return m("main.container", [
            m("br"),
            m("nav.top-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/login",
                        oncreate: m.route.link
                    }, "arrow_back"),
                    m("span.icon-text", "Tillbaka"),
                ])
            ]),
            m("h1", "Skapa ny profil"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    register.register();
                }
            }, [
                m("label.input-label", "Email"),
                m("input[type=email].input", {
                    oninput: function(e) {
                        register.email = e.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function(e) {
                        register.password = e.target.value;
                    }
                }),
                m("input[type=submit][value=Registrera].button full-width-button", "Registrera"),
                m("br"),

                m("nav.bottom-nav", [
                    m("a", [
                        m("i.material-icons", {
                            href: "/",
                            oncreate: m.route.link
                        }, "home"),
                        m("span.icon-text", "Hem"),
                    ]),
                    m("a", [
                        m("i.material-icons", {
                            href: "/list",
                            oncreate: m.route.link
                        }, "local_shipping"),
                        m("span.icon-text", "Leveranser"),
                    ]),
                    m("a", [
                        m("i.material-icons", {
                            href: "/login",
                            oncreate: m.route.link
                        }, "exit_to_app"),
                        m("span.icon-text", "Logga in"),
                    ])
                ])
            ])
        ]);
    }
};

// export default login;
export { newuser };
