import React from 'react'
import { Colors } from '../../../consts/colors'
import { Button } from '../../shared/Button'

export const Toolbar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Button flexBasis={`${100 / 3}%`} value='Database: IFS Database' />
            <Button
                flexBasis={`${100 / 6}%`}
                value='Database details'
                backgroundColor={Colors.white}
                color={Colors.mainBlue}
            />
            <Button
                flexBasis={`${100 / 6}%`}
                value='Filters: Active variant'
                backgroundColor={Colors.tileBlue1}
                color={Colors.mainBlue}
            />
            <Button flexBasis={`${100 / 6}%`} value='Apply filters' />
            <Button
                flexBasis={`${100 / 12}%`}
                value='Generate file'
                backgroundColor={Colors.white}
                color={Colors.mainBlue}
            />
            <Button
                flexBasis={`${100 / 12}%`}
                value='View 11/11'
                backgroundColor={Colors.disabled}
                color={Colors.disabledText}
            />
        </div>
    )
}