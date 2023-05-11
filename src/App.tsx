import * as React from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import Homepage from "./pages/homepage";
import ProductView from "./pages/product-view";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:id' element={<ProductView />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
