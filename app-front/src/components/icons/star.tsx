import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const Star: React.FC<Props> = ({ color = '#000000', width = 36, height = 37, fillOpacity = '1', ...props }: Props) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{'StarIcon'}</title>
      <path
        d="m11 0 3.399 6.94L22 8.054l-5.5 5.402 1.298 7.628-6.798-3.6-6.798 3.6L5.5 13.455 0 8.053l7.6-1.112z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Star;
