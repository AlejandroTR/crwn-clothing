export interface Section {
    id: number;
    title: string;
    imageUrl: string;
    size?: string;
    linkUrl: string;
}

export interface DirectoryState {
    sections: Array<Section>
}
