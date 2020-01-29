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
          <a style={{outline: 'none'}} href="https://apps.apple.com/us/app/crossbreed/id1495400916?ls=1">
             <img src={appStoreBadge} />
          </a>
        </div>
      </div>
    </article>
  );
};
