import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const UMS5PrinterIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--ums5-printer`}>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58">
            <path d="M33.83,12.33c-.1.2-.1.2-.2.2H24.37c-.1,0-.1,0-.2-.2L22.44,8.06a.22.22,0,0,1,.2-.2H35.36a.22.22,0,0,1,.2.2Z" />
            <path d="M35.36,7.86H22.64a.22.22,0,0,0-.2.2l1.73,4.27c.1.2.1.2.2.2h9.26c.1,0,.1,0,.2-.2l1.73-4.27A.22.22,0,0,0,35.36,7.86Z" />
            <path d="M0,0V58H3.75a2.85,2.85,0,0,1,2.12-1H52.13a2.85,2.85,0,0,1,2.12,1H58V0ZM37.5,53.82a1.5,1.5,0,0,1-1.5,1.5H22a1.5,1.5,0,0,1-1.5-1.5v-4a1.5,1.5,0,0,1,1.5-1.5H36a1.5,1.5,0,0,1,1.5,1.5Zm15.63-18.5V47a2.83,2.83,0,0,1-2.83,2.84H38.5v0a2.5,2.5,0,0,0-2.5-2.5H22a2.5,2.5,0,0,0-2.5,2.5v0H7.7A2.83,2.83,0,0,1,4.87,47V5.49a.65.65,0,0,1,.6-.61H52.53a.65.65,0,0,1,.6.61Z" />
        </svg>
    </div>
);

UMS5PrinterIcon.displayName = 'UMS5PrinterIcon';

export default IconWrapper(UMS5PrinterIcon);
