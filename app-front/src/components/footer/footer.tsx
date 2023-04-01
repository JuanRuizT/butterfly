import React from 'react';
import './footer-styles.scss';

const Footer: React.FC = () => (
  <div className="generalFooter">
    <footer className="copyright">
      <div>Butterfly.</div>
      <div className="link">{'Support | Terms of Service | Privacy Policy'}</div>
      <div>©2023 Appynest, Inc.</div>
    </footer>
  </div>
);

export default Footer;
