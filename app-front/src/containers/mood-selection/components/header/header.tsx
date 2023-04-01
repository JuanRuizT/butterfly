import React from 'react';
import './header-styles.scss';
import { ButterflyIcon } from '../../../../components/icons';

const Header: React.FC = () => (
  <div className="header">
    <div className="left">
      <ButterflyIcon width={60} height={60} />
      <div className="text">Butterfly</div>
    </div>
    <div className="text">{"Your Team's Happiness Manager"}</div>
  </div>
);

export default Header;
