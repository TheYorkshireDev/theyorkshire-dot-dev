import { css } from '@emotion/core';
import theme from '../../config/theme';

const headroom = css`
  .headroom-wrapper {
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: 0;
  }

  .headroom {
    width: 100%;
    padding: ${theme.headroom.padding};
    background-color: ${theme.colors.primary};
  }

  // for-tablet-portrait-up
  @media (min-width: ${theme.breakpoints.mediumAndUp}) {
    .headroom {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
    transition: ${theme.headroom.transition};
  }

  .headroom--scrolled {
    transition: ${theme.headroom.transition};
  }

  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
    transition: ${theme.headroom.transition};
  }

  .headroom--pinned {
    position: fixed;
    transform: translateY(0);
    transition: ${theme.headroom.transition};
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  }
`;

export default headroom;
