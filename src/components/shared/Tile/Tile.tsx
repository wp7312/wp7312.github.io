import { TileStyles, StyledDiv, TitleWrapper, LabelWrapper, ToolsWrapper, ContentWrapper, StyledMarginDiv } from './Tile.styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicElementStatus, setDynamicElement } from '../../../store/reducers/dynamicElements/dynamicElements';
import { RootState } from '../../../store/reducers/reducers';

export interface TileProps {
    title: string;
    icon?: string,
    size?: number,
    backgroundColor?: string,
    content: JSX.Element
}

export type StyledDivProps = TileProps & {collapsed?: boolean};

export const Tile = (props: TileProps) => {
    const iconClassName = `fa fa-${props.icon}`;
    const dispatch = useDispatch();
    const dynamicElements = useSelector((state: RootState) => state.dynamicElements.entities);
    const collapsed = dynamicElements[props.title] === DynamicElementStatus.COLLAPSED;
    const closed = dynamicElements[props.title] === DynamicElementStatus.CLOSED;

    const setDynamicsElementStatus = (status: DynamicElementStatus) => {
        dispatch(setDynamicElement({title: props.title, status: status}))
        console.log(dynamicElements)
    };

    return (
        <>
            {
                !closed &&
                <TileStyles size={1} {...props}>
                    <StyledMarginDiv>
                        <StyledDiv backgroundColor={'white'} {...{...props, collapsed: collapsed}}>
                            <TitleWrapper>
                                <LabelWrapper>
                                    {props.title}
                                    <i className={iconClassName}/>
                                </LabelWrapper>
                                <ToolsWrapper>
                                    <i className={`fa fa-chevron-${collapsed ? 'down' : 'up'}`}
                                       onClick={() => setDynamicsElementStatus(DynamicElementStatus.COLLAPSED)}/>
                                    <i className='fas fa-times'
                                       onClick={() => setDynamicsElementStatus(DynamicElementStatus.CLOSED)}/>
                                </ToolsWrapper>
                            </TitleWrapper>
                            <ContentWrapper>
                                {!collapsed && props.content}
                            </ContentWrapper>
                        </StyledDiv>
                    </StyledMarginDiv>
                </TileStyles>
            }
        </>
    )
}
