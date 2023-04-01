import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

const Unhappy: React.FC<Props> = ({ color = '#F98371', width = 100, height = 100 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 65" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45.97 48.47a2.88 2.88 0 0 1-4.004-.636c-.16-.21-3.272-4.198-9.966-4.198-6.628 0-9.39 3.924-9.507 4.092a2.845 2.845 0 0 1-2.4 1.303 2.89 2.89 0 0 1-1.572-.466c-1.334-.865-1.706-2.663-.84-3.998.176-.273 4.446-6.69 14.32-6.69 9.786 0 14.434 6.306 14.626 6.574a2.88 2.88 0 0 1-.656 4.02M21.557 20.53a4.21 4.21 0 1 1 .002 8.42 4.21 4.21 0 0 1-.003-8.42m21.12 0a4.21 4.21 0 0 1 4.21 4.21 4.21 4.21 0 1 1-4.21-4.21M32 .5C14.327.5 0 14.826 0 32.5c0 17.673 14.327 32 32 32 17.674 0 32-14.327 32-32 0-17.674-14.326-32-32-32"
        fill={color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default Unhappy;
