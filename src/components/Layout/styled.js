import styled from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background);
`;

export const LayoutMain = styled.main`
  min-height: calc(100vh - 189px);
  transition: background, color 0.5s;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 60px;

  ${media.lessThan("large")`
    padding: 0 10px;
    margin-top: 130px;
  `}
`;
