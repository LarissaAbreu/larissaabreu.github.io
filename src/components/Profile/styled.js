import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
`;
