import * as React from 'react';

const Hambuger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={64}
    height={64}
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 21h40M12 33h40M12 45h40"
    />
  </svg>
);
export default Hambuger;
