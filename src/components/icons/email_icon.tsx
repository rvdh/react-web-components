import * as React from 'react';
import {IconWrapper, IconProps} from './icon_wrapper';

const EmailIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--email`}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <path d="M24.39,3.71A3,3,0,0,0,22,2.5H3A3,3,0,0,0,.61,3.71,3,3,0,0,0,0,5.5v14a3,3,0,0,0,3,3H22a3,3,0,0,0,3-3V5.5A3,3,0,0,0,24.39,3.71ZM23,19.5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V7.17L5.94,10a6.49,6.49,0,0,1,1-1.76L2.24,4.88A1,1,0,0,1,3,4.5H22a1,1,0,0,1,.76.38L18.3,8.09a5.8,5.8,0,0,1,.94,1.79L23,7.17Z" />
            <path d="M17.48,8.68A6,6,0,0,0,16.84,8a5.85,5.85,0,0,0-4.11-1.52A6.13,6.13,0,0,0,8.32,8.18a6.06,6.06,0,0,0-.59.66,5.77,5.77,0,0,0-1,1.78A6.33,6.33,0,0,0,6.5,12.5a5.93,5.93,0,0,0,1.73,4.27,6.22,6.22,0,0,0,4.67,1.78,8.73,8.73,0,0,0,3.48-.73.73.73,0,0,0-.29-1.41.79.79,0,0,0-.29.06,7.43,7.43,0,0,1-2.9.64,4.45,4.45,0,0,1-3.49-1.38,4.66,4.66,0,0,1-1.23-3.22,5.71,5.71,0,0,1,.07-.84A4.46,4.46,0,0,1,9,9.76a4.51,4.51,0,0,1,.48-.6,4.39,4.39,0,0,1,3.25-1.34,4.36,4.36,0,0,1,3,1.1,4.46,4.46,0,0,1,.55.61,3.61,3.61,0,0,1,.65,2c0,.06,0,.11,0,.17a3.18,3.18,0,0,1-.56,1.91,1.51,1.51,0,0,1-1.17.76c-.21,0-.32-.12-.32-.35a5.67,5.67,0,0,1,0-.67l0-.43.33-2.7.08-.63H13.84l-.1.37a2.06,2.06,0,0,0-1.33-.5,2.54,2.54,0,0,0-1.95.91,2.43,2.43,0,0,0-.2.28,3.46,3.46,0,0,0-.61,2v0A3.4,3.4,0,0,0,10.37,15a2.19,2.19,0,0,0,1.74.85,2,2,0,0,0,1.55-.76,1.6,1.6,0,0,0,1.43.73,3,3,0,0,0,2.4-1.21,4.4,4.4,0,0,0,1-2.91,4.85,4.85,0,0,0-.14-1.16A4.7,4.7,0,0,0,17.48,8.68Zm-5.82,2.86a1,1,0,0,1,1.62-.11.62.62,0,0,1,.12.19,1.25,1.25,0,0,1,.22.74,2.11,2.11,0,0,1-.18.84,2,2,0,0,1-.24.46,1.23,1.23,0,0,1-1,.56.72.72,0,0,1-.63-.41,1.17,1.17,0,0,1-.05-.11,2.17,2.17,0,0,1-.2-.93,2.1,2.1,0,0,1,.3-1.14S11.64,11.57,11.66,11.54Z" />
        </svg>
    </div>
)

EmailIcon.displayName = "EmailIcon";

export default IconWrapper(EmailIcon);
