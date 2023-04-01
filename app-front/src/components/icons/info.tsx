import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const Info: React.FC<Props> = ({ color = '#000000', width = 36, height = 37, fillOpacity = '1', ...props }: Props) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{'InfoIcon'}</title>
      <path
        d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 15c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-9a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1zM7 4.016a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"
        fill="#1B828E"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Info;
