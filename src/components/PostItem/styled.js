import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  &:hover {
    color: var(--highlight);
  };
`;

export const PostItemWrapper = styled.article`
  align-items: center;
  border: 1px dotted var(--borders);
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 1px 5px 0 rgba(0, 0, 0, 0.12),
              0 3px 1px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 30px 20px;
  width: 100%;
  margin: 18px 0;

  &:hover {
    box-shadow: 0 2px 14px 0 var(--color-shadow),
                0 1px 10px 0 var(--color-shadow),
                0 3px 2px -2px var(--color-shadow);
  };
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const PostItemDate = styled.time`
  font-size: 1rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.7rem;
  font-weight: 700;
  margin: 10px 0;
`;

export const PostItemDescription = styled.p`
  font-size: 1.3rem;
`;

export const PostItemTagGroup = styled.div`
  align-items: center;
  display: flex;
  font-size: 1rem;
  font-weight: 300;
  text-transform: lowercase;
  margin-top: 20px;
`;

export const PostItemTagIcon = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 7px;
`;

export const PostItemTagName = styled.span`
  font-weight: 300;
  text-transform: lowercase;
`;
