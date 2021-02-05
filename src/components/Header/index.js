import React, { useState, useEffect } from 'react';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb';

import * as S from './styled';
const Header = () => {
  const [theme, setTheme] = useState(null);

  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  const changeTheme = ( isDarkMode ? 'claro' : 'escuro' );

  return (
    <S.HeaderWrapper>
      <S.HeaderMain>
        <Profile />

        <S.IconsRight>
          <SocialLinks />
          <S.ChangeTheme
            title={`Mudar para o tema ${changeTheme}`}
            onClick={() => {
              window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
            }}
            className={theme}
          >
            <Light />
          </S.ChangeTheme>
        </S.IconsRight>
      </S.HeaderMain>
    </S.HeaderWrapper>
  )
};

export default Header;
