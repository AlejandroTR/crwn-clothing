import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { RootState } from '../../store/reducer';
import { Section } from '../../store/directory/directory.types';
import { selectDirectorySections } from '../../store/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss'

interface DesiredSelection {
    sections: Array<Section>
}

const mapState = createStructuredSelector<RootState, DesiredSelection>({
    sections: selectDirectorySections
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Directory: FunctionComponent<PropsFromRedux> = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ id, ...props }) => (
                <MenuItem key={id} {...props} />
            ))
        }
    </div>
);

export default connector(Directory);
