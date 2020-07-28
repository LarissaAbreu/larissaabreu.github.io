import React from 'react';
import MenuLinks from '../MenuLinks';

import getThemeColor from '../../utils/getThemeColor';

import Avatar from '../Avatar';
import * as S from './styled';

const Profile = () => {

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        to="/"
        cover
        direction="bottom"
        bg={getThemeColor()}
        duration={.7}
      >
        <Avatar />
      </S.ProfileLink>
      <MenuLinks />
    </S.ProfileWrapper>
  );
};

export default Profile;
