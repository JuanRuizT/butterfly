import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const VeryHappy: React.FC<Props> = ({ color = '#34EB7E', width = 100, height = 100 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.235 52.992c-8.526 0-15.438-6.905-15.438-15.438h30.876c0 8.533-6.912 15.438-15.438 15.438M21.557 20.53a4.21 4.21 0 1 1 .002 8.42 4.21 4.21 0 0 1-.003-8.42m21.12 0a4.21 4.21 0 1 1 .002 8.42 4.21 4.21 0 0 1-.002-8.42M32 .5C14.327.5 0 14.827 0 32.5c0 17.673 14.327 32 32 32 17.674 0 32-14.327 32-32 0-17.673-14.326-32-32-32"
        fill={color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default VeryHappy;
