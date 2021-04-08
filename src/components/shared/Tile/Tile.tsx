import { TileStyles, StyledDiv, TitleWrapper, LabelWrapper, ToolsWrapper, CountersWrapper } from './Tile.styles';
import React from 'react';

export interface TileProps {
    title: string;
    icon?: string,
    flexGrow: string,
    backgroundColor: string,
    counters: JSX.Element
}

export const Tile = (props: TileProps) => {
    const iconClassName = `fa fa-${props.icon}`;

    return (
        <TileStyles {...props}>
            <StyledDiv {...props}>
                <TitleWrapper>
                    <LabelWrapper>
                        {props.title}
                        <i className={iconClassName}/>
                    </LabelWrapper>
                    <ToolsWrapper>
                        <i className="fa fa-chevron-down"/>
                        <i className="fas fa-times"/>
                    </ToolsWrapper>
                </TitleWrapper>
                <CountersWrapper>
                    {props.counters}
                </CountersWrapper>
            </StyledDiv>
        </TileStyles>
    )
}
