
const Items = React.createClass({

	render() {
		let itemsNode = this.props.data.map((item) => {

			return (

				<li className="item_one">
					<p>{item.name}</p>
					<p>优惠价：￥<span className="item_price">{item.price}</span></p>
				</li>
			)
		});

		return (
			<ul className="items_list">
				{itemsNode}
			</ul>
		)
	}
});

const ItemList = React.createClass({

	getInitialState() {

		return {data: []};
	},

	loadItems() {

		$.ajax({
			url: this.props.url,
			type: 'get',
			data: {},
			dataType: 'json',
			success: function(res) {

				let items = res;

				items.map((item) => {
					let added = parseInt(Math.random() * 100);
					item.price += added;
				});

				this.setState({data: items});

			}.bind(this),

			error: function(xhr, status, err) {

				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	componentDidMount() {

		this.loadItems();
		setInterval(this.loadItems, 2000);
	},

	render() {

		return (

			<div>
			<h1>我是首页</h1>
				< Items data={this.state.data} />
			</div>
		)
	}
});


const contain = document.getElementById('main');
React.render(<ItemList url="../src/p/home/items.json" />, contain);



