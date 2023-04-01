import * as React from 'react';
import { type SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  color?: string;
  width?: number;
  height?: number;
  fillOpacity?: string;
};

const Edit: React.FC<Props> = ({ color = '#000000', width = 36, height = 37, fillOpacity = '1', ...props }: Props) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>{'EditIcon'}</title>
      <path
        d="m7.94 7.94-.67-2.019-3.854-3.854-1.35 1.35L5.923 7.27l2.017.668zM.28.28a.954.954 0 0 0 0 1.349l.993.993 1.349-1.35L1.629.28a.954.954 0 0 0-1.35 0zm10.97 1.97H5.933l.75.75h4.567v8.25H3V6.683l-.75-.75v5.317c0 .414.336.75.75.75h8.25a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75z"
        fill="#2CE6CE"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default Edit;
