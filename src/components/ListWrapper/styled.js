import styled from 'styled-components';

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapperContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: justify;
  color: var(--texts);
  flex-direction: column;

  & h1 {
    font-size: 64px;
    margin: 35px 0;
    font-family: 'Merienda One';
  };

  & p {
    align-self: flex-start;
    margin: 18px 0;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;

    & a {
      border-bottom: 1px dashed var(--highlight);
      color: var(--highlight);
      text-decoration: none;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.8;
      };
    };
  };
`;
