Template.listener.helpers({
    fullName: function () {
        return this.firstName.toString() + " " + this.lastName.toString();
    },
    cover: function () {
        return this.photos[0];
    }
});