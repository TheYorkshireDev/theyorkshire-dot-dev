import React from 'react';
import { Helmet } from 'react-helmet';

import MainContentLayout from '../layouts/Main';
import UpperH1 from '../components/UpperH1';
import UpperH2 from '../components/UpperH2';

const CreditsPage = () => (
  <MainContentLayout>
    <Helmet title={'Credits | Steven Cooney (TheYorkshireDev)'} />
    <UpperH1>Credits</UpperH1>

    <UpperH2>Inspired By</UpperH2>

    <p>
      <em>Phil Hawksworth</em>
      <br />
      Web:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Phil Hawksworth Website"
        href="https://www.hawksworx.com/"
      >
        https://www.hawksworx.com/
      </a>
      <br />
      Twitter:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Phil Hawksworth Twitter"
        href="https://twitter.com/philhawksworth"
      >
        @philhawksworth
      </a>
      <br />
      <br /> I saw Phil at LeedsJS where he demonstrated Jamstack with static
      site generators.
    </p>

    <hr />

    <p>
      <em>Penny Hindle</em>
      <br />
      Web:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Penny Hindle Website"
        href="https://www.pennyhindle.com"
      >
        https://www.pennyhindle.com
      </a>
      <br />
      Twitter:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Penny Hindle Twitter"
        href="https://twitter.com/PenelopeHindle"
      >
        @penelopeHindle
      </a>
      <br />
      <br />
      Penny and I often discuss web technologies and our websites driving us
      both to recent redesigns.
    </p>

    <UpperH2>Logo Designs</UpperH2>

    <p>
      <em>Elliott Brodowski</em>
      <br />
      Instagram:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Elliott Brodowski Instagram"
        href="https://www.instagram.com/elliott.brodowskigd"
      >
        @elliott.brodowskigd
      </a>
      <br />
      <br />
      Elliott designed and created the logos and colour palette used throughout
      the website.
    </p>

    <UpperH2>Gatsby Education</UpperH2>

    <p>
      <em>Justin Formentin</em>
      <br />
      Web:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Justin Formentin Website"
        href="https://justinformentin.com"
      >
        https://justinformentin.com
      </a>
      <br />
      Twitter:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Justin Formentin Twitter"
        href="https://twitter.com/justinformentin"
      >
        @justinformentin
      </a>
      <br />
      <br />
      My first foray into Gatsby was following Justin&apos;s{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Guide to Building a Gatsby Site From the Ground Up Blog Post"
        href="https://justinformentin.com/guide-to-building-a-gatsby-site"
      >
        blog post
      </a>
      &nbsp;outlining a how to create a Gatsby site from scratch.
    </p>
  </MainContentLayout>
);

export default CreditsPage;
