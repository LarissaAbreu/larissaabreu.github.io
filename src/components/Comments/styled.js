import styled from 'styled-components';
import media from 'styled-media-query';

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;
  color: var(--texts);

  ${media.lessThan("large")`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}

  iframe[src*="ads-iframe"] {
    display: none;
  };

  #disqus_thread {
    a {
      color: var(--texts) !important;
    };
  };
`;

export const CommentsTitle = styled.h2`
  color: var(--texts);
  font-size: 2.1rem;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`;
