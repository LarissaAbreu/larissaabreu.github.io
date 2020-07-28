import React from 'react';
import SEO from '../components/seo';

import Layout from '../components/Layout';
import * as S from '../components/ListWrapper/styled';

import TalksList from '../components/TalksList';
import talks from '../database/talks';

const TalksPage = () => (
  <Layout>
    <SEO title="Talks"></SEO>
    <S.ListWrapper>
      <S.ListWrapperContent>
        <h1>Talks</h1>
      </S.ListWrapperContent>
      {talks.map((talk, i) => (
        <TalksList
          key={i}
          event={talk.event}
          date={talk.date}
          name={talk.name}
          attendance={talk.attendance}
          local={talk.local}
          slides={talk.slides}
          video={talk.video}
        />
      ))}
    </S.ListWrapper>
  </Layout>
);

export default TalksPage;
