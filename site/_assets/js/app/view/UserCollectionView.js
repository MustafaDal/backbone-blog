
/* UserCollectionView */
var UserCollectionView = Backbone.View.extend({
	initialize: function () {
		this.renderAll();
	},
	render: function (model) {
		var userItemView = new UserItemView({ model: model });
		this.$el.append(userItemView.render().el);
	},
	renderAll: function () {
		var _this = this;
		_.each(this.collection.models, function (model) {
			_this.render(model);
		});
	}
});