import React from 'react';
import { Popper, PopperProps } from '@material-ui/core';


export interface IfsPopperProps {
    isOpen: boolean;
    popperProps?: Partial<PopperProps>;
}

export const IfsPopper: React.FunctionComponent<IfsPopperProps> = ({ isOpen, popperProps, children }) => {
    return (
        <Popper
            placement='bottom-start'
            {...popperProps}
            open={isOpen}
        >
            {children}
        </Popper>
    )
}