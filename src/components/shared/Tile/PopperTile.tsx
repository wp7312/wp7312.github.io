import React from "react"
import { DynamicElementStatus, setDynamicElement } from "../../../store/reducers/dynamicElements/dynamicElements"
import { StyledDiv } from "../Button"
import { TileProps } from "./Tile"
import { TitleWrapper, LabelWrapper, ToolsWrapper, ContentWrapper, StyledMarginDiv } from "./Tile.styles"



export const PopperTile: React.FunctionComponent<TileProps> = (props) => {

    const setDynamicsElementStatus = (status: DynamicElementStatus) => {
        dispatch(setDynamicElement({ title: props.title, status: status }))
    };

    return (
        <>
            <StyledMarginDiv>
                <StyledDiv size={props.size || 4} value={'dupa'} backgroundColor={'white'} {...{ ...props, collapsed: false }} >
                    <TitleWrapper>
                        <LabelWrapper>
                            {props.title}
                        </LabelWrapper>
                        <ToolsWrapper>
                            <i className='fas fa-times'
                                onClick={() => setDynamicsElementStatus(DynamicElementStatus.CLOSED)} />
                        </ToolsWrapper>
                    </TitleWrapper>
                    <ContentWrapper>
                        {props.children}
                    </ContentWrapper>
                </StyledDiv>
            </StyledMarginDiv>

        </>
    )
}

function dispatch(arg0: { payload: any; type: string }) {
    throw new Error("Function not implemented.")
}
