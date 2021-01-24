import React from 'react';
import Index from "@components/App";
import { withTranslation } from "@hocs/witI18n";

const About = () => {
  return (
    <Index>
      <h1>About Page</h1>
    </Index>
  );
}

About.getInitialProps = async () => ({
    namespacesRequired: ['index'],
})

export default withTranslation('index')(About);