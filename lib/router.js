Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'listeners'
});

Router.route('/messages', {
    name: 'messages'
});

Router.route('/account', {
    name: 'account'
});

Router.route('/user/edit-profile', {
    name: 'editProfile'
});

// messages
Router.route('/messages/chat', {
    name: 'chat'
});

// donation step 1
Router.route('/messages/donationRating', {
    name: 'donationRating'
});

// donation step 2
Router.route('/messages/donationRecommended', {
    name: 'donationRecommended'
});

// donation step 3
Router.route('/messages/donationPayment', {
    name: 'donationPayment'
});

// donation step 4
Router.route('/messages/donationFeedback', {
    name: 'donationFeedback'
});

// payments
Router.route('/user/payment', {
    name: 'payment'
});

Router.route('/user/add-payment', {
    name: 'addPayment'
});

// settings
Router.route('/user/settings', {
    name: 'settings'
});

Router.route('/user/settings/delete-account', {
    name: 'deleteAccount'
});

Router.route('/user/settings/help-center', {
    name: 'helpCenter'
});

Router.route('/user/settings/terms-and-privacy', {
    name: 'termsAndPrivacy'
});

Router.route('/user/settings/log-out', {
    name: 'logOut'
});

Router.route('/user/review', {
    name: 'review'
});