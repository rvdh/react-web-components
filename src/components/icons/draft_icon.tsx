import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const DraftIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--draft`}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M12.83,28.83H8a3,3,0,0,1-3-3V6A3,3,0,0,1,8,3H21.91a3,3,0,0,1,3,3v8.89a1.49,1.49,0,0,0,1.45,1.49h0a1.5,1.5,0,0,0,1.54-1.49V6a6,6,0,0,0-6-6H8A6,6,0,0,0,2,6V25.85a6,6,0,0,0,6,6h4.86a1.49,1.49,0,0,0,1.49-1.38h0A1.5,1.5,0,0,0,12.83,28.83Z" />
            <path d="M29.2,19.88a2.6,2.6,0,0,0-.32-.26,2.7,2.7,0,0,0-1.62-.54,2.81,2.81,0,0,0-1.93.79l-6.84,6.81a.39.39,0,0,0-.06.11l-.92,3-.57,1.85a.26.26,0,0,0,.06.24.27.27,0,0,0,.18.08l5.09-1.4a.24.24,0,0,0,.11-.06l.74-.73,2.75-2.75,3-3,.32-.32A2.72,2.72,0,0,0,29.2,19.88Z" />
            <path d="M22.91,12.25a1,1,0,0,0-1-1H8a1,1,0,1,0,0,2H21.91A1,1,0,0,0,22.91,12.25Z" />
            <path d="M8,16.23a1,1,0,0,0,0,2h8.47a1,1,0,0,0,0-2Z" />
            <path d="M21.91,6.29H8a1,1,0,0,0,0,2H21.91a1,1,0,1,0,0-2Z" />
        </svg>
    </div>
);

DraftIcon.displayName = 'DraftIcon';

export default IconWrapper(DraftIcon);
