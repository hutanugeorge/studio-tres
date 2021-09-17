interface Link {
    name?: String,
    link: String,
    image?: String,
    position?: String
}

export interface featureCard {
    image: String,
    title: String,
    description: String
}

export const lowerLinks: Link[] = [
    {
        name: 'Pricing',
        link: '#'
    },
    {
        name: 'Gallery',
        link: '#'
    },
    {
        name: 'Program',
        link: '#'
    },
    {
        name: 'Team',
        link: '#'
    },
    {
        name: 'Directions',
        link: '#'
    },
    {
        name: 'Contact Us',
        link: '#'
    }
]

export const upperLinks: Link[] = [
    {
        name: 'Visit us',
        image: 'path',
        position: 'left',
        link: '#',
    },
    {
        name: 'Tres Studio',
        image: 'path',
        position: 'middle',
        link: '#',
    },
    {
        name: 'Login',
        position: 'right',
        link: '#',
    }
]

export const featureCards: featureCard[] = [
    {
        image: 'hair-care.jpg',
        title: 'Hair Care',
        description: 'Because we love to see you shining',
    },
    {
        image: 'facial-treatments.jpg',
        title: 'Facial Treatments',
        description: 'Because we love to see you shining',
    },
    {
        image: 'body-massage.jpg',
        title: 'Body Massage',
        description: 'Because we love to see you shining',
    },
    {
        image: 'makeup-services.jpg',
        title: 'Makeup Services',
        description: 'Because we love to see you shining',
    },
    {
        image: 'nails-care.jpg',
        title: 'Nails Care',
        description: 'Because we love to see you shining',
    },
    {
        image: 'waxing.jpg',
        title: 'Waxing',
        description: 'Because we love to see you shining',
    },

]