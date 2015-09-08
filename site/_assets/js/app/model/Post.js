
/* post */
var Post = Backbone.Model.extend({
	defaults: {
		ID: "ID",
		Title: "Title",
		Content: "Content",
		Date: "Date",
		UserID: "UserID"
	}
});


/* posts */
var Posts = Backbone.Collection.extend({
	Model: Post
});