import { connect } from 'react-redux'
import ProductList from './product-list';
import { itemMapToList } from '../../common/helper';

const mapProducts = function(state) {
  return { 
    products: itemMapToList(state.products, ["category", "sortIndex"])
  }
}

const mapDispatchToProps =  ({
})

const ProductListContainer = connect(
    mapProducts,
    mapDispatchToProps
)(ProductList)

export default ProductListContainer;
