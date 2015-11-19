Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    name: 'search'
});

Router.route('/messages', {
    name: 'messages'
});

Router.route('/account', {
    name: 'account'
});