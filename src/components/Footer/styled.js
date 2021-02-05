import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

export const FooterWrapper = styled.footer`
  align-items: center;
  background: var(--mediumBackground);
  border-top: 1px solid var(--bordersLight);
  padding: 16px;
  width: 100%;
  transition: background 0.5s;
`;

export const FooterMain = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterGroup = styled.div`
  display: flex;
`;

export const FooterItem = styled.span`
  color: var(--texts);
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;

  &.light {
    color: #d4d400;
  }

  ${media.lessThan("large")`
    padding: 0;
  `}
`;

const pulse = keyframes`
  from { transform: rotate(-135deg) scale(1); }
  to { transform: rotate(-135deg) scale(1.2); }
`;

export const Heart = styled.span`
  animation: ${pulse} .5s infinite alternate ease-in;
  background-color: var(--highlight);
  display: inline-block;
  height: 10px;
  margin: 0 15px;
  position: relative;
  width: 10px;

  &::before {
    background-color: var(--highlight);
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    top: 0;
    width: 10px;
  };

  &::after {
    background-color: var(--highlight);
    border-radius: 50%;
    content: "";
    height: 10px;
    left: 0;
    position: absolute;
    top: 50%;
    width: 10px;
  };
`;
