import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Assets = ({ assets }) => {
  const rowNumberTemplate = (_, rowIdx) => {
    return <span>{rowIdx.rowIndex + 1}</span>;
  };
  return (
    <div>
      <DataTable
        emptyMessage='No assets found'
        value={assets}
        tableStyle={{ minWidth: "50rem" }}
        loading={assets.length === 0}
      >
        <Column body={rowNumberTemplate} header='#'></Column>
        <Column field='name' header='Name'></Column>
        <Column field='description' header='Description'></Column>
        <Column field='category.name' header='Category'></Column>
        <Column field='location.name' header='Description'></Column>
      </DataTable>
    </div>
  );
};

export default Assets;
