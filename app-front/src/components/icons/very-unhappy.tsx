import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const VeryUnhappy: React.FC<Props> = ({
  color = '#F45D6F',
  width = 100,
  height = 100,
  fillOpacity = '1',
  ...props
}: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.623 49.287c0-8.533 6.91-15.54 15.438-15.54 7.197 0 13.243 4.804 14.953 11.504.063.185.107.45.132.64a17.03 17.03 0 0 1 .353 3.397H16.623zm4.934-28.758a4.21 4.21 0 1 1 0 8.422 4.21 4.21 0 0 1 0-8.423zm21.12 0a4.21 4.21 0 1 1-.003 8.42 4.21 4.21 0 0 1 .004-8.42zM32 .5C14.327.5 0 14.826 0 32.5c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.674-14.327-32-32-32z"
        fill={color}
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

export default VeryUnhappy;
