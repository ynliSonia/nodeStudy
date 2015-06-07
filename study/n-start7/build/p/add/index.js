"use strict";

(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND", f);
			}var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];return s(n ? n : e);
			}, l, l.exports, e, t, n, r);
		}return n[o].exports;
	}var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {

		var Items = React.createClass({ displayName: "Items",

			render: function render() {
				var itemsNode = this.props.data.map(function (item) {

					return React.createElement("li", { className: "item_one" }, React.createElement("p", null, item.name), React.createElement("p", null, "优惠价：￥", React.createElement("span", { className: "item_price" }, item.price)));
				});

				return React.createElement("ul", { className: "items_list" }, itemsNode);
			}
		});

		var ItemList = React.createClass({ displayName: "ItemList",

			getInitialState: function getInitialState() {

				return { data: [] };
			},

			loadItems: function loadItems() {

				$.ajax({
					url: this.props.url,
					type: "get",
					data: {},
					dataType: "json",
					success: (function (res) {

						var items = res;

						items.map(function (item) {
							var added = parseInt(Math.random() * 100);
							item.price += added;
						});

						this.setState({ data: items });
					}).bind(this),

					error: (function (xhr, status, err) {

						console.error(this.props.url, status, err.toString());
					}).bind(this)
				});
			},

			componentDidMount: function componentDidMount() {

				this.loadItems();
				setInterval(this.loadItems, 2000);
			},

			render: function render() {

				return React.createElement("div", null, React.createElement("h1", null, "我是新增页面"), React.createElement(Items, { data: this.state.data }));
			}
		});

		var contain = document.getElementById("main");
		React.render(React.createElement(ItemList, { url: "../src/p/add/items.json" }), contain);
	}, {}] }, {}, [1]);