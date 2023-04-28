// @flow strict
import { Toolbar } from "@mui/material";
import * as React from "react";
import Header from "./header";

function MainLayout({ children }: any) {
  return (
    <div>
      <Header />
      <Toolbar />
      <div className=''>{children}</div>
    </div>
  );
}

export default MainLayout;
