"use client";

import React, { useState } from "react";

function Header() {
  const [data, setData] = useState("HOME");
  return (
    <div>
      <h2>NOT WORKING</h2>
      This page can be : 1. Clinet component 2. server component will be
      compined into app.
      <h2>{data}</h2>
    </div>
  );
}

export default Header;
