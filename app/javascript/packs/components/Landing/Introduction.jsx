import React from 'react'
import { Item } from 'semantic-ui-react'

const description = `Timebuddy is a productivity site which provides you tools to save you time.\n
    Focus on what’s important to you and spend less time navigating through convoluted tools to complete simple tasks.\n
    At Timebuddy we believe your time is like money and we want to help you get the most bang for your buck.\n`;

const items = [
    {
        childKey: 0,
        image: '/images/wireframe/image.png',
        header: 'Header',
        description: description,
        meta: 'Metadata',
        extra: 'Extra',
    },
]

const Introduction = () => <Item.Group items={items} />

export default Introduction