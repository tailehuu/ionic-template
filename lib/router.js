Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'searches'
});

Router.route('/messages', {
    name: 'messages'
});

Router.route('/account', {
    name: 'account'
});