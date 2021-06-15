import { PopperProps } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonProps } from '../Button'
import { IfsPopper } from '../IfsPopper/IfsPopper';


export interface PopperableButtonProps extends ButtonProps {
    defaultOpen?: boolean;
    popperProps?: Partial<PopperProps>;
}

export const PopperableButton: React.FunctionComponent<PopperableButtonProps> = ({ defaultOpen, children, popperProps, ...buttonProps }) => {
    const [isOpen, setIsOpen] = useState<boolean>(!!defaultOpen);
    
    const [anchorElement, setAnchorElement] = useState<HTMLButtonElement>();
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (ref.current) setAnchorElement(ref.current);
    }, [ref.current]);

    return (
        <>
            <Button ref={ref} {...buttonProps} onClick={() => setIsOpen(!isOpen)} />
            {anchorElement &&
                <IfsPopper {...popperProps} isOpen={isOpen} popperProps={{ anchorEl: anchorElement }} >
                    {children}
                </IfsPopper>
            }
        </>
    )
}