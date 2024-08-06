/** @format */

import React from "react";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 35;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={50}
      cy={50}
      fill='transparent'
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"10px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap='round'
    ></circle>
  );
};

const Pie = ({ percentage, color }) => {
  const pct = cleanPercentage(percentage);
  return (
    <div style={{ position: "relative", width: "100px", height: "100px" }}>
      <svg width={100} height={100}>
        <g transform={`rotate(-90 ${"50 50"})`}>
          <Circle colour='lightgrey' />
          <Circle colour={color} pct={pct} />
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          fontSize: "6px",
        }}
      >
        <div style={{ fontSize: "10px" }}>{pct.toFixed(0)}%</div>
        <div>Goal</div>
        <div>Completed</div>
      </div>
    </div>
  );
};

export default Pie;
