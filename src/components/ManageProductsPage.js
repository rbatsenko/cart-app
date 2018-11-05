import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../actions/actions';
import ProductItemManage from './ProductItemManage';

class ManageProductsPage extends Component {
  state = {
    productName: '',
    productPrice: ''
  }

  handleRemove = id => this.props.onRemove(id);

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const { productName: name, productPrice: price } = this.state;
    const id = Math.max.apply(Math, this.props.products.map( product => product.id )) + 1;

    this.props.onAdd(id, name, price);
  }

  handleProductName = (e) => {
    this.setState({
      productName: e.target.value
    });
  }

  handleProductPrice = (e) => {
    this.setState({
      productPrice: parseInt(e.target.value)
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="products-page-title mb-5">Products management page</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="mb-3">Add new product</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form className="add-product-form mb-5" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-3">
                  <input type="text" className="form-control" id="productName" placeholder="Product name" onKeyUp={this.handleProductName} />
                  <div className="invalid-feedback">
                    Valid name is required.
                  </div>
                </div>
                <div className="col-3">
                  <input type="text" className="form-control" id="productPrice" placeholder="Product price" onKeyUp={this.handleProductPrice} />
                  <div className="invalid-feedback">
                    Valid price is required.
                  </div>
                </div>
                <div className="col-3">
                  <button className="btn btn-primary" type="submit">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 className="mb-4">Existing products</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row products-container">
              {
                this.props.products.map((product, key) => {
                  return <ProductItemManage key={key} id={product.id} {...product} onClick={this.handleRemove} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (id, name, price) => dispatch(addProduct({ id: id, name: name, price: price })),
    onRemove: id => dispatch(removeProduct({ id: id }))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductsPage);