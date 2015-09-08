
/* PostDetailView */
var PostDetailView = Backbone.View.extend({
	template: _.template($("#postDetailTemp").html(), {}),
	tagName: "tr",
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});