import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../consts/colors'
import { Button } from '../../shared/Button'

const ToolbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Toolbar = () => {
    return (
        <ToolbarWrapper>
            <Button size={2} value='Database: IFS Database' />
            <Button
                size={1}
                value='Database details'
                backgroundColor={Colors.white}
                color={Colors.mainBlue}
            />
            <Button
                size={1}
                value='Filters: Active variant'
                backgroundColor={Colors.tileBlue1}
                color={Colors.mainBlue}
            />
            <Button size={1} value='Apply filters' />
            <Button
                size={0.5}
                value='Generate file'
                backgroundColor={Colors.white}
                color={Colors.mainBlue}
            />
            <Button
                size={0.5}
                value='View 11/11'
                backgroundColor={Colors.disabled}
                color={Colors.disabledText}
            />
        </ToolbarWrapper>
    )
}