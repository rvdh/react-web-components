import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const RequiredIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
    <div className={`${className} icon--required`}>
        <svg viewBox="0 0 36 36" width="36" height="36">
            <g>
                <path d=" M 17.887 36 L 18.159 36 C 19.669 36 20.903 34.766 20.903 33.256 L 20.903 2.744 C 20.903 1.234 19.669 0 18.159 0 L 17.887 0 C 16.378 0 15.143 1.234 15.143 2.744 L 15.143 33.256 C 15.143 34.766 16.378 36 17.887 36 Z " />
                <path d=" M 33.544 27.118 L 33.68 26.879 C 34.433 25.571 33.981 23.885 32.677 23.132 L 6.25 7.876 C 4.942 7.123 3.256 7.575 2.503 8.879 L 2.367 9.114 C 1.614 10.422 2.066 12.108 3.37 12.861 L 29.797 28.124 C 31.101 28.877 32.791 28.425 33.544 27.118 Z " />
                <path d=" M 33.68 9.118 L 33.544 8.879 C 32.791 7.571 31.105 7.119 29.797 7.876 L 3.37 23.132 C 2.062 23.885 1.61 25.571 2.367 26.879 L 2.503 27.118 C 3.256 28.425 4.942 28.877 6.25 28.12 L 32.677 12.864 C 33.985 12.111 34.433 10.425 33.68 9.118 Z " />
            </g>
        </svg>
    </div>
);

RequiredIcon.displayName = 'RequiredIcon';

export default IconWrapper(RequiredIcon);
