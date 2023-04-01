import React, { useState } from 'react';
import './tex-box-styles.scss';

interface BoxProps {
  label: string;
}

const Box: React.FC<BoxProps> = ({ label }) => {
  const [text, setText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="box">
      <textarea value={text} onChange={handleChange} placeholder={label} />
    </div>
  );
};

export default Box;
