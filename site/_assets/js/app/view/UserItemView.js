
/* UserItemView */
var UserItemView = Backbone.View.extend({
	template: _.template($("#userTemp").html(), {}),
	tagName: "tr",
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});