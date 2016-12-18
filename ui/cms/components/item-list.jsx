
import React from 'react';
import EditProductContainer from './edit-product-container';
import DeleteProductContainer from './delete-product-container';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { discountedPrice } from '../product-helper';
import { imgUrl } from '../../common/helper'

function imageFormatter(cell, row){
  return '<img style="width: 50px" src="' + imgUrl(row.img_thumb) +'">'; 
}

function priceFormatter(cell, row){
  let dp = discountedPrice(row)
  if (dp != row.price) {
    return '<s><i class="glyphicon glyphicon-eur"></i> ' + cell + '</s> <span style="color: red"><i class="glyphicon glyphicon-eur"></i>'+ dp + '</span>';
  }
  return '<i class="glyphicon glyphicon-eur"></i> ' + cell;
}

function titleFormatter(cell, row){
  if (!row.available) {
    return '<s>' + cell + '</s>'
  }
  return cell
}

function enabledFormatter(cell, row){
  if (!row.enabled) {
    return '<i class="glyphicon glyphicon-eye-close">'
  }
  return '<i class="glyphicon glyphicon-eye-open">'
}

function actionFormatter(cell, row){
  return (<div className="form-cmd-group"><EditProductContainer mode="edit" product={row}/> <EditProductContainer mode="copy" product={row}/> <DeleteProductContainer product={row}/></div>);
}

const ProductList = (data) => (
    <div>
      <h3>{data.products.length} Produkte</h3>
      <EditProductContainer mode="create"/>
      <BootstrapTable data={data.products} striped={true} hover={true} condensed={true} pagination={false} insertRow={false} deleteRow={false} search={true}>
        <TableHeaderColumn dataField="img_thumb"  width="60" dataFormat={imageFormatter}></TableHeaderColumn>
        <TableHeaderColumn dataField="title"  dataFormat={titleFormatter} dataSort={true}>Titel</TableHeaderColumn>
        <TableHeaderColumn dataField="category" width="160" dataSort={true}>Kategorie</TableHeaderColumn>
        <TableHeaderColumn dataField="sortIndex" width="60" dataSort={true}>Reihenfolge</TableHeaderColumn>
        <TableHeaderColumn dataField="enabled" width="60" dataFormat={enabledFormatter} dataSort={true}>Aktiv</TableHeaderColumn>
        <TableHeaderColumn dataField="id" width="200" isKey={true} dataAlign="left" dataSort={true}>Produkt ID</TableHeaderColumn>
        <TableHeaderColumn dataField="price" width="120" dataFormat={priceFormatter} dataSort={true}>Preis</TableHeaderColumn>
        <TableHeaderColumn dataField="foo" dataFormat={actionFormatter}></TableHeaderColumn>
      </BootstrapTable>
    </div>
)

export default ProductList;
