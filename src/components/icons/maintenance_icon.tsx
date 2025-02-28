import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const MaintenanceIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--maintenance`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
            <path d="M40.922 14.596a1.256 1.256 0 0 0-1.22-.969H17.115v-1.255H20.9c.692 0 1.233-.555 1.233-1.248V7.36c0-.693-.54-1.263-1.233-1.263H10.873c-.692 0-1.29.57-1.29 1.263v3.764c0 .692.598 1.248 1.29 1.248h3.73v1.255h-7.49c-.692 0-1.295.568-1.295 1.26v1.382c-2.51.583-5.013 3.117-5.013 6.146 0 3.03 2.503 5.563 5.013 6.146v1.382c0 .693.603 1.255 1.295 1.255H24.66c.692 0 1.238-.562 1.238-1.255V23.19l14.357-7.183c.52-.26.8-.845.666-1.412zm-28.828-5.99h7.53v1.256h-7.53V8.607zM3.31 22.417c0-1.634 1.252-3.014 2.507-3.533v7.065c-1.255-.52-2.507-1.9-2.507-3.533zm20.78-1.126c-.425.213-.702.65-.702 1.125v6.273H8.33v-12.55h26.064L24.091 21.29zM39.206 24.182c-.471-.644-1.55-.644-2.02 0-.46.627-2.75 3.855-2.75 5.875 0 2.012 1.686 3.65 3.76 3.65 2.073 0 3.76-1.638 3.76-3.65 0-2.02-2.29-5.248-2.75-5.875zm-1.01 7.015c-.691 0-1.254-.511-1.254-1.14 0-.55.553-1.71 1.252-2.866.67 1.113 1.255 2.3 1.255 2.866 0 .629-.562 1.14-1.253 1.14z" />
        </svg>
    </div>
);

MaintenanceIcon.displayName = 'MaintenanceIcon';

export default IconWrapper(MaintenanceIcon);
