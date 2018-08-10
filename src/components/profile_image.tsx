import * as React from 'react';

import CircleIcon from './circle_icon';
import ProfileIcon from './icons/profile_icon';
import Image from './image';

export interface CircleIconProps {
  size: string;
  imageURL?: string;
}


export const ProfileImage: React.StatelessComponent<CircleIconProps> = ({ size, imageURL }) => (
  <div className="profile-image">
    {imageURL &&
      <Image src={imageURL} size={size} />
    }
    {!imageURL &&
      <CircleIcon style="primary" disabled size={size} >
        <ProfileIcon />
      </CircleIcon>
    }
  </div>
);

ProfileImage.displayName = "ProfileImage";

export default ProfileImage;