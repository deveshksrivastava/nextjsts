"use client";

import React, { useState } from "react";

function Header() {
  const [data, setData] = useState("HOME");
  return (
    <div>
      This page is Clinet component
      <h2>{data}</h2>
    </div>
  );
}

export default Header;
