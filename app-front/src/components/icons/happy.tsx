import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
};

const Happy: React.FC<Props> = ({ color = '#AEEB7E', width = 100, height = 100 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M46.705 41.822c-.177.273-4.448 6.69-14.32 6.69-9.786 0-14.434-6.306-14.627-6.575a2.88 2.88 0 0 1 4.66-3.383c.16.21 3.272 4.198 9.966 4.198 6.67 0 9.46-4.02 9.487-4.062a2.88 2.88 0 1 1 4.835 3.132M21.557 20.03a4.21 4.21 0 1 1 0 8.42 4.21 4.21 0 0 1 0-8.42m21.122 0a4.21 4.21 0 1 1-.003 8.42 4.21 4.21 0 0 1 .002-8.42M31.998 0C14.328 0 0 14.327 0 32c0 17.673 14.328 32 32 32 17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0"
        fill={color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default Happy;
