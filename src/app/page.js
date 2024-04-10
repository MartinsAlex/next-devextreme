"use client";
import React, { useCallback, useState } from "react";
import DataGrid, { Column, Button, Selection } from "devextreme-react/data-grid";
import { employees } from "./data.js";

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
            <Column type="buttons">
                <Button
                    name="save"
                    cssClass="my-class"
                />
            </Column>
          </DataGrid>
        </React.Fragment>
      </div>
    </main>
  );
}
