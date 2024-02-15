import React, { useRef } from "react";
// import ReactToPrint from "react-to-print";
import ReactToPrint from "react-to-print";
import ComponentPrint from "./ComponentPrint";

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1>Hello, World!</h1>
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
            <div className="bg-blue-500 cursor-pointer py-1 ">
              Print cepatkan
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
