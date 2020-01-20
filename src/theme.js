/** @jsx jsx */

import {Global} from '@emotion/core';
import React, {memo} from 'react';
import {jsx, useThemeUI, ThemeProvider, Styled} from 'theme-ui';
import {swiss} from '@theme-ui/presets';
import {downArrow} from './utils';

// Some styles are easier to just declare in an actual styles file
import './styles.css';

const theme = {
  //
  // Base theme
  //
  ...swiss,
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    text: ''
  },
  styles: {
    root: {
      height: '100%',
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
      px: 3
    },
    Layout: {
      flex: '1 1 auto',
      display: 'flex',
      maxWidth: '60em'
    },
    Main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    Container: {
      width: '100%',
      maxWidth: '72em',
      display: 'flex',
      flexDirection: 'column',
      py: 0
    },
    Footer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      py: 4
    },
    ol: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    li: {
      display: 'inline-block'
    },
    h1: {
      color: 'primary'
    },
    h2: {
      color: 'secondary'
    },
    h4: {
      color: 'text',
      fontWeight: '200'
    },
    p: {
      fontSize: 2,
      color: 'text'
    }
  },

  //
  // Variants
  //

  layout: {
    nav: {
      justifyContent: 'flex-end',
      width: '100%',
      display: 'flex',
      py: 4
    },
    section: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '30em'
    }
  },
  text: {
    app: {
      title: {
        ...swiss.styles.h1,
        color: 'highlight',
        m: 0
      },
      platform: {
        ...swiss.styles.h2,
        color: 'muted',
        m: 0
      },
      url: {
        ...swiss.styles.h3,
        m: 0
      }
    },
    button: {
      color: 'white',
      margin: 0,
      padding: 0
    },
    link: {
      ...swiss.styles.h3,
      color: 'muted',
      textDecoration: 'none',
      borderBottom: '1px solid white'
    },
    underline: {
      display: 'inline-block',
      color: 'text',
      borderBottomColor: 'text',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      cursor: 'pointer',
      mr: 3,
      ml: 3
    }
  },
  app: {
    article: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: ['column', 'row'],
      minWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      bg: 'white',
      px: 4,
      py: 5
    },
    image: {
      width: ['275px', '350px'],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mb: [2, 0],
      px: [0, 5]
    }
  }
};

const Reset = () =>
  React.createElement(Global, {
    styles: {
      body: {
        margin: '0',
        backgroundColor: swiss.colors.background
      },
      '*': {
        fontFamily: 'Oxygen'
      },
      a: {
        textDecoration: 'none',
        color: swiss.colors.primary,
        fontSize: 20
      },
      img: {
        maxWidth: '100%'
      }
    }
  });

const CustomThemeProvider = memo(({children, ...props}) => (
  <ThemeProvider theme={theme} {...props}>
    <Reset />
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
));

export {theme, useThemeUI as useTheme, CustomThemeProvider as default};
