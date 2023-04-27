import * as React from "react";
import Homepage from "./container/homepage";
import MainLayout from "./layout/main-layout";

export default function App() {
  return (
    <MainLayout>
      <Homepage />
    </MainLayout>
  );
}
