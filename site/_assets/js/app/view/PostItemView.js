
/* PostItemView */
var PostItemView = Backbone.View.extend({
	template: _.template($("#postTemp").html(), {}),
	tagName: "tr",
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});