import m from 'mithril';

import { auth } from "../models/auth.js";

var login = {
    oninit: auth.clear,
    view: function() {
        return m("main.container", [
            m("div.slide-up", [
            m("h1", "Logga in"),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                }
            }, [
                m("label.input-label", "Email"),
                m("input[type=email].input", {
                    oninput: function(e) {
                        auth.email = e.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function(e) {
                        auth.password = e.target.value;
                    }
                }),
                m("input[type=submit][value=LOGGA IN].button full-width-button", "LOGGA IN"),
                m("br"),
                m("a", {
                    href: "/newuser",
                    oncreate: m.route.link
                }, "SKAPA NY PROFIL")])]),

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
                            href: "/ready",
                            oncreate: m.route.link
                        }, "assignment_turned_in"),
                        m("span.icon-text", "Klara"),
                    ]),
                    m("a.active", [
                        m("i.material-icons", {
                            href: "/login",
                            oncreate: m.route.link
                        }, "exit_to_app"),
                        m("span.icon-text", "Logga in"),
                    ])
                ])

        ]);
    }
};

// export default login;
export { login };
