import React from 'react';
import SocialLinks from '../SocialLinks';

// import getThemeColor from '../../utils/getThemeColor';

// import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';

import * as S from './styled';

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterMain>
      <S.FooterGroup>
        <SocialLinks />
        {/* <S.FooterLink
          to='/search/'
          title='Pesquisar'
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
        >
          <S.FooterItem>
            <Search />
          </S.FooterItem>
        </S.FooterLink> */}
      </S.FooterGroup>
      <S.FooterGroup>
        <S.FooterItem>
          Feito com muito <S.Heart title="amor" />
        </S.FooterItem>
      </S.FooterGroup>
    </S.FooterMain>
  </S.FooterWrapper>
);

export default Footer;
