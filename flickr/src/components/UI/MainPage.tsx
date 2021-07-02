import React from 'react';
import s from './MainPage.module.css'

export const MainPage: React.FC = () => {

    return (
        <div className={s.content}>
            <p>No images here. Would you try to search for anything else?</p>
            {/*{bookmarks && <BookmarksContainer/>}*/}
            {/*{search && <SearchPageContainer/>}*/}
        </div>
    );
}

