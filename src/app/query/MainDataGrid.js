import React from "react";
import {
  DataGrid,
  HeaderFilter,
  Search,
  Column,
  Button,
} from "devextreme-react/data-grid";
import { employees } from "./data.js";

const buttonRender = (data) => {
  return       <button
  type="button"
  className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit </button>;
}

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
    <Column dataField="Type" />
    <Column dataField="Tags" />
    <Column dataField="Last run date" />

  </DataGrid>
);
export default MainDataGrid;
