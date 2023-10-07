import React, { useContext } from 'react';
import Flag from 'react-world-flags';
import { ActionType, DataContext } from '../../context';

export const LanguagePicker = ({ isTop }: { isTop?: boolean }) => {
    const { dispatch } = useContext(DataContext);
    return (
        <div className={`absolute bottom-5 right-5 z-20 flex w-[72px] justify-between ${isTop ? 'top-5 left-5' : ''}`}>
            <div
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE_LANG,
                        payload: 'en',
                    });
                }}
                className="cursor-pointer"
            >
                <Flag code="us" height="28" width="28" />
            </div>
            <div
                onClick={() => {
                    dispatch({
                        type: ActionType.UPDATE_LANG,
                        payload: 'pl',
                    });
                }}
                className="cursor-pointer"
            >
                <Flag code="pl" height="28" width="28" />
            </div>
        </div>
    );
};
