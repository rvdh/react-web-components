import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const TransferIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--transfer`}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <g>
                <path d="M14,15H8.4l1.3-1.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3,3c-0.1,0.1-0.2,0.2-0.2,0.3C5,15.7,5,15.9,5,16
                    s0,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3l3,3C8.5,19.9,8.7,20,9,20s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L8.4,17H14c0.6,0,1-0.4,1-1
                    S14.6,15,14,15z"
                />
                <path d="M19.9,8.6c-0.1-0.1-0.1-0.2-0.2-0.3l-3-3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L16.6,8H11c-0.6,0-1,0.4-1,1
                    s0.4,1,1,1h5.6l-1.3,1.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3-3c0.1-0.1,0.2-0.2,0.2-0.3
                    C20,9.1,20,8.9,19.9,8.6z"
                />
                <path d="M12.5,0C5.6,0,0,5.6,0,12.5C0,19.4,5.6,25,12.5,25S25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z M12.5,23
                    C6.7,23,2,18.3,2,12.5S6.7,2,12.5,2C18.3,2,23,6.7,23,12.5S18.3,23,12.5,23z"
                />
            </g>
        </svg>
    </div>
);

TransferIcon.displayName = 'TransferIcon';

export default IconWrapper(TransferIcon);
