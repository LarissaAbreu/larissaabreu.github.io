import styled from 'styled-components';
import media from 'styled-media-query';

export const PaginationWrapper = styled.div`
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 16px;
  max-width: 800px;

  ${media.lessThan("large")`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: var(--highlight);
    };
  };
`;
