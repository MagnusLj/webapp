import m from 'mithril';
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import position from "../models/position.js";

import { oneReadyModel } from "../models/oneready.js";

import locationIcon from "../../location.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";



var map;

var coord_y;
var coord_x;

var locationMarker = L.icon({
    iconUrl: locationIcon,
    iconSize:     [24, 24],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
});

function showMap() {
    position.getPosition();


    var geocoder = new OpenStreetMapProvider();

    var addresses = [
        // "Bastionsgatan 1, Karlskrona",
        // "Kärleksstigen 1, Karlskrona",
        // "Lilla Varvsgatan 14, Malmö"
    ];

    addresses = oneReadyModel.addressArray;

    map = L.map('map').setView([56.181932, 15.590525], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
        attribution: `&copy;
        <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap</a> contributors`
    }).addTo(map);

    for (var i = 0; i < addresses.length; i++) {
        // var coord_y;
        //
        // var coord_x;

        geocoder
            .search({ query: addresses[i] })
            .then(function(result) {
                if (result.length > 0) {
                    coord_y = result[0].y;
                    coord_x = result[0].x;
                    L.marker(
                        [result[0].y, result[0].x]
                    ).addTo(map).bindPopup(result[0].label);
                    map.panTo(new L.LatLng(result[0].y, result[0].x));
                    // map = L.map('map').setView([56.181932, 15.590525], 13);
                }
            });
    }

    // map = L.map('map').setView([56.181932, 15.590525], 13);


    console.log("Coords y and x: ");
    console.log(coord_y);

    // var places = {
    //     "BTH": [56.181932, 15.590525]
    //     // "Stortorget": [56.160817, 15.586703],
    //     // "Hoglands Park": [56.164077, 15.585887],
    //     // "Rödebybacken": [56.261121, 15.628609]
    // };
    //
    // map = L.map('map').setView([56.181932, 15.590525], 13);
    //
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',    {
    //     attribution: `&copy;
    //     <a href="https://www.openstreetmap.org/copyright">
    //     OpenStreetMap</a> contributors`
    // }).addTo(map);

    // for (var place in places) {
    //     if (places.hasOwnProperty(place)) {
    //         L.marker(places[place]).addTo(map).bindPopup(place);
    //     }
    // }

    // var geocoder = new OpenStreetMapProvider();
    //
    // var addresses = [
    //     // "Bastionsgatan 1, Karlskrona",
    //     // "Kärleksstigen 1, Karlskrona",
    //     "Lilla Varvsgatan 14, Malmö"
    // ];
    //
    // for (var i = 0; i < addresses.length; i++) {
    //     geocoder
    //         .search({ query: addresses[i] })
    //         .then(function(result) {
    //             if (result.length > 0) {
    //                 L.marker(
    //                     [result[0].y, result[0].x]
    //                 ).addTo(map).bindPopup(result[0].label);
    //             }
    //         });
    // }
}

function showPosition() {
    console.log("showPosition");
    if (position.currentPosition.latitude && position.currentPosition.longitude) {
        console.log("showPosition2");
        console.log(position.currentPosition.latitude);
        console.log(" \n");
        console.log(position.currentPosition.longitude);
        L.marker(
            [
                position.currentPosition.latitude,
                position.currentPosition.longitude
            ],
            {
                icon: locationMarker
            }
        ).addTo(map).bindPopup("Din plats");
    }
}



var onereadyview = {
    onbeforeremove: function(vnode) {
        vnode.dom.classList.add("slide-out");
        return new Promise(function(resolve) {
            setTimeout(function() {
                vnode.dom.classList.remove("slide-out");
                resolve();
            }, 250);
        });
    },
    oninit: function(vnode) {
        oneReadyModel.getOneReady(vnode.attrs.id);
        position.getPosition();
        oneReadyModel.addressArray = [];
        oneReadyModel.addressArray.push(vnode.attrs.address);
        // showMap.addresses.push(vnode.attrs.address);
        console.log("vnode.attrs.address");
        console.log(vnode.attrs.address);
    },
    oncreate: function() {
        showMap();
        // showPosition();
        // position.getPosition();
    },
    view: function() {
        showPosition();
        return m("div.slide-in.main.container", [
            m("nav.top-nav", [
                m("a", [
                    m("i.material-icons", {
                        href: "/ready",
                        oncreate: m.route.link
                    }, "arrow_back"),
                ])
            ]),
            m("h3", oneReadyModel.readyArray.name),
            console.log("oneReadyModel.addressArray"),
            console.log(oneReadyModel.addressArray),
            m("table", [
                m("tr", [
                    m("td", oneReadyModel.readyArray.address),
                ]),
                m("tr", [
                    m("td", oneReadyModel.readyArray.zip + " " + oneReadyModel.readyArray.city),
                ]),
                m("tr", [
                    m("td", " "),
                    m("td", " "),
                ]),
            ]),
            m("h1", "Map"),
            m("div#map.map", "")
        ]);
    }
};

export default onereadyview;
export { onereadyview };
