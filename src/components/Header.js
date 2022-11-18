import React, { useState } from 'react';
import headerImg from '../images/headerImg.jpg';
export default function Header(props) {
  return (
    <div
      className="text-bg-dark sticky-top"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div>{props.children}</div>
    </div>
  );
}
