import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const assetsByCat = (assets, cat) => {
  return assets.filter((asset) => asset.category?._id === cat._id);
};

const Bycategory = ({ assets, categories }) => {
  const rowNumberTemplate = (_, rowIdx) => {
    return <span>{rowIdx.rowIndex + 1}</span>;
  };
  return (
    <div className='card'>
      <Accordion>
        {categories.map((category) => (
          <AccordionTab header={category.name} key={category._id}>
            {assetsByCat(assets, category).length === 0 ? (
              "No assets"
            ) : (
              <DataTable
                emptyMessage='No assets found'
                loading={assetsByCat(assets, category).length === 0}
                value={assetsByCat(assets, category)}
              >
                <Column body={rowNumberTemplate} header='#'></Column>
                <Column field='category.name' header='Name'></Column>
                <Column
                  field='category.description'
                  header='Description'
                ></Column>
                <Column field='location.name' header='Location'></Column>
              </DataTable>
            )}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default Bycategory;
