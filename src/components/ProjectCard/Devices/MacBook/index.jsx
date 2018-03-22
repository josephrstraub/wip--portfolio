// @flow
import * as React from 'react';

type Props = { image: string };

export default function MacBook(props: Props): React.Element<any> {
  return (
    <g transform="translate(1, 1)" stroke="#8492A5">
      <path d="M594,0 L98,0 C84.50415,0 73,11.0738184 73,24.7901127 L73,351.027995 L619,351.027985 L619,24.7901127 C618.999971,11.0728209 607.537479,0 594,0 Z" id="bezel" strokeWidth="2" fill="#FEFEFE" />
      <circle strokeWidth="2" cx="347" cy="19" r="4" />
      <g transform="translate(0, 351)">
        <path d="M640.812,31.01 L51.288,31.01 C20.641,31.01 0,20.494 0,16.022 L0,2.428 C0,1.084 1.335,0 2.995,0 L689.104,0 C690.766,0 692.103,1.084 692.103,2.428 L692.103,16.557 C692.096,20.092 676.112,31.01 640.812,31.01 Z" id="Shape" strokeWidth="2" fill="#FDFDFD" />
        <path d="M0.5,14.5 L690.242676,14.5" id="Line" strokeLinecap="square" />
      </g>
      <rect fill="#FFFFFF" x="95" y="39" width="501.073853" height="292.009" />
      <image xlinkHref={props.image} x="96" y="40" width="499.073853" height="290.009" preserveAspectRatio="xMidYMid slice" />
      <path d="M421,352 L421,355.087 C421,357.288 416.666719,357.952714 413.386719,357.952714 L278.815286,357.952714 C275.364286,357.952714 271,357.289 271,355.087 L271,352" id="touchpad" fill="#FFFFFF" />
    </g>
  );
}
