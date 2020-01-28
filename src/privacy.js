/** @jsx jsx */
import React, {useEffect, useState} from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';

export default ({navigate}) => {
  return (
    <div>
      <s.h1>Privacy Policy</s.h1>
      <s.p>
        This policy applies to all information collected or submitted on Crossbreed’s website and
        our apps for iPhone and any other devices and platforms.
      </s.p>
      <s.h2>Information we collect</s.h2>
      <s.p>
        We do not store any of your data. None of your searches are saved anywhere. Crossbreed
        displays your search results, and nothing more. In the future, if new functionality is added
        to Crossbreed, we may need to store your data. Under such a scenario, we will update
        existing users to the new privacy policy.
      </s.p>
      <s.h2>Technical Basics</s.h2>
      <s.p>
        Crossbreed interfaces with a third party API. The third party API may store basic technical
        information, such as your IP address, in temporary memory or logs.
      </s.p>
      <s.h2>Security</s.h2>
      <s.p>
        We implement a variety of security measures to help keep your information secure. For
        instance, all communication with the app and website requires HTTPS with certificate
        pinning.
      </s.p>
      <s.h2>International Transfers of Information</s.h2>
      <s.p>
        Information may be processed, stored, and used outside of the country in which you are
        located. Data privacy laws vary across jurisdictions, and different laws may be applicable
        to your data depending on where it is processed, stored, or used.
      </s.p>
      <s.h2>Your Consent</s.h2>
      <s.p>By using our site or apps, you consent to our privacy policy.</s.p>
      <s.h2>Contacting Us</s.h2>
      <s.p>
        If you have questions regarding this privacy policy, you may email matt@hew.tools.
      </s.p>
    </div>
  );
};
