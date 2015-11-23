var usersBk = [
    {
        firstName: 'Adam',
        lastName: 'Blackwell',
        location: 'San Francisco, CA',
        email: 'adam.blackwell@xvolve.com',
        rating: 1,
        interests: [
            'international relationship',
            'health care'
        ],
        summary: 'I am the manager of Toys T Us in Time Square with an MBA from Cornell University. I enjoy all kinds of sports and coach my son\'s track team. I have experience training and coaching people of all ages on staying fit and keeping a productive workout routine. I personally have a blog documenting my own habits and ways I am improving own fitness.',
        inspire: {
            quote: 'His Knowledge and personality are incredibly good. must-talk guy!',
            author: 'Heard administrator'
        },
        photos: [
            'http://www.basicspine.com/blog/wp-content/uploads/rob-gronkowski-back-injury.jpg',
            'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            'https://randomuser.me/api/portraits/thumb/men/3.jpg'
        ]
    },
    {
        firstName: 'Sarah',
        lastName: 'Doe',
        location: 'San Francisco, CA',
        email: 'sarah.doe@xvolve.com',
        rating: 3,
        interests: [
            'international relationship',
            'bass guitar'
        ],
        summary: 'I hold a degree in Chemistry and work at DuPont maling synthetic membranes. I enjoying playing funk music on bass with my band. I have been playing bass for 15 years ever since I was in high school. I have toured with my band and played gigs all over the country. I am trained in music theory and improvisation.',
        inspire: {
            quote: 'To thumbs up!!',
            author: 'Heard administrator'
        },
        photos: [
            'http://i.kinja-img.com/gawker-media/image/upload/s--v0ZoywbC--/18zxuccwj2vtfjpg.jpg',
            'https://randomuser.me/api/portraits/thumb/men/5.jpg',
            'https://randomuser.me/api/portraits/thumb/men/6.jpg'
        ]
    },
    {
        firstName: 'Camilia',
        lastName: 'Barungi',
        location: 'San Francisco, CA',
        email: 'camilia.barungi@xvolve.com',
        rating: 5,
        interests: [
            'movies',
            'games',
            'psychology',
            'health',
            'international relationship',
            'health care',
        ],
        summary: 'My name is Camilia. I am currently living life with the label of college student and I probably will have that label for quite some time. I currently am finishing my senior year of undergrade work out in SanFrancisco.My dream job is to work as a museam curator or manager.',
        inspire: {
            quote: 'One of the best Listeners you can find from this app. 100% satisfaction guarantee.',
            author: 'Heard administrator'
        },
        photos: [
            'http://static.foxsports.com/content/fscom/img/2010/06/22/062210-NFL-Photo-Gallery-SW-1_20100622171421_600_400.JPG',
            'https://randomuser.me/api/portraits/thumb/men/8.jpg',
            'https://randomuser.me/api/portraits/thumb/men/9.jpg'
        ]
    }
];

var users = [
    {
        firstName: 'Adam',
        lastName: 'Blackwell',
        location: 'San Francisco, CA',
        email: 'adam.blackwell@xvolve.com',
        rating: 1,
        interests: [
            'movies',
            'games',
            'psychology',
            'health',
            'international relationship',
            'health care',
        ],
        summary: 'I am the manager of Toys T Us in Time Square with an MBA from Cornell University. I enjoy all kinds of sports and coach my son\'s track team. I have experience training and coaching people of all ages on staying fit and keeping a productive workout routine. I personally have a blog documenting my own habits and ways I am improving own fitness.',
        inspire: {
            quote: 'His Knowledge and personality are incredibly good. must-talk guy!',
            author: 'Heard administrator'
        },
        photos: [
            'http://www.basicspine.com/blog/wp-content/uploads/rob-gronkowski-back-injury.jpg',
            'https://randomuser.me/api/portraits/thumb/men/2.jpg',
            'https://randomuser.me/api/portraits/thumb/men/3.jpg'
        ]
    }
];

Template.listeners.helpers({
    listeners: users
});