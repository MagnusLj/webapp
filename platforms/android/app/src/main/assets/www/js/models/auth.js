import m from "mithril";

var auth = {
    email: "",
    password: "",
    token: "",

    clear: function () {
        auth.email = "";
        auth.password = "";
    },



    login: function () {
        var payload = {
            email: auth.email,
            password: auth.password,
            // api_key: "fc647610cb500423ea563a4db69f6978"
            api_key: "c34b66717ff6f7781fee7b866489a54c"
        };

        return m.request({
            url: "https://lager.emilfolino.se/v2/auth/login",
            method: "POST",
            data: payload
        }).then(function(result) {
            auth.token = result.data.token;
            console.log(auth.token);
            m.route.set("/invoices");
        });
    }

};

export default auth;
export { auth };
