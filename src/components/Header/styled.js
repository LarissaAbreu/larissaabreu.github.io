import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid var(--bordersLight);
  background: var(--mediumBackground);
  position: fixed;
  padding: 10px;
  width: 100%;
  z-index: 999;
  opacity: .97;
`;

export const HeaderMain = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("543px")`
    flex-direction: column-reverse;
  `}
`;

export const IconsRight = styled.div`
  display: flex;

  ${media.lessThan("543px")`
    margin-bottom: 5px;
  `}
`;

export const ChangeTheme = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 50px;
  width: 50px;
  padding: 10px;
  border-left: 1px dashed var(--texts);

  &.light {
    color: #b38500;

    &:hover {
      color: #ffbd00;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`;
