import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		return this.get("session").fetch().catch(function() {});
	},
	actions: {
		accessDenied: function() {
			this.transitionTo('login'); 
		},

		logout: function() {
			this.get("session").close();
			this.transitionTo('login');
		}
	},
	connectOutlets: function(router, context){
		router.get('applicationController').connectOutlet('messages', 'messages');
	}
});
