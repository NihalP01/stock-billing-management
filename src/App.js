import "./App.css";
import Layout from "./components/common/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./components/pages/ProductListing";
import CreateProductForm from "./components/forms/CreateProductForm";
import CreateVendorForm from "./components/forms/CreateVendorForm";
import PurchaseEntryForm from "./components/forms/PurchaseEntryForm";
import SalesEntryForm from "./components/forms/SalesEntryForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout headerName={"Dashboard"}>
                <ProductListing />
              </Layout>
            }
          />
          <Route
            path="/create-product"
            element={
              <Layout headerName={"Create Product"}>
                <CreateProductForm />
              </Layout>
            }
          />
          <Route
            path="/create-vendor"
            element={
              <Layout headerName={"Create Vendor"}>
                <CreateVendorForm />
              </Layout>
            }
          />
          <Route
            path="/purchase-entry"
            element={
              <Layout headerName={"Purchase entry"}>
                <PurchaseEntryForm />
              </Layout>
            }
          />
          <Route
            path="/sales-entry"
            element={
              <Layout headerName={'Sales entry'}>
                <SalesEntryForm />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
