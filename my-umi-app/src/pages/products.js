import {connect} from 'dva';
import ProductsList from '../components/ProductsList';

const Products = ({dispatch,products}) =>{
    function handleDelete(id) {
        dispatch({
            type:'products/delete',
            payload:id,
        });

    }
    return (
        <div>
            <h2>List of Products</h2>
            <ProductsList onDelete={handleDelete} products={products}></ProductsList>
        </div>
    );
}

export default connect(({products}) =>({
    products,
}))(Products);