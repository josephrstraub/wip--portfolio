// @flow
import * as React from 'react';
import Iphone from './Iphone';
import MacBook from './MacBook';

export default function Devices(): React.Element<any> {
  return (
    <svg width="100%" viewBox="0 0 897 452" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <MacBook image="http://lorempixel.com/output/abstract-q-c-640-480-7.jpg" />
        <Iphone />
      </g>
    </svg>
  );
}
