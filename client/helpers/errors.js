Errors = new Meteor.Collection(null);

Template.errors.helpers({
	errors: function() {
		return Errors.find();
	}
})

throwError = function(message) {
	Errors.insert({message: message})
}