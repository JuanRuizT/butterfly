import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const Neutral: React.FC<Props> = ({ color = '#FFAC73', width = 100, height = 100, fillOpacity = '1', ...props }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M44.29 46.087H20.095c-1.59 0-2.88-1.608-2.88-3.2 0-1.59 1.29-3.2 2.88-3.2H44.29c1.59 0 2.88 1.61 2.88 3.2 0 1.592-1.29 3.2-2.88 3.2M21.557 20.53a4.21 4.21 0 1 1 0 8.42 4.21 4.21 0 0 1 0-8.42m21.12 0a4.21 4.21 0 1 1 .002 8.42 4.21 4.21 0 0 1-.002-8.42M32 .5C14.328.5 0 14.826 0 32.5c0 17.673 14.327 32 32 32 17.675 0 32-14.327 32-32 0-17.674-14.325-32-32-32"
        fill={color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default Neutral;
