import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const UM3XPrinterIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--um3x-printer`}>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.16 58">
            <path id="Shape" d="M18.4,12.2h9.26c.1,0,.1,0,.2-.2l1.73-4.27a.22.22,0,0,0-.2-.2H16.67a.22.22,0,0,0-.2.2L18.2,12C18.3,12.2,18.3,12.2,18.4,12.2Z" />
            <path id="Shape-2" data-name="Shape" d="M38.33,45.08H7.72a.48.48,0,0,0-.5.51V47a.48.48,0,0,0,.5.51H38.44a.48.48,0,0,0,.5-.51V45.59A.64.64,0,0,0,38.33,45.08Z" />
            <path id="Shape-3" data-name="Shape" d="M0,0V58H3.76a2.86,2.86,0,0,1,2.13-1H40.27a2.86,2.86,0,0,1,2.13,1h3.76V0ZM41.28,35.32V47a2.83,2.83,0,0,1-2.84,2.84H7.72A2.84,2.84,0,0,1,4.88,47V5.49a.65.65,0,0,1,.61-.61H40.67a.65.65,0,0,1,.61.61Z" />
        </svg>
    </div>
);

UM3XPrinterIcon.displayName = 'UM3XPrinterIcon';

export default IconWrapper(UM3XPrinterIcon);
