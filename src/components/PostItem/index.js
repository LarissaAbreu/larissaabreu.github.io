import React from 'react';
import PropTypes from 'prop-types';

import getThemeColor from '../../utils/getThemeColor';

import { Tag } from 'styled-icons/boxicons-regular/Tag';

import * as S from './styled';

const PostItem = ({ slug, category, date, timeToRead, title, description }) => (
  <S.PostItemLink
    to={slug}
    cover
    direction="right"
    bg={getThemeColor()}
    duration={0.6}
    title={title}
  >
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date} • {timeToRead} min de leitura</S.PostItemDate>

        <S.PostItemTitle>{title}</S.PostItemTitle>

        <S.PostItemDescription>{description}</S.PostItemDescription>
        <S.PostItemTagGroup>
          <S.PostItemTagIcon>
            <Tag />
          </S.PostItemTagIcon>

          <S.PostItemTagName>{category}</S.PostItemTagName>
        </S.PostItemTagGroup>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
);

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostItem;
