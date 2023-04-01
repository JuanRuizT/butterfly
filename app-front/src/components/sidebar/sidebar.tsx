import React from 'react';
import './sidebar-styles.scss';
import { ButterflyIcon } from '../icons';

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <div className="icon">
      <ButterflyIcon width={18} height={18} />
    </div>
  </div>
);

export default Sidebar;
