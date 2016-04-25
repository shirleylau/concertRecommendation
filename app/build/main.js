"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var Page = React.createClass({
    displayName: 'Page',
    render: function () {
        var viewOptions = ['Genre', 'Artist', 'Song'];
        var me = {
            user_id: '1248316555',
            name: 'Shirley'
        };
        var friend = {
            "user_id": "12131331278",
            "name": "Willy"
        };
        var peeps = [friend, me];
        return (React.createElement("div", null, React.createElement("div", {className: "row wrap"}, React.createElement("h1", null, "HI, FRIEND.")), React.createElement("div", {id: "header"}, React.createElement("div", {className: "center"}, React.createElement("div", {id: "view-control", className: "btn-group btn-group-lg", role: "group"}, viewOptions.map(function (x) { return React.createElement(Button, {label: x}); })))), React.createElement("div", {id: "body"}, React.createElement("div", {className: "section"}, React.createElement("div", {id: "score", className: "center"}, "68")), React.createElement("div", {className: "section wrap"}, React.createElement("div", {className: "main"}, peeps.map(function (x) { return React.createElement(Profile, {name: x['name']}); })), React.createElement("div", {className: "side-panel"}))), React.createElement("div", {id: "footer"})));
    }
});
var Button = function (_a) {
    var label = _a.label;
    //console.log(label);
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, label);
};
var Profile = function (_a) {
    var name = _a.name;
    return React.createElement("div", {className: "profile"}, React.createElement("div", {className: "profile-name"}, name), React.createElement("div", {className: "profile-image"}), React.createElement("div", {className: "profile-chart"}));
};
ReactDOM.render(React.createElement(Page, null), document.getElementById('page-container'));
//main2.FUUU();
//# sourceMappingURL=main.js.map