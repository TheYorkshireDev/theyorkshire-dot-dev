import React from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import Layout from '../layouts/Layout';
import UpperH1 from '../components/UpperH1';
import TwentyTwelve from '../../static/twentytwelve-heading.inline.svg';
import TwentyThirteen from '../../static/twentythirteen-heading.inline.svg';
import TwentyFourteen from '../../static/twentyfourteen-heading.inline.svg';
import TwentyFifteen from '../../static/twentyfifteen-heading.inline.svg';
import TwentySixteen from '../../static/twentysixteen-heading.inline.svg';
import TwentySeventeen from '../../static/twentyseventeen-heading.inline.svg';
import TwentyEighteen from '../../static/twentyeighteen-heading.inline.svg';
import TwentyNineteen from '../../static/twentynineteen-heading.inline.svg';

var MarginBottom = `
  margin-bottom: 0.75rem;
`;

const TwentyTwelveHeading = styled(TwentyTwelve)`
  ${MarginBottom}
`;

const TwentyThirteenHeading = styled(TwentyThirteen)`
  ${MarginBottom}
`;

const TwentyFourteenHeading = styled(TwentyFourteen)`
  ${MarginBottom}
`;

const TwentyFifteenHeading = styled(TwentyFifteen)`
  ${MarginBottom}
`;

const TwentySixteenHeading = styled(TwentySixteen)`
  ${MarginBottom}
`;

const TwentySeventeenHeading = styled(TwentySeventeen)`
  ${MarginBottom}
`;

const TwentyEighteenHeading = styled(TwentyEighteen)`
  ${MarginBottom}
`;

const TwentyNineteenHeading = styled(TwentyNineteen)`
  ${MarginBottom}
`;

const CareerPage = () => (
  <Layout>
    <Helmet title={'Career | Steven Cooney (TheYorkshireDev)'} />
    <UpperH1>Education &amp; Career</UpperH1>
    <p>
      Until university, I never wanted to be a software developer. I had no idea
      what I wanted to do but took a chance at a Computer Science degree because
      I liked maths, computers and technology in general.
    </p>

    <TwentyTwelveHeading alt="2012" />

    <p>
      In 2012, I started a Computer Science degree at the University of Leeds
      and experienced programming for the first time. Within weeks I had caught
      the bug and knew I wanted to pursue a career as a software developer.
    </p>

    <TwentyThirteenHeading alt="2013" />

    <p>
      In the summer between my first and second year, I completed an internship
      with X-Lab Ltd as a junior software developer. I worked on a web
      application for a local NHS Trust learning many new technologies such as
      .NET Framework, C# and web libraries like jQuery and Handlebars.
    </p>

    <p>
      I continued working at X-Lab part-time during my second year. While
      continuing my studies, I moved on to a project called QTool, gaining
      valuable experience in developing mobile-friendly web
      applications/websites.
    </p>

    <TwentyFourteenHeading alt="2014" />

    <p>
      My degree contained a work placement year between my second and final year
      of study. For my placement, I left X-Lab and moved down to Southampton to
      work for IBM in Hursley.
    </p>

    <p>
      At IBM, I joined the security team for IBM MQ. I worked on testing aspects
      of LDAP authentication and authorisation. While at IBM, I gained exposure
      to the Perl programming language and also had the opportunity to
      contribute to numerous internal projects.
    </p>

    <p>
      During my placement year, I became a STEM ambassador and taught Computer
      Science at a local primary school. I assisted at IBM organised event days
      for local schools, inspiring children to take an interest in technology.
    </p>

    <TwentyFifteenHeading alt="2015" />

    <p>
      After my placement year, I moved back to Leeds to complete my final year
      of university. I was approached by X-Lab, wanting me to re-join X-Lab
      while I completed my studies. I worked on a new UI for one of X-Lab&apos;s
      products, gaining experience of Web API frontends alongside Knockout &amp;
      Knockback web libraries.
    </p>

    <TwentySixteenHeading alt="2016" />

    <p>
      In 2016 I graduated with a first-class degree in Computer Science with
      Industry. I also won the BSC Final year project prize, awarded for
      demonstrating outstanding professional and industrial awareness in my
      project.
    </p>

    <p>
      I was fortunate to have job offers from both X-Lab and IBM when I
      graduated. I joined X-Lab full-time in June 2016 and immediately worked on
      X-Lab&apos;s leading product NPEx.
    </p>

    <TwentySeventeenHeading alt="2017" />

    <p>
      I implemented SonarQube into the development pipeline at X-Lab. It
      provides static code analysis across all products, giving feedback on code
      changes within a pull request and improving the development and code
      review experience.
    </p>

    <p>
      In early 2017 I joined the Nutritools project alongside working on NPEx.
    </p>

    <TwentyEighteenHeading alt="2018" />

    <p>
      In 2018, I took over as the lead on the Nutritools project. Later in the
      year, I also took on a new role as a line manager for a newly recruited
      software developer.
    </p>

    <TwentyNineteenHeading alt="2019" />

    <p>
      I created a plugin that integrated our development and build tools. The
      plugin sends the TeamCity build status to Phabricator code reviews. It was
      shortlisted for the TeamCity Plugin awards 2019.
    </p>

    <p>
      During the year, I coordinated the recruitment for software development
      positions X-Lab. I worked closely with universities, organising
      recruitment presentations and attendance at career fairs.
    </p>

    <p>
      In 2019 I spent most of the year working with Infrastructure as Code and
      DevOps tooling. I led a project to design, plan and execute a move of our
      products from on-premise infrastructure to the cloud. The project used
      Terraform to provision cloud infrastructure on Azure.
    </p>
  </Layout>
);

export default CareerPage;
