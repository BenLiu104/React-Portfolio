import React, { useState } from 'react';

export default function Footer(props) {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright:
        <a className="text-dark" href="https://github.com/BenLiu104">
          Ben Liu
        </a>
      </div>
    </footer>
  );
}
