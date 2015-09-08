
/* user */
var User = Backbone.Model.extend({
	defaults: {
		ID: "ID",
		UserName: "UserName",
		FullName: "FullName",
		Password: "Password",
		Eposta: "Eposta"
	}
});


/* users */
var Users = Backbone.Collection.extend({
	Model: User
});