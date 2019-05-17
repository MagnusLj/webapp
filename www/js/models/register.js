import m from "mithril";

var register = {
    email: "",
    password: "",
    // token: "",

    // clear: function () {
    //     register.email = "";
    //     register.password = "";
    // },



    register: function () {
        var payload = {
            email: register.email,
            password: register.password,
            // api_key: "fc647610cb500423ea563a4db69f6978"
            api_key: "c34b66717ff6f7781fee7b866489a54c"
        };

        return m.request({
            url: "https://lager.emilfolino.se/v2/auth/register",
            method: "POST",
            data: payload
        }).then(function(result) {
            register.data = result.data;
            console.log(register.data);
            m.route.set("/login");
        });
    }

};

export default register;
export { register };
