import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DynamicElementStatus, selectDynamicElement, setDynamicElement } from '../../../store/reducers/dynamicElements/dynamicElements';

export const ClosedTilesList = () => {
    const dynamicElements = useSelector(selectDynamicElement);
    const dispatch = useDispatch();

    const setVisible = (title: string) => {
        dispatch(setDynamicElement({title: title, status: DynamicElementStatus.VISIBLE}))
    }

    return (
        <>
            {
                Object.keys(dynamicElements).filter(title => dynamicElements[title] === DynamicElementStatus.CLOSED)
                    .map(dynamicElementTitle => (
                            <div key={dynamicElementTitle}
                                 onClick={() => setVisible(dynamicElementTitle)}>{dynamicElementTitle}
                            </div>
                        )
                    )
            }
        </>
    )
}
