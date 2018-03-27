// @flow
import * as React from 'react';

export default function Iphone(): React.Element<any> {
  return (
    <g id="iphone" transform="translate(700, 100)" stroke="#7E89A3">
      <path d="M130,257.964 C130,266.797 122.809,273.956 113.938,273.956 L16.063,273.956 C7.192,273.956 0.001,266.797 0.001,257.964 L0.001,16.073 C0.001,7.24 7.192,0.081 16.063,0.081 L113.938,0.081 C122.809,0.081 130,7.24 130,16.073 L130,257.964 L130,257.964 Z" id="bezel" strokeWidth="2" fill="#FDFDFD" />
      <rect id="screen" fill="#FFFFFF" x="9" y="36" width="111.93" height="199.084" />
      <image xlinkHref="http://lorempixel.com/output/abstract-q-c-640-480-7.jpg" x="9" y="36" width="111.93" height="199.084" preserveAspectRatio="xMidYMid slice" />
      <path d="M77,25.746 C77,26.381 76.561,26.893 76.02,26.893 L55.918,26.893 C55.376,26.893 54.938,26.38 54.938,25.746 L54.938,23.166 C54.938,22.531 55.377,22.019 55.918,22.019 L76.02,22.019 C76.561,22.019 77,22.532 77,23.166 L77,25.746 L77,25.746 Z" id="speaker" />
      <circle id="camera" cx="66" cy="12" r="3" />
      <ellipse id="lock" cx="65.04" cy="254.001" rx="10.04" ry="10.001" />
    </g>
  );
}