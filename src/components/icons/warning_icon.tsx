import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const WarningIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--warning`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M3.34,29H28.66L16,3.83ZM17.6,26.74a2,2,0,0,1-1.54.55,2.14,2.14,0,0,1-1.56-.55,2.24,2.24,0,0,1-.57-1.41,2.19,2.19,0,0,1,2.13-2.25,2,2,0,0,1,1.56.56,2.19,2.19,0,0,1,.53,1.55A2.07,2.07,0,0,1,17.6,26.74Zm0-5.06H14.39l-.5-9.83h4.22Z" fill="none" />
            <path d="M18.09,1.31a2.32,2.32,0,0,0-4.18,0L.27,28.44A2.5,2.5,0,0,0,.11,30.3a2.38,2.38,0,0,0,1.16,1.42A2.33,2.33,0,0,0,2.36,32H29.64A2.4,2.4,0,0,0,32,29.57a2.49,2.49,0,0,0-.27-1.14ZM3.34,29,16,3.83,28.66,29Z" />
            <polygon points="14.39 21.68 17.61 21.68 18.11 11.85 13.89 11.85 14.39 21.68" />
            <path d="M16.06,23.08a2.19,2.19,0,0,0-2.13,2.25,2.24,2.24,0,0,0,.57,1.41,2.14,2.14,0,0,0,1.56.55,2,2,0,0,0,1.54-.55,2.07,2.07,0,0,0,.55-1.55,2.19,2.19,0,0,0-.53-1.55A2,2,0,0,0,16.06,23.08Z" />
        </svg>
    </div>
);

WarningIcon.displayName = 'WarningIcon';

export default IconWrapper(WarningIcon);
