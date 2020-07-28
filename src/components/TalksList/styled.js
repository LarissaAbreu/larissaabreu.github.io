import styled from 'styled-components';
import media from 'styled-media-query';

export const TalkItem = styled.article`
  border: 1px dotted var(--borders);
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 1px 5px 0 rgba(0, 0, 0, 0.12),
              0 3px 1px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 25px 20px;
  width: 100%;
  max-width: 800px;
  margin: 18px 0;
  justify-content: space-between;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`;

export const TalkItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    margin-left: 0;
  `}
`;

export const TalkItemTop = styled.div`
  color: var(--highlight);
`;

export const TalkItemEvent = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

export const TalkItemDate = styled.time`
  font-size: 16px;
`;

export const TalkItemTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin: 10px 0;
`;

export const TalkItemAttendance = styled.span`
  font-size: 16px;
`;

export const TalkItemLocal = styled.span`
  font-size: 16px;
`;

export const TalkItemLinks = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: flex-end;

  ${media.lessThan("large")`
    align-self: none;
    margin-top: 15px;
  `}
`;

export const TalkItemLink = styled.a`
  text-decoration: none;
  color: var(--texts);
  padding: 12px 15px;;
  background-color: var(--mediumBackground);
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    color: var(--highlight);
    cursor: pointer;
    box-shadow: 3px 3px var(--highlight);
    transition: box-shadow .3s, transform .3s;
  };

  ${media.lessThan("large")`
    margin-left: 0;
    margin-right: 10px;
  `}
`;
