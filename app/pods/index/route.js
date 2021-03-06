import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		if (!this.get("session.isAuthenticated")) {
			this.transitionTo('login');
		}
	},
	model: function(){
		return[{name: "Paulo Warren", unread: 420},
			 		 {name: "Hudson Clark", unread: 69}];
	}
});
