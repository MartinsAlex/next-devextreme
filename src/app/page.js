"use client";
import React, { useCallback, useState } from "react";
import DataGrid, { Column, Button, Selection } from "devextreme-react/data-grid";
import { employees } from "./data.js";

const buttonRender = (data) => {
  return       <button
  type="button"
  className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit </button>;
}

export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center min-h-screen border border-slate-600 border-dashed rounded-md">
      <div className="max-w-2xl">
        <React.Fragment>
          <DataGrid
            dataSource={employees}
            showBorders={true}
            hoverStateEnabled={true}
            keyExpr="ID"
            //onSelectionChanged={onSelectionChanged}
          > 
            <Selection mode="single" />
            <Column dataField="Prefix" caption="Title" width={70} />
            <Column dataField="FirstName" />
            <Column dataField="LastName" />
            <Column dataField="Position" width={180} />
            <Column dataField="BirthDate" dataType="date" />
            <Column dataField="HireDate" dataType="date" />
            <Column dataField="Tags" >
                <Button
                    render={buttonRender}
                />
            </Column>
            <Column type="buttons">
                <Button
                    render={buttonRender}
                />
            </Column>
          </DataGrid>
        </React.Fragment>
      </div>
    </main>
  );
}
