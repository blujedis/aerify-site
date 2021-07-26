import React, { CSSProperties } from 'react';
import { NotifyController, useNotify, ITEM_STYLE, CLOSE_STYLE } from '@aerify/react';
import { usePortal } from '@aerify/react';
import { useTabs, Tabs, Pane } from '@aerify/react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from 'layout/default';

const testMargin = {
  width: 50,
  height: 50,
  backgroundColor: 'navy',
};

const testBorder = {
  width: 50,
  height: 50
};

const divStyle: CSSProperties = {
  width: '640px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  padding: '12px',
  top: '24px',
  left: '50%',
  transform: `translateX(-50%)`,
  border: '1px solid #b3ccff',
  backgroundColor: '#ccddff',
  // top: '50%',
  // left: '50%',
  // transform: `translate(-50%, -50%)`,
  // minHeight: '100px'
  boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
};

const NotifyComponent = ({ onClose, content, onEnter, onLeave, id }: any) => {
  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      onHoverStart={onEnter}
      onHoverEnd={onLeave}
      style={ITEM_STYLE}
    >
      <span style={CLOSE_STYLE} onClick={onClose}>&#x2715;</span>
      {content}
    </motion.li>
  );
};

function Aerify(props: any) {

  // const ctrl = useNotify({ uid: 'example', position: 'top' });
  // const { Portal, containerRef, visible, open, close } = usePortal();

  // const tabs = useTabs();

  // const addMessage = () => {
  //   ctrl.add((props: any) => <div>My id is: {props.id}</div>);
  // };


  return (

    <Layout>

      <div className="container">

        <h2>
          Header Two
        </h2>

        <p>
          Just some text to test body color
        </p>

        <p>
          {/* <button onClick={() => addMessage()}>Add Notification</button> <button onClick={open}>Show Modal</button> */}
        </p>

        <section className="mt-nm">

          <p className="mb-nm">Controlled Tabs Example</p>
          {/* 
          <Tabs tabs={tabs} className="tabs is-capped" > */}
          <Tabs className="tabs is-capped" >
            <Pane label="One">
              Panel One
            </Pane>
            <Pane label="Two" active={true}>
              Panel Two
            </Pane>
            <Pane label="Three">
              Panel Three
            </Pane>
          </Tabs>

        </section>

        <section>

          <div className="dropdown is-hoverable">
            <button className="is-outlined">Products</button>
            <div className="dropdown-items">
              <a href="#">Sponsor Sheets & Names</a>
              <a href="#">Chassis Skins</a>
              <span className="divider is-horizontal"></span>
              <a href="#">Full Kits</a>
            </div>
          </div>

        </section>

        <section>

          <div className="buttons">
            <button>Secondary</button>
            <button className="is-primary">Primary</button>
            <button className="is-primary is-rounded is-light is-outlined">Primary</button>
            <button className="is-warning is-large" >Primary</button>
            <button className="is-success is-loading">Success</button>
            <button className="is-danger is-small is-rounded">Danger</button>
          </div>

        </section>

        <section>
          <div className="buttons">
            <button className="is-outlined">Secondary</button>
            <button className="is-primary is-outlined">Primary</button>
            <button className="is-warning is-large is-outlined">Primary</button>
            <button className="is-dark">Dark</button>
            <button className="is-danger is-small is-outlined">Danger</button>
          </div>
        </section>

        <section>

          <div className="buttons is-grouped">
            <button className="is-outlined">Yes</button>
            <button className="is-outlined is-active">No</button>
            <button className="is-outlined">Maybe</button>
          </div>

        </section>


        <section>

          <div className="buttons is-grouped is-rounded">
            <button className="is-outlined">Yes</button>
            <button className="is-outlined">No</button>
            <button className="is-outlined is-danger is-active">Maybe</button>
          </div>

        </section>

        <div className="section is-bordered is-small">
          <a href="#" className="is-animated">Some link</a>
        </div>

        <div className="section box">
          <a href="#" className="is-animated">Some link</a>
        </div>

        <div className="section is-bordered is-large">
          <a href="#" className="button is-link is-primary">Some link</a>
        </div>

        <section>
          <div className="tabs is-capped">
            <ul>
              <li><a>One</a></li>
              <li><a>Two</a></li>
              <li className="is-active"><a>Three</a></li>
              <li><a>Four</a></li>
            </ul>
          </div>
        </section>

        <section>
          <div className="tabs is-grouped">
            <ul>
              <li><a>One</a></li>
              <li><a>Two</a></li>
              <li className="is-active"><a>Three</a></li>
              <li><a>Four</a></li>
            </ul>
          </div>
        </section>

        <section className="is-small">
          <input type="text" placeholder="enter name" className="is-primary" />
        </section>

        <section>
          <input type="text" placeholder="enter name" />
        </section>

        <section className="is-large">
          <input type="text" placeholder="enter name" className="is-success" />
        </section>

        <div className="file is-fullwidth">
          <div>
            <input type="file" className="file-input" />
            <div>
              <button className="is-primary">Select File</button>
              <span className="has-border">No file selected</span>
            </div>
          </div>
        </div>
        <br />

        <span className="tag is-small">
          Mac
          &nbsp;
          <a className="close is-rounded is-small is-offset is-left"></a>
        </span>&nbsp;

        <span className="tag">
          Windows &nbsp;
          <a className="close is-rounded is-small is-offset"></a>
        </span>&nbsp;&nbsp;

        <span className="tag is-large">
          Debian
          &nbsp;
          <a className="close is-rounded is-md is-offset"></a>
        </span>&nbsp;&nbsp;

        <span className="tag is-primary">
          Ubuntu
          &nbsp;
          <a className="close is-rounded"></a>
        </span>&nbsp;

        <br />
        <br />

        <p>
          Close buttons&nbsp;
          <a className="close is-small"></a>
          <a className="close"></a>
          <a className="close is-large"></a>

        </p>
        <br />

        <div className="toast is-light">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <div className="toast is-primary">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <div className="toast is-danger">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <div className="toast is-primary is-light">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />


        <div className="toast is-success is-light">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <div className="toast is-warning is-light">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <div className="toast is-danger is-light">
          <a className="close"></a>
          <p>Simple toast message for displaying alert type messages.</p>
          <p>Testing multiline.</p>
        </div>
        <br />

        <input type="text" placeholder="enter name" className="is-warning" />

        <input type="text" placeholder="enter name" className="is-danger" />

        <select>
          <option value="">Please Select</option>
          <option value="milton">Milton Waddams</option>
          <option value="peter">Peter Gibbons</option>
        </select>

        <textarea defaultValue="Just some text in a text area."></textarea>

        <input type="checkbox" /> <label className="is-inline">Is Enabled</label> <br />

        <input name="enabled" type="radio" value="yes" /><label className="is-inline">yes</label>
        <input name="enabled" type="radio" value="no" /><label className="is-inline">no</label>
        <br />

        <label className="toggle is-small">
          <input type="checkbox" /><span className="toggle-switch"> </span>
          <span className="toggle-label">enabled</span>
        </label><br />

        <label className="toggle is-warning">
          <input type="checkbox" /><span className="toggle-switch"> </span><span className="toggle-label">enabled</span>
        </label><br />

        <label className="toggle is-danger is-large">
          <input type="checkbox" /><span className="toggle-label">enabled</span><span className="toggle-switch"> </span>
        </label>

        <div className="slider is-small">
          <input type="range" min="0" max="100" />
          <div>45</div>
        </div>

        <div className="slider is-success">
          <input type="range" min="0" max="100" />
          <div>75</div>
        </div>

        <div className="slider  is-danger is-large">
          <input type="range" min="0" max="100" />
          <div>25</div>
        </div>
        <br />

        <ul className="steps is-xsmall">
          <li className="is-active"><span>One</span></li>
          <li><span className="is-active">Two</span></li>
          <li><span>Three</span></li>
          <li><span>Four</span></li>
        </ul>
        <br />

        <ul className="steps is-primary is-small">
          <li className="is-active"><span>One</span></li>
          <li><span >Two</span></li>
          <li><span>Three</span></li>
          <li><span>Four</span></li>
        </ul>
        <br />

        <ul className="steps has-counters is-primary">
          <li className="is-active"><span>One</span></li>
          <li><span >Two</span></li>
          <li><span>Three</span></li>
          <li><span>Four</span></li>
        </ul>
        <br />

        <ul className="steps has-counters is-primary is-large">
          <li className="is-active"><span>One</span></li>
          <li><span >Two</span></li>
          <li><span>Three</span></li>
          <li><span>Four</span></li>
        </ul>
        <br />

        <h4>Margin Small <small>(m-sm)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-sm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-sm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-sm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-sm"></div></div>
        </div>
        <br />

        <h4>Margin Normal <small>(m-nm)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-nm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-nm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-nm"></div></div>
          <div className="has-border"><div style={testMargin} className="m-nm"></div></div>
        </div>
        <br />

        <h4>Margin Medium <small>(m-md)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-md"></div></div>
          <div className="has-border"><div style={testMargin} className="m-md"></div></div>
          <div className="has-border"><div style={testMargin} className="m-md"></div></div>
          <div className="has-border"><div style={testMargin} className="m-md"></div></div>
        </div>
        <br />

        <h4>Margin Large <small>(m-lg)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-lg"></div></div>
          <div className="has-border"><div style={testMargin} className="m-lg"></div></div>
          <div className="has-border"><div style={testMargin} className="m-lg"></div></div>
          <div className="has-border"><div style={testMargin} className="m-lg"></div></div>
        </div>
        <br />

        <h4>Margin XLarge <small>(m-xl)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-xl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xl"></div></div>
        </div>
        <br />

        <h4>Margin XXLarge <small>(m-xxl)</small></h4>
        <div className="flex-row">
          <div className="has-border"><div style={testMargin} className="m-xxl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xxl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xxl"></div></div>
          <div className="has-border"><div style={testMargin} className="m-xxl"></div></div>
        </div>
        <br />

        <h4>Borders</h4>
        <div className="flex-row">
          <div style={testBorder} className="has-border"></div>
          <div style={testBorder} className="has-border is-warning"></div>
          <div style={testBorder} className="has-border is-primary"></div>
          <div style={testBorder} className="has-border is-danger"></div>
        </div>
        <br />

        <hr />

        <div className="divider is-horizontal has-text">Test</div>

        <div style={{ position: 'relative', height: 200 }}>
          <div className="divider is-vertical has-text">Or</div>
        </div>

        <nav className="breadcrumb is-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#" className="is-active">Milton Waddams</a></li>
          </ul>
        </nav>

        <br />

        <nav className="pager" role="navigation" aria-label="pager">

          <a href="#" className="pager-previous">Previous</a>

          <ul className="pager-list">

            <li><a href="#" className="pager-link">1</a></li>

            <li><span className="pager-ellipsis">&hellip;</span></li>

            <li><a href="#" className="pager-link is-active">45</a></li>

            <li><a href="#" className="pager-link">46</a></li>

            <li><a href="#" className="pager-link">47</a></li>

            <li><span className="pager-ellipsis">&hellip;</span></li>

            <li><a href="#" className="pager-link">86</a></li>

          </ul>

          <a href="#" className="pager-next is-inactive">Next page</a>

        </nav>

        <br />

        <blockquote>Some Blockquote example.</blockquote> <br />

        <pre>{`module.exports = { checked: true };`}</pre>

      </div>


      {/* 
      <NotifyController {...ctrl.options}>
        <AnimatePresence initial={false}>
          {ctrl.render(NotifyComponent)}
        </AnimatePresence>
      </NotifyController> */}


      {/* <Portal>
        {!visible ? null :
          <div style={divStyle} ref={containerRef}>
            <span>Hello Portalized Modal...</span>
            <a href="#" onClick={close}>Close</a>
          </div>
        }
      </Portal> */}

    </Layout>

  );

}

export default Aerify;


