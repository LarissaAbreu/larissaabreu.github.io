import React from 'react';

import Layout from '../components/Layout';
import * as S from '../components/ListWrapper/styled';
import SEO from '../components/seo';

import Search from '../components/Search';

const SearchPage = () => (
  <Layout>
    <SEO title="Search"></SEO>
    <S.ListWrapper>
      <S.ListWrapperContent>
        <h1>Buscar</h1>
      </S.ListWrapperContent>
    </S.ListWrapper>
    <Search />
  </Layout>
);

export default SearchPage;
