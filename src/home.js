/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';
import crossbreedScreenshot from '../assets/crossbreed-portrait-skinny.png';
import appStoreBadge from '../assets/apple-badge.png';

export default () => {
  return (
    <article sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'app.article'}}>
        <div sx={{variant: 'app.image'}}>
          <img src={crossbreedScreenshot} />
        </div>
        <div sx={{mt: [4, 0]}}>
          <s.h2>Coming Soon!</s.h2>
          <img src={appStoreBadge} />
        </div>
      </div>
    </article>
  );
};
