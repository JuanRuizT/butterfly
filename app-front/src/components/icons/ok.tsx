import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const Ok: React.FC<Props> = ({ color = '#2CE6CE', width = 32, height = 32, fillOpacity = '1', ...props }: Props) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0Zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.282 14-14 14Zm7.008-20.364a1.4 1.4 0 0 0-1.938.406L14.318 20.36l-3.228-2.988a1.403 1.403 0 0 0-1.98.078 1.398 1.398 0 0 0 .078 1.978l4.462 4.128c.016.014.036.018.052.032.04.032.064.076.106.106.06.04.128.048.192.076.076.036.15.07.23.092.078.02.154.03.234.036.114.012.224.012.336-.004.046-.008.09-.02.136-.032.138-.034.266-.088.392-.164.022-.014.04-.03.062-.044.082-.056.17-.098.24-.174.05-.054.072-.124.112-.184.002-.002.006-.004.006-.006l7.664-11.714a1.402 1.402 0 0 0-.404-1.94Z"
        fill={color}
      />
    </svg>
  );
};

export default Ok;
