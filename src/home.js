/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';
import crossbreedScreenshot from '../assets/crossbreed-portrait-skinny.png';
import appleLogo from '../assets/apple-icon.png';

export default () => {
  return (
    <article sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'app.article'}}>
        <div sx={{variant: 'app.image'}}>
          <img src={crossbreedScreenshot} />
        </div>
        <div sx={{mt: [4, 0]}}>
          <s.h1 sx={{variant: 'text.app.title'}}>Crossbreed</s.h1>
          {/* Platform */}
          <div sx={{display: 'flex'}}>
            <s.h2 sx={{variant: 'text.app.platform'}}>'iOS'</s.h2>
            <div sx={{width: '30px', ml: 1}}>
              <img src={appleLogo} />
            </div>
          </div>
          {/* Description */}
          <s.p sx={{maxWidth: '400px'}}>"Search your favorite strains."</s.p>
          {/* Links */}
          <div sx={{display: 'flex'}}>
            <a href="#" sx={{variant: 'text.underline'}}>
              Link
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
