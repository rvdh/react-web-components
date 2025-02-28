import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const BuildPlateIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--build_plate`}>
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M.4,23.7l15.3,7.7h.6l15.3-7.7a.6.6,0,0,0,.3-.9.6.6,0,0,0-.8-.3L16,30.1.9,22.5a.6.6,0,0,0-.8.3A.6.6,0,0,0,.4,23.7Z" />
            <path d="M.4,19.9l15.3,7.6h.6l15.3-7.6a.6.6,0,0,0,.3-.9.6.6,0,0,0-.8-.3L16,26.2.9,18.7a.6.6,0,0,0-.8.3A.6.6,0,0,0,.4,19.9Z" />
            <path d="M.4,14.7l15.3,7.7h.6l15.3-7.7a.5.5,0,0,0,.3-.8.6.6,0,0,0-.8-.3L16,21.1.9,13.6a.6.6,0,0,0-.8.3A.5.5,0,0,0,.4,14.7Z" />
            <path d="M31.3,8.3,16.5,1.5a1.7,1.7,0,0,0-1,0L.7,8.3a1.2,1.2,0,0,0,0,2.2l14.8,6.8h1l14.8-6.8a1.2,1.2,0,0,0,0-2.2ZM16,14.8,4.2,9.4,16,4,27.8,9.4Z" />
        </svg>
    </div>
);

BuildPlateIcon.displayName = 'BuildPlateIcon';

export default IconWrapper(BuildPlateIcon);
