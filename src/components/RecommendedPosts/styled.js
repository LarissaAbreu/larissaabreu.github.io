import styled from 'styled-components';
import media from 'styled-media-query';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const RecommendedWrapper = styled.section`
  border-top: 1px solid var(--borders);
  display: flex;
`;

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  color: var(--texts);
  display: flex;
  padding: 16px 0;
  text-decoration: none;
  transition: background 0.5s;
  width: 100%;

  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    color: var(--highlight);
  };

  &.next {
    justify-content: flex-end;
  };

  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  };

  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  };
`;
