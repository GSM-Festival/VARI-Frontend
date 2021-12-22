import * as React from "react";

function LogoBig(props) {
  return (
    <svg width={247} height={57} fill="none" {...props}>
      <path
        d="M61.407.36L42.367 57h-22.96L.367.36h18.88l11.68 38.96L42.527.36h18.88z"
        fill="#FFCB3D"
      />
      <path
        d="M117.703 48.44h-18.88l-2.8 8.56h-18.64L98.103.36h20.48L139.223 57h-18.72l-2.8-8.56zm-4.32-13.36l-5.12-15.76-5.12 15.76h10.24z"
        fill="#474BFF"
      />
      <path
        d="M187.738 57l-10.64-20.32h-.08V57h-17.76V.36h26.4c4.586 0 8.506.827 11.76 2.48 3.253 1.6 5.68 3.813 7.28 6.64 1.653 2.773 2.48 5.92 2.48 9.44 0 3.787-1.067 7.147-3.2 10.08-2.08 2.933-5.094 5.04-9.04 6.32L207.258 57h-19.52zm-10.72-32.16h7.04c1.706 0 2.986-.373 3.84-1.12.853-.8 1.28-2.027 1.28-3.68 0-1.493-.454-2.667-1.36-3.52-.854-.853-2.107-1.28-3.76-1.28h-7.04v9.6z"
        fill="#DE3190"
      />
      <path d="M246.612.36V57h-17.76V.36h17.76z" fill="#3ABF7C" />
    </svg>
  );
}

const MemoLogoBig = React.memo(LogoBig);
export default MemoLogoBig;
