
/* PostCollectionView */
var PostCollectionView = Backbone.View.extend({
	initialize: function () {
		this.renderAll();
	},
	render: function (model) {
		var postItemView = new PostItemView({ model: model });
		this.$el.append(postItemView.render().el);
	},
	renderAll: function () {
		var _this = this;
		_.each(this.collection.models, function (model) {
			_this.render(model);
		});
	}
});