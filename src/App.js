import * as React from "react";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";
import "/node_modules/@syncfusion/ej2/material.css";

import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import PyramidChart from "./Charts/PyramidChart";
import StackedArea from "./Charts/StackedChart";
import TestCoverage from "./Charts/TestCoverage";

import "./App.css";

const WebDashboard = () => {
  const onCreate = () => {
    //logic goes here
  };

  const onPanelResize = (args) => {
    if (
      args.element &&
      args.element.querySelector(".e-panel-container .e-panel-content div div div")
    ) {
      let chartObj = args.element.querySelector(".e-panel-container .e-panel-content div div div")
        .ej2_instances[0];
      const height = args.element.querySelector(".e-panel-container .e-panel-content").clientHeight;
      chartObj.height = `${height - 20}`;
      chartObj.width = "100%";
      chartObj.refresh();
    }
  };

  return (
    <div className="control-section" id="predefine_control">
      <div className="content-wrapper" style={{ maxWidth: "100%" }}>
        <DashboardLayoutComponent
          created={onCreate}
          columns={6}
          id="predefine_dashboard"
          cellSpacing={[5, 5]}
          resizeStop={onPanelResize}
          allowResizing={true}
          allowDragging={true}
        >
          <PanelsDirective>
            <PanelDirective
              header=""
              content={TestCoverage}
              sizeX={1}
              sizeY={1}
              row={0}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={LineChart}
              sizeX={2}
              sizeY={1}
              row={0}
              col={1}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={StackedArea}
              sizeX={3}
              sizeY={1}
              row={0}
              col={3}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={PyramidChart}
              sizeX={4}
              sizeY={2}
              row={2}
              col={0}
            ></PanelDirective>
            <PanelDirective
              header=""
              content={PieChart}
              sizeX={2}
              sizeY={2}
              row={2}
              col={4}
            ></PanelDirective>
          </PanelsDirective>
        </DashboardLayoutComponent>
      </div>
    </div>
  );
};

export default WebDashboard;
