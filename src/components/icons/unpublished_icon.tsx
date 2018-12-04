import * as React from 'react';
import { IconWrapper, IconProps } from './icon_wrapper';

const UnpublishedIcon: React.StatelessComponent<IconProps> = ({ className }): JSX.Element => (
  <div className={`${className} icon--unpublished`}>
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M8.5,14a7.34,7.34,0,0,1,.84-3.43A19.46,19.46,0,0,0,3.09,16a20.79,20.79,0,0,0,4.38,4.28L9.7,18.06A7.42,7.42,0,0,1,8.5,14Z" fill="none" />
      <path d="M23.5,14A7.5,7.5,0,0,1,16,21.5a7.36,7.36,0,0,1-1.16-.1l-1.48,1.48a13.74,13.74,0,0,0,2.64.26c4.78,0,9.36-2.53,12.91-7.14a20.79,20.79,0,0,0-4.38-4.28L23.4,12.84A7.36,7.36,0,0,1,23.5,14Z" fill="none" />
      <path d="M31.47,14.42a24,24,0,0,0-4.8-4.85l-2.14,2.15A20.79,20.79,0,0,1,28.91,16c-3.55,4.61-8.13,7.14-12.91,7.14a13.74,13.74,0,0,1-2.64-.26L10.9,25.34a16.63,16.63,0,0,0,5.1.8c5.82,0,11.32-3,15.47-8.55A2.66,2.66,0,0,0,31.47,14.42Z" />
      <path d="M7.47,20.28A20.79,20.79,0,0,1,3.09,16a19.46,19.46,0,0,1,6.25-5.43A7.34,7.34,0,0,0,8.5,14a7.42,7.42,0,0,0,1.2,4.06L16.79,11A1.21,1.21,0,0,1,18.16,9.6l.48-.48L20.06,7.7l1-1a16.63,16.63,0,0,0-5.1-.8c-5.82,0-11.32,3-15.47,8.55a2.66,2.66,0,0,0,0,3.17,24,24,0,0,0,4.8,4.85Z" />
      <path d="M16,21.5A7.5,7.5,0,0,0,23.5,14a7.36,7.36,0,0,0-.1-1.16L14.84,21.4A7.36,7.36,0,0,0,16,21.5Z" />
      <polygon points="12.69 20.72 22.72 10.69 22.78 10.63 24.98 8.43 27.36 6.06 25.94 4.64 23.13 7.45 21.58 9 20.84 9.75 19.91 10.68 17.86 12.73 11 19.58 9.22 21.37 7.02 23.57 4.64 25.94 6.06 27.36 8.87 24.55 11.16 22.25 12.69 20.72" />
    </svg>
  </div>
);

UnpublishedIcon.displayName = 'UnpublishedIcon';

export default IconWrapper(UnpublishedIcon);
