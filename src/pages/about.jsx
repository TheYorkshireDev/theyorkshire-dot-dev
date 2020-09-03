import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import UpperH1 from '../components/UpperH1';
import UpperH2 from '../components/UpperH2';

const AboutPage = () => (
  <Layout>
    <Helmet title={'About Me | Steven Cooney (TheYorkshireDev)'} />
    <UpperH1>About Me</UpperH1>
    <p>
      I&apos;m a Software Developer based in Leeds, UK. I hold a first-class
      degree in Computer Science from the University of Leeds and am currently
      working at X-Lab Ltd.
    </p>
    <p>
      I enjoy building software solutions that solve business problems. I also
      love to automate as much of the development process as possible. I have
      recently spent an extensive amount of time automating the provisioning of
      cloud resources using Infrastructure as Code.
    </p>
    <p>
      I passionately keep up to date with the latest industry trends and love
      keeping my finger on the pulse. Personal projects outside of work allow me
      the opportunity to put the newest technologies through their paces when
      ordinarily I would be unable to during my day job.
    </p>
    <p>
      I enjoy being part of the local tech community in and around Leeds. I am a
      frequent attendee to LeedsJS and Leeds DevOps meetups amongst others. I
      also like keeping in touch with my University and usually present a guest
      lecture to students on the Computer Science course once a year.
    </p>

    <UpperH2>Passions Beyond Software Development</UpperH2>
    <p>
      Even though I do a lot of programming in my professional and spare time,
      there are other things I enjoy too. Pool, Snooker and Football (or soccer
      for my international friends) is a passion of mine, I occasionally play
      five-a-side and am a supporter of Leeds United.
    </p>
    <p>
      To wind down on an evening after work, I enjoy escaping into the latest
      film or TV show. I am a frequent visitor to the cinema and love keeping up
      to date with the newest releases.
    </p>
    <p>
      When I am not saving to get on the property ladder, there is nothing
      better than travelling to see the world. My recent trips include Japan,
      Malaysia, Paris and Chernobyl.
    </p>
  </Layout>
);

export default AboutPage;
