
/* appRouter definations */
var AppRouter = Backbone.Router.extend({
	routes: {
		"" : "getAllPost", // homepage -- tüm post'lar 
		"post/:id": "getPost", // #/post/id -- gelen id'ye göre post goster
		"users": "getAllUsers", // #/users -- tüm user'ler
		"user/:id": "getUser" // #/user/id -- gelen id'ye göre user göster
	},
	getAllUsers: function () {
		/* ajax ile user.json'dan datayı alıp, json'ları model, collection ve collectionview'ı kullanarak ekrana basar */
		$("#users").empty();
		$("#postDetail").empty();
		$(".table thead").hide();
		$(".table thead.users").show();
		
		$.ajax({
			url: "/site/ajax/user.json",
			dataType: "json"
		}).complete(function (data) {
			var users = new Users();
			_.each(data.responseJSON, function (models) {
				users.add(new User(models));
			});
			var userCollectionView = new UserCollectionView({ el: $("#users"), collection: users });
		});
	},
	getAllPost: function () {
		$("#users").empty();
		$("#postDetail").empty();
		$(".table thead").hide();
		$(".table thead.posts").show();
		
		$.ajax({
			url: "/site/ajax/post.json",
			dataType: "json"
		}).complete(function (data) {
			var users = new Users();
			_.each(data.responseJSON, function (models) {
				users.add(new User(models));
			});
			var postCollectionView = new PostCollectionView({ el: $("#users"), collection: users })
		});
	},
	getPost: function ( id ) {
		$("#users").empty();
		$("#postDetail").empty();
		$(".table thead").hide();
			
		$.ajax({
			url: "/site/ajax/post.json",
			dataType: "json"
		}).complete(function (data) {
			_.each(data.responseJSON, function (models) {
				if (models.ID == id){
					var postDetailView = new PostDetailView({ el: $("#postDetail"),  model: new User(models) });
					postDetailView.render();
				}
			});
		});
	},
	getUser: function ( id ) {
		$("#users").empty();
		$("#postDetail").empty();
		$(".table thead").hide();
		$(".table thead.users").show();
		
		$.ajax({
			url: "/site/ajax/user.json",
			dataType: "json"
		}).complete(function (data) {
			_.each(data.responseJSON, function (models) {
				if( models.ID == id ){
					var userItemView = new UserItemView({ el: $("#users"), model: new User(models) });
					$("#users").html("<tr>" + userItemView.render().$el.html() + "</tr>" );
				}
			});
		});
	}
});
/* appRouter definations */