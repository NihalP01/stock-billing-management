import "./App.css";
import Layout from "./components/common/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProductForm from "./components/forms/CreateProductForm";
import CreateVendorForm from "./components/forms/CreateVendorForm";
import PurchaseEntryForm from "./components/forms/PurchaseEntryForm";
import SalesEntryForm from "./components/forms/SalesEntryForm";
import ProductListing from "./components/sections/ProductListing";
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout headerName={"Stock"}>
                <ProductListing />
              </Layout>
            }
          />
          <Route
            path="/create-product"
            element={
              <Layout headerName={"Add Product"}>
                <CreateProductForm />
              </Layout>
            }
          />
          <Route
            path="/create-vendor"
            element={
              <Layout headerName={"Add Vendor"}>
                <CreateVendorForm />
              </Layout>
            }
          />
          <Route
            path="/purchase-entry"
            element={
              <Layout headerName={"Purchase"}>
                <PurchaseEntryForm />
              </Layout>
            }
          />
          <Route
            path="/sales-entry"
            element={
              <Layout headerName={"Sales"}>
                <SalesEntryForm />
              </Layout>
            }
          />
          <Route
            path="/list"
            element={
              <Layout headerName={"Testing List"}>
                <DashboardHome />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
