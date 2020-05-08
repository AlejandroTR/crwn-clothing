import { createSelector } from 'reselect';

import { RootState } from '../reducer';
import { DirectoryState } from './directory.types';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory: DirectoryState) => directory.sections
)
