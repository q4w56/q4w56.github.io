import Head from 'next/head';

/**
 * @param {{
 *   title: string,
 *   date: string,
 *   body: any,
 * }} props
 */
function ExperienceItem(props) {
  const {title, date, body} = props;
  return (
    <div className="experience__item">
      <div>
        <span className="experience__date">{date}</span>{' '}
        <span className="experience__title">{title}</span>
      </div>
      <div className="experience__body">{body}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="content">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <meta name="Description" content="Resume of Chiawen Chen" />
        <link rel="shortcut icon" href="/static/icon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        <title>Resume - Chiawen Chen 陳嘉文</title>
      </Head>

      <section className="intro">
        <div className="portrait">
          <img src="/static/portrait.jpg" alt="portrait" />
        </div>
        <h1>陳嘉文 Chiawen Chen</h1>
        <div>
          <p>
            Web application developer, frontend, backend, and db. Specialties: node.js, javascript,
            react, vue, express. Has been active on Github.
          </p>
          <p>
            <a href="https://github.com/golopot">github</a>
            <br />
            <a href="https://stackoverflow.com/users/3290397/golopot">stackoveflow</a>
          </p>
          <div>
            <div>golopot@gmail.com</div>
            <div>Taipei, Taiwan</div>
          </div>
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
        <h3>Education</h3>

        <div className="experience">
          <ExperienceItem date="2007-09 - 2010-06" title="Taipei Municipal Jianguo High School" />

          <ExperienceItem
            date="2010-10 - 2014-07"
            title="Attended National Tsing Hua University, major in
            mathematics."
          />
        </div>
      </section>

      <section>
        <h3>Experience</h3>
        <div className="experience">
          <ExperienceItem
            date="2015-11 - 2016-04"
            title="Transtep technology corporation, Programmer"
            body={<>Develop Intelligent Vendor Machine in JavaScript.</>}
          />

          <ExperienceItem
            date="2018-02 - 2018-05"
            title="Bright Insight lab, Full stack programmer"
            body={
              <>
                Develop SMIS system (Sportswear Market Intelligence System) in Vue.js, Express.js
                and MongoDB.
              </>
            }
          />

          <ExperienceItem
            date="2018-09 - 2019-10"
            title="HappyTV, Software Engineer"
            body={
              <>
                • Develop{' '}
                <a href="https://yoshow.live/" target="_blank" rel="noopener">
                  yoshow.live
                </a>
                , a live streaming website, fullstack, using Vue.js, Express.js, Node.js and MySQL.
                <br />
                • Develop the whole frontend project in Vue.js from scratch.
                <br />
                • Develop restful API using Node.js and MySQL.
                <br />
                • Develop chat server using WebSocket and Redis.
                <br />
                • Develop Cloud Messaging services.
                <br />
                • Setup cloud logging, error reporting, and metrics.
                <br />
              </>
            }
          />
        </div>
      </section>

      <section className="works">
        <h3>Projects</h3>

        <section>
          <h4>
            <span>TeX to Unicode - browser extension (2018)</span>{' '}
            <a href="https://chrome.google.com/webstore/detail/tex-to-unicode/kdojinhjlhbmmbfogccabogomjpjijif">
              [link]
            </a>{' '}
            <a href="https://github.com/golopot/tex-to-unicode">[source]</a>
          </h4>
          <p>Converts TeX into Unicode in browser.</p>
        </section>

        <section>
          <h4>
            <span>Micha cat tree 3D Web app (2016)</span>{' '}
            <a href="https://micha-cattree.github.io">[link]</a>
          </h4>
          <p>Build a cat tree like LEGO online.</p>
        </section>

        <section>
          <h4>
            <span>Eslint-plugin-jsdoc (2019)</span>{' '}
            <a href="https://github.com/gajus/eslint-plugin-jsdoc">[link]</a>
          </h4>
          <p>I am one of the maintainers.</p>
        </section>

        <section>
          <h4>
            <span>Eslint-plugin-react (2019)</span>{' '}
            <a href="https://github.com/yannickcr/eslint-plugin-react">[link]</a>
          </h4>
          <p>I am a frequent contributor.</p>
        </section>
      </section>
    </main>
  );
}
