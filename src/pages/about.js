import React from 'react';

import Layout from '../components/Layout';
import * as S from '../components/ListWrapper/styled';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="Sobre"></SEO>
    <S.ListWrapper>
      <S.ListWrapperContent>
        <h1>Sobre mim</h1>

        <p>Oie! Me chamo Larissa Abreu, sou de São Paulo (Brasil) e sou desenvolvedora front-end. Sou apaixonada por acessibilidade na web, Web Components e pela comunidade de desenvolvimento em si.</p>

        <p>Sou organizadora do <a href="https://www.meetup.com/pt-BR/hacktoberfest-sp/" target="_blank" rel="noopener noreferrer">Hacktoberfest-SP meetup</a> (grupo criado para compartilhar conhecimentos sobre desenvolvimento e o mundo open source afim de ajudar as pessoas a se prepararem para o <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a> - comemoração do software de código aberto, que ocorre em Outubro, onde temos a oportunidade de contribuir com projetos que mais amamos e/ou de apenas melhorar nossas habilidades técnicas e não técnicas).</p>

        <p>Também sou apaixonada por dançar e cantar, se eu pudesse eu cantava o tempo todo!</p>

        <p>Para relaxar eu gosto de assistir filmes, séries e jogar vídeogame. Inclusive eu tenho um <a href="https://www.twitch.tv/thesweet_lari" target="_blank" rel="noopener noreferrer">canal na Twitch</a> onde faço lives jogando e programando. Ficarei bem feliz em te ver por lá um dia!</p>
      </S.ListWrapperContent>
    </S.ListWrapper>
  </Layout>
);

export default AboutPage;
