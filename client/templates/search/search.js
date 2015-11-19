var items = [
    {
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'The meteor book',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'MongoDB',
        url: 'http://meteor.com'
    },
    {
        title: 'NodeJS',
        url: 'http://themeteorbook.com'
    }
];

Template.search.helpers({
    items: items
});