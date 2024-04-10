import React from "react";
import {
  DataGrid,
  HeaderFilter,
  Search,
  Column,
} from "devextreme-react/data-grid";
import { employees } from "./data.js";

const searchFields = ["Name", "Scheduled"];
const MainDataGrid = () => (
  <DataGrid
    id="queryData"
    dataSource={employees}
    columnAutoWidth={true}
    showRowLines={true}
    showBorders={true}
    keyExpr="ID"
  >
    <Column dataField="Name" />
    <Column dataField="Tags" />
  </DataGrid>
);
export default MainDataGrid;
