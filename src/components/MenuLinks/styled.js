import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export const MenuLinksWrapper = styled.nav`
  padding: 5px;
`;

export const MenuLinksList = styled.ul`
  display: flex;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: .5rem 0;
  margin-left: 20px;

  .active {
    color: var(--highlight);
  }
`;

export const MenuLinksLink = styled(AniLink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  font-weight: 400;

  &:hover {
    color: var(--highlight);
  }
`;
