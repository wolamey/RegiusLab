// src/Components/CertificatesSlider/CertCover.jsx
import React from 'react';

export default function CertCover() {
  return (
    <svg
      className="certificates__cover-svg"
      viewBox="0 0 300 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* ... всё содержимое SVG как было ... */}
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#1c1c1c" />
          <stop offset="60%" stopColor="#0f0f0f" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4D77A" />
          <stop offset="45%" stopColor="#AF7B20" />
          <stop offset="100%" stopColor="#7a5410" />
        </linearGradient>
        <linearGradient id="goldSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7C66B" />
          <stop offset="100%" stopColor="#AF7B20" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#AF7B20" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#AF7B20" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="300" height="400" fill="url(#bgGrad)" />
      <circle cx="150" cy="150" r="130" fill="url(#glow)" />

      <rect x="14" y="14" width="272" height="372" rx="16" ry="16"
        fill="none" stroke="url(#goldSoft)" strokeWidth="1.2" opacity="0.7" />
      <rect x="22" y="22" width="256" height="356" rx="12" ry="12"
        fill="none" stroke="url(#goldSoft)" strokeWidth="0.6" opacity="0.4" />

      {[
        [26, 26, 1, 1],
        [274, 26, -1, 1],
        [26, 374, 1, -1],
        [274, 374, -1, -1],
      ].map(([x, y, sx, sy], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
          <path d="M0 0 L26 0 M0 0 L0 26" stroke="url(#goldSoft)"
            strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="6" cy="6" r="1.6" fill="#AF7B20" />
        </g>
      ))}

      <g opacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={150 + Math.cos(a) * 70}
              y1={150 + Math.sin(a) * 70}
              x2={150 + Math.cos(a) * 130}
              y2={150 + Math.sin(a) * 130}
              stroke="#AF7B20" strokeWidth="0.8" strokeLinecap="round"
            />
          );
        })}
      </g>

      <path d="M110 232 L150 260 L190 232 L190 300 L150 276 L110 300 Z"
        fill="url(#goldSoft)" opacity="0.9" />
      <path d="M110 232 L150 260 L190 232"
        fill="none" stroke="#7a5410" strokeWidth="1" />

      <g className="certificates__medal">
        <circle cx="150" cy="150" r="58" fill="url(#gold)" />
        <circle cx="150" cy="150" r="58" fill="none" stroke="#7a5410" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="48" fill="none" stroke="#3a2a08" strokeWidth="1" opacity="0.6" />
        <g opacity="0.9">
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i * 15 * Math.PI) / 180;
            return (
              <line
                key={i}
                x1={150 + Math.cos(a) * 58}
                y1={150 + Math.sin(a) * 58}
                x2={150 + Math.cos(a) * 63}
                y2={150 + Math.sin(a) * 63}
                stroke="#7a5410" strokeWidth="1.4" strokeLinecap="round"
              />
            );
          })}
        </g>
        <path
          d="M150 118 L158 140 L182 140 L163 154 L170 176 L150 163 L130 176 L137 154 L118 140 L142 140 Z"
          fill="#3a2a08" opacity="0.85"
        />
        <circle cx="150" cy="150" r="10" fill="none" stroke="#3a2a08" strokeWidth="1.4" opacity="0.7" />
      </g>

      <g className="certificates__particles">
        {[
          [60, 90], [240, 110], [80, 300], [230, 320],
          [50, 200], [255, 200], [120, 60], [190, 70],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.6" fill="#E7C66B" opacity="0.7" />
        ))}
      </g>
    </svg>
  );
}