import React, { useRef } from "react";
// import ReactToPrint from "react-to-print";
import ReactToPrint from "react-to-print";
import ComponentPrint from "./ComponentPrint";
import "./stylePrint.css";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="invoice-container">
        <div className="invoice-header">
          <h1>Invoice</h1>
        </div>
        <div className="invoice-body">
          <div className="invoice-item">
            <span>Invoice Number:</span> INV-001
          </div>
          <div className="invoice-item">
            <span>Date:</span> February 18, 2024
          </div>
          <div className="invoice-item">
            <span>Customer:</span> John Doe
          </div>
          <div className="invoice-item">
            <span>Address:</span> 123 Main Street, Cityville
          </div>
          <div className="invoice-item">
            <span>Email:</span> john@example.com
          </div>
          <div className="invoice-item">
            <span>Phone:</span> 555-1234
          </div>
        </div>
        <div className="invoice-container-table">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>1</td>
                <td>$100.00</td>
                <td>$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="invoice-footer">Thank you for your business!</div>
      </div>
    </div>
  );
});

const ActionPrint = () => {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => (
            <div className="w-40 bg-blue-300 py-2 mx-5 rounded-lg cursor-pointer hover:opacity-80">
              <p className="font-semibold text-center">Print</p>
            </div>
          )}
          content={() => componentRef.current}
        />
        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={componentRef} />
        </div>{" "}
      </div>
    </>
  );
};

export default ActionPrint;
