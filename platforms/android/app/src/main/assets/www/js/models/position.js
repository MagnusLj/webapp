"use strict";

import m from "mithril";

const position = {
    currentPosition: {},

    getPosition: function() {
        // console.log("getPosition");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position.geoSuccess,
                position.geoError
            );
        }
    },

    geoSuccess: function(pos) {
        position.currentPosition = pos.coords;
        // console.log("geoSuccess");
        // console.log(pos.coords);
        m.redraw();
    },

    geoError: function(error) {
        // console.log("geoError");
        console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
};

export default position;
