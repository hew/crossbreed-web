/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s, Flex, Box, Container} from 'theme-ui';
import crossbreedScreenshot from '../assets/crossbreed-portrait-skinny.png';
import appleLogo from '../assets/apple-icon.png';
import rnLogo from '../assets/react-native-icon.png';

const Link = ({children, ...props}) => (
  <a {...props} sx={{variant: 'text.link'}}>
    {children}
  </a>
);

export default () => {
  return (
    <article sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'app.article'}}>
        <div sx={{variant: 'app.image'}}>
          <img src={appleLogo} />
        </div>
        <div sx={{mt: [4, 0]}}>
          <s.h1 sx={{variant: 'text.app.title'}}>Crossbreed</s.h1>
          {/* Platform */}
          <Flex sx={{alignItems: 'center'}}>
            <s.h2 sx={{variant: 'text.app.platform'}}>'iOS'</s.h2>
            <div sx={{width: '30px', ml: 1}}>
              <img src={crossbreedScreenshot} />
            </div>
          </Flex>
          {/* Description */}
          <s.p sx={{maxWidth: '400px'}}>"Search your favorite strains."</s.p>
          {/* Links */}
          <Flex sx={{alignItems: 'center'}}>
            <Box>
              <Link href="#">Link</Link>
            </Box>
          </Flex>
        </div>
      </div>
    </article>
  );
};
