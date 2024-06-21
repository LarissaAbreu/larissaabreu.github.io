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

        <p>Fui organizadora do Hacktoberfest-SP (grupo criado para compartilhar conhecimentos sobre desenvolvimento e o mundo open source afim de ajudar as pessoas desenvolvedoras e não desenvolvedoras a se prepararem para o <a href="https://hacktoberfest.digitalocean.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a> - comemoração do software de código aberto, que ocorre em Outubro, onde temos a oportunidade de contribuir com projetos que mais amamos e/ou de apenas melhorar nossas habilidades técnicas e não técnicas).</p>

        <p>Já compartilhei meus conhecimentos em forma de palestras e cursos. Acredito que o compartilhamento de conhecimentos é uma coisa essencial pois também é uma forma de aprendizado. Gosto bastante de causas com foco no empoderamento de minorias e no auxílio de pessoas carentes que queiram migrar para a área de desenvolvimento ou que queiram apenas conhecer um pouco melhor sobre "nosso mundo".</p>

        <p>Também sou apaixonada por dançar e cantar, se eu pudesse eu cantava o tempo todo!</p>

        <p>Para relaxar eu gosto de assistir filmes, séries e jogar vídeogame. Inclusive eu tenho um <a href="https://www.twitch.tv/thesweetlari" target="_blank" rel="noopener noreferrer">canal na Twitch</a> onde faço lives jogando e, de vez em quando, programando. Ficarei bem feliz em te ver por lá um dia!</p>
      </S.ListWrapperContent>
    </S.ListWrapper>
  </Layout>
);

export default AboutPage;
