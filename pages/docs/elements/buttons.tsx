import React from 'react';
import Layout from 'layout/default';

const ButtonsPage = () => {
  return (
    <Layout>
      <div className="container">

        <div className="block">
          <p>Loading</p>
          <button className="is-loading-right is-primary">
            Loading
          </button>
        </div>


        <div className="block">
          <p>Default</p>
          <div className="buttons">
            <button>Button</button>
            <button className="is-primary">Primary</button>
            <button className="is-success">Success</button>
            <button className="is-warning">Warning</button>
            <button className="is-danger">Danger</button>
            <button className="is-dark">Dark</button>
            <button className="is-dim">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Light</p>
          <div className="buttons">
            <button>Button</button>
            <button className="is-primary is-light">Primary</button>
            <button className="is-success is-light">Success</button>
            <button className="is-warning is-light">Warning</button>
            <button className="is-danger is-light">Danger</button>
            <button className="is-dark is-light">Dark</button>
            <button className="is-dim is-light">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Small</p>
          <div className="buttons">
            <button className="is-outlined">Button</button>
            <button className="is-primary is-outlined">Primary</button>
            <button className="is-success is-outlined">Success</button>
            <button className="is-warning is-outlined">Warning</button>
            <button className="is-danger is-outlined">Danger</button>
            <button className="is-dark is-outlined">Dark</button>
            <button className="is-dim is-outlined">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Large</p>
          <div className="buttons">
            <button className="is-large">Button</button>
            <button className="is-primary is-large">Primary</button>
            <button className="is-success is-large">Success</button>
            <button className="is-warning is-large">Warning</button>
            <button className="is-danger is-large">Danger</button>
            <button className="is-dark is-large">Dark</button>
            <button className="is-dim is-large">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Rounded</p>
          <div className="buttons">
            <button className="is-rounded">Button</button>
            <button className="is-primary is-light is-rounded">Primary</button>
            <button className="is-success is-light is-rounded">Success</button>
            <button className="is-warning is-light is-rounded">Warning</button>
            <button className="is-danger is-light is-rounded">Danger</button>
            <button className="is-dark is-light is-rounded">Dark</button>
            <button className="is-dim is-light is-rounded">Dim</button>
          </div>
        </div>



        <div className="block">
          <p>Grouped Right</p>
          <div className="buttons is-grouped is-right">
            <button >Button</button>
            <button className="is-primary">Primary</button>
            <button className="is-success is-active">Success</button>
            <button className="is-warning">Warning</button>
            <button className="is-danger is-active">Danger</button>
            <button className="is-dark">Dark</button>
            <button className="is-dim">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Grouped Rounded Centered</p>
          <div className="buttons is-grouped is-centered is-rounded">
            <button className="is-rounded">Button</button>
            <button className="is-primary">Primary</button>
            <button className="is-success">Success</button>
            <button className="is-warning is-active">Warning</button>
            <button className="is-danger">Danger</button>
            <button className="is-dark is-active">Dark</button>
            <button className="is-dim">Dim</button>
          </div>
        </div>

        <div className="block">
          <p>Buttons Loading</p>
          <div className="buttons is-grouped">
            <button>Button</button>
            <button className="is-primary is-loading">Primary</button>
            <button className="is-success is-active">Success</button>
            <button className="is-warning">Warning</button>
            <button className="is-danger">Danger</button>
            <button className="is-dark">Dark</button>
            <button className="is-dim">Dim</button>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ButtonsPage;
