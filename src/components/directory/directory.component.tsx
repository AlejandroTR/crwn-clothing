import React, { Component, ReactNode } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

interface Section {
    id: number;
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

type DirectoryState = {
    sections: Array<Section>
}

class Directory extends Component<{}, DirectoryState> {
    constructor(props: any) {
        super(props);

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkUrl: 'shop/hats'
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkUrl: 'shop/jackets'
                },
                {
                    id: 3,
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkUrl: 'shop/sneakers'
                },
                {
                    id: 4,
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkUrl: 'shop/womens'
                },
                {
                    id: 5,
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render(): ReactNode {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, ...props }) => (
                        <MenuItem key={id} {...props} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;
