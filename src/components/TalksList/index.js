import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const TalksList = ({ event, date, name, attendance, local, slides, video }) => (
  <S.TalkItem>
    <S.TalkItemInfo>

      <S.TalkItemTop>
        <S.TalkItemEvent>{ event } • </S.TalkItemEvent>
        <S.TalkItemDate>{ date }</S.TalkItemDate>
      </S.TalkItemTop>

      <S.TalkItemTitle>{ name }</S.TalkItemTitle>

      <S.TalkItemAttendance>Attendance: ≈ { attendance }</S.TalkItemAttendance>

      <S.TalkItemLocal>{ local }</S.TalkItemLocal>

    </S.TalkItemInfo>

    <S.TalkItemLinks>

      { video && (
        <S.TalkItemLink href={video} target="_blank">Vídeo</S.TalkItemLink>
      )}

      { slides && (
          <S.TalkItemLink href={slides} target="_blank">Slides</S.TalkItemLink>
      )}

    </S.TalkItemLinks>
    
  </S.TalkItem>
);

TalksList.propTypes = {
  event: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string.isRequired,
  local: PropTypes.string.isRequired,
  slides: PropTypes.string,
  video: PropTypes.string,
};

export default TalksList;
