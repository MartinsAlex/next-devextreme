"use client";

import { Button } from "devextreme-react/button";
import MainDataGrid from "./MainDataGrid";
import { Breadcrumb } from "antd"; // Import the Breadcrumb from Ant Design
import { useState } from "react";
import { QueryBuilder } from "react-querybuilder";
import { Button as AntButton, Drawer, Radio, Space } from "antd";
import { simpleProducts, productLabel } from "./data.js";
import TagBox from "devextreme-react/tag-box";

const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

export default function QueryBuilderPage() {
  const [slideOverOpen, setSlideOverOpen] = useState(false);

  const showDrawer = () => {
    setSlideOverOpen(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setSlideOverOpen(false);
  };

  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  const [query, setQuery] = useState({
    combinator: "and",
    rules: [
      { field: "firstName", operator: "=", value: "Steve" },
      { field: "lastName", operator: "=", value: "Vai" },
    ],
  });

  return (
    <>
      <main className="min-h-screen flex justify-center pt-12 bg-[#f5f5f5]">
        <div className="p-4 max-w-[1500px]">

          <div className="flex justify-between">
            {/* Breadcrumb added for navigational context */}
            <Breadcrumb
              items={[
                {
                  title: "Home",
                },
                {
                  title: <a href="">Controls</a>,
                },
                {
                  title: "New control",
                },
              ]}
            />
            <button className="p-1 px-2 bg-slate-400 rounded hover:bg-slate-600 text-white">Save</button>
          </div>

          {/* Button group with margin-bottom to space from grid */}
          <div className="mb-4 mt-8">
            <Button
              text="Select"
              className="mr-1"
              onClick={() => setSlideOverOpen(true)}
            />{" "}
            {/* Select button */}
            <Button
              text="Filters"
              onClick={() => setShowFiltersPanel(!showFiltersPanel)}
            />{" "}
            {/* Filters button */}
          </div>

          {showFiltersPanel && (
            <>
              <QueryBuilder
                fields={fields}
                query={query}
                onQueryChange={setQuery}
                controlClassnames={{ queryBuilder: "queryBuilder-branches" }}
              />
            </>
          )}

          <MainDataGrid />
        </div>
      </main>
      <Drawer
        title="Select objects and attributes"
        placement={"right"}
        width={500}
        onClose={onClose}
        open={slideOverOpen}
        extra={
          <Space>
            <AntButton onClick={onClose}>Cancel</AntButton>
            <AntButton type="primary" onClick={onClose}>
              Apply
            </AntButton>
          </Space>
        }
      >
        <div className="dx-field">
          <div className="dx-field-label">Objects</div>
          <div className="dx-field-value">
            <TagBox
              items={simpleProducts}
              searchEnabled={true}
              inputAttr={productLabel}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
}
