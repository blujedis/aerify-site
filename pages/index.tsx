
import Layout from 'layout/default';
import Link from 'next/link';
import { CSSProperties } from 'react';
import { css, createStyle } from 'theme';
// import { ThemeSelector } from 'theme';
//  <ThemeSelector animate />

const box = css`
  padding: 1em;
`;
createStyle('test', box, '#');

const HomePage = () => {

  return (
    <Layout>
      <div className="container">
        <div >
          <Link href="/react"><a>React</a></Link>
        </div>
        <div >
          <Link href="/styles"><a>Styles</a></Link>
        </div>

        <br />
        {/* <div className="test-calc debug">
          &nbsp;
        </div>
        <br /> */}

        <p>
          <input type="text" placeholder="enter name" className="is-warning" />
        </p>

        <p>
          <input type="text" placeholder="enter name" className="is-danger" />
        </p>

        <p>
          <select className="is-success">
            <option value="">Please Select</option>
            <option value="milton">Milton Waddams</option>
            <option value="peter">Peter Gibbons</option>
          </select>
        </p>

        <p>
          <label>Text Area</label>
          <textarea defaultValue="Just some text in a text area."></textarea>
        </p>

        <p>
          <label className="is-inline"> <input type="checkbox" /> Is Enabled</label>
        </p>

        <p>
          <label className="is-inline"><input name="enabled" type="radio" value="yes" />Yes</label>

          <label className="is-inline"><input name="enabled" type="radio" value="no" />No</label>
        </p>

        <p>
          <button className="is-primary is-light">Test</button>
        </p>

      </div>
    </Layout>
  );

}

export default HomePage;
