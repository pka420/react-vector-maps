import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { VectorMap } from '../../../src/VectorMap';

import worldLowRes from '../content/world-low-res.json';

import { Layout } from '../components/Layout';
import { Stargazers } from '../components/Stargazers';
import { Example } from '../components/Example';

const seo = {
  title: 'Home',
};

const HeroWrapper = styled.div`
  display: flex;
  flex-flow: nowrap row;

  @media (max-width: 48em) {
    flex-flow: nowrap column;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Item = styled.div`
  margin: 0 8px;
  flex: 1 1 ${p => p.basis}%;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 48em) {
    margin: 0;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const IndexPage = ({ ...other }) => (
  <Layout
    seo={seo}
    hero={
      // eslint-disable-next-line react/jsx-wrap-multilines
      <HeroWrapper>
        <Item basis={70}>
          <h1>React Vector Maps</h1>
          <p>
            A React component for creating simple maps with interactive elements, 100+ maps ready for use and an online
            SVG to JSON converter for creating new maps.
          </p>
          <Stargazers style={{ marginTop: '16px' }} />
        </Item>
        <Item basis={30} style={{ textAlign: 'center' }}>
          <VectorMap style={{ maxWidth: 320, fill: 'currentColor' }} tabIndex={-1} {...worldLowRes} />
        </Item>
      </HeroWrapper>
    }
    {...other}
  >
    <h2 id="👋-welcome">👋 Weclome!</h2>
    <p>
      Below you&apos;ll find a <a href="#getting-started">getting start</a> guide for using the package in your app.
      There is also a collection of <Link to="/maps">100+ maps</Link> that are ready to use with the component.
    </p>
    <p>
      The <Link to="/props">VectorMap component props are listed here</Link> and you can look over some more{' '}
      <Link to="/examples">advanced examples</Link> of use. You can also turn your own SVG into a valid map with our{' '}
      <Link to="/converter">converter</Link>.
    </p>
    <p>
      Stars on the project are always appreciated. To report and issue or contibute to the project, the source is all
      avaliable <a href="https://github.com/South-Paw/react-vector-maps">on Github</a>.
    </p>

    <hr />

    <h3 id="getting-started">Getting started</h3>
    <p>Install the package with either</p>
    <ul>
      <li>
        <code>yarn add @south-paw/react-vector-maps</code>
      </li>
      <li>
        <code>npm i @south-paw/react-vector-maps</code>
      </li>
    </ul>
    <p>You can then use the component as follows</p>
    <p>
      <code>{`import { VectorMap } from '@south-paw/react-vector-maps';`}</code>
    </p>
    <p>
      The component accepts a correctly structured object being spread onto it, you can download and save a valid json
      object from <Link to="/maps">the maps page</Link> or you can create your own using the{' '}
      <Link to="/converter">online SVG to JSON converter</Link>.
    </p>
    <p>Then, a simple example of use would be something like the following</p>
    <Example
      isOpen
      code={`class App extends React.Component {
  render() {
    return <VectorMap {...worldLowRes} />;
  }
}`}
      scope={{ VectorMap, worldLowRes }}
    />
  </Layout>
);

export default IndexPage;
