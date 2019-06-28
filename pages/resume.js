import Head from 'next/head';
import './resume.css';

function Home() {
  return (
    <main class="content">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="Description" content="Resume of Chiawen Chen" />
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <title>陳嘉文 履歷</title>
      </Head>

      <section class="intro">
        <div class="portrait">
          <img src="/static/portrait.jpg" alt="portrait" />
        </div>
        <h1>陳嘉文 Chiawen Chen</h1>
        <div>
          <p>
            Web application developer, frontend, backend, and db. Specialties: node.js, javascript,
            react, vue, express. I maintain eslint-plugin-jsdoc.
          </p>
          <p>
            <a href="https://github.com/golopot">github</a>
            <br />
            <a href="https://stackoverflow.com/users/3290397/golopot">stackoveflow</a>
          </p>
          <p>
            <div>golopot@gmail.com</div>
            <div>Taipei, Taiwan</div>
          </p>
        </div>
      </section>

      <section>
        <h3>Skills</h3>
        <p>
          node.js, javascript, typescript, react, vue, express, sql, mongodb, redis, go, docker,
          git, linux, css, websocket, fcm.
        </p>
      </section>

      <section>
        <h3>Experience</h3>
        <div class="experience">
          <div>
            <span>2007-09 - 2010-06</span> 建國高級中學 畢業
          </div>
          <div>
            <span>2010-10 - 2014-07</span> 清華大學數學系 肄業
          </div>
          <div>
            <span>2015-11 - 2016-04</span> 龍雲數位科技, Intelligent vendor machine - Full-stack
          </div>
          <div>
            <span>2016-04 - 2018-02</span> ---
          </div>
          <div>
            <span>2018-02 - 2018-05 </span> 台大商業智慧實驗室, Sportswear Market Intelligence
            System - Full-stack, vue, express
          </div>
          <div>
            <span>2018-09 - 2019-06 </span> 快樂電視, Live streaming platform - Full-stack, vue,
            express
          </div>
        </div>
      </section>

      <section class="works">
        <h3>Projects</h3>

        <section>
          <h4>
            <span>TeX to Unicode - browser extension</span>{' '}
            <a href="https://chrome.google.com/webstore/detail/tex-to-unicode/kdojinhjlhbmmbfogccabogomjpjijif">
              [link]
            </a>{' '}
            <a href="https://github.com/golopot/tex-to-unicode">[source]</a>
          </h4>
          <p>Turns math written in TeX into Unicode.</p>
        </section>

        <section>
          <h4>
            <span>Micha cat tree 3D Web app</span>{' '}
            <a href="https://micha-cattree.github.io">[link]</a>
          </h4>
          <p>Build a cat tree online.</p>
        </section>
      </section>
    </main>
  );
}

export default Home;
