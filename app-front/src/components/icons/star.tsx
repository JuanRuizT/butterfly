import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
};

const Star: React.FC<Props> = ({ color = '#c3c3c3', width = 22, height = 22 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 0l3.4 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053 7.6 6.94 11 0z"
        fillRule="evenodd"
        fill={color}
      ></path>
    </svg>
  );
};

export default Star;
