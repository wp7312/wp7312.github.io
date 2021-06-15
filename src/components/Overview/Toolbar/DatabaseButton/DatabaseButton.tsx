import React from 'react';
import { PopperableButton } from '../../../shared/PopperableButton/PopperableButton';
import { Tile } from '../../../shared/Tile/Tile';

export const DatabaseButton: React.FunctionComponent<{}> = () => {
    return (
        <PopperableButton value='Database: IFS Database' size={2}>
            <div style={{backgroundColor: 'white', width:'300px', height:'200px', border: '1px solid black'}}>-upa</div>
        </PopperableButton>
    )
}