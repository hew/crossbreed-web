/** @jsx jsx */
import React, {useEffect, useState} from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';
import Showcase from './showcase';

export default ({navigate}) => {

  return (
    <>
      <Showcase />
    </>
  );
};
