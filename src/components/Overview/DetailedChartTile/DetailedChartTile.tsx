import React from 'react'
import { Tile } from '../../shared/Tile/Tile'
import { DetailedChart } from '../../shared/charts/detailedChart/DetailedChart'
import { IFSColor } from '../../../consts/colors';



export const DetailedChartTile = () => {

    const content = <DetailedChart />

    return (
        <Tile
            title={"SYSTEM BY PERIOD"}
            content={content}
            backgroundColor={IFSColor.white}
            size={4}
        ></Tile>
    )
}
