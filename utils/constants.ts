interface Link {
    name?: String,
    link: String,
    image?: String,
    position?: String
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
        name: 'Pricing',
        link: '#'
    },
    {
        name: 'Directions',
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