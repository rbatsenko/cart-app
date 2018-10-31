import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './Cart';

class CheckoutPage extends Component {

  handleKeyUp = (e) => {
    e.target.value ? e.target.classList.remove('is-invalid') : e.target.classList.add('is-invalid');
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.history.push('/confirmation');
  }

  render() {
    const { authentication } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <Cart />
          </div>

          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" noValidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" defaultValue={authentication.loggedIn ? authentication.user.firstName : ''} required onKeyUp={this.handleKeyUp} />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" defaultValue={authentication.loggedIn ? authentication.user.lastName : ''} required onKeyUp={this.handleKeyUp} />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Phone number</label>
                <input type="text" className="form-control" id="phone" placeholder="XXXXXXXXX" defaultValue={authentication.loggedIn ? authentication.user.phone : ''} required onKeyUp={this.handleKeyUp} />
                <div className="invalid-feedback">
                  Please enter your phone number.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder="ul. Winogrady 3/5" defaultValue={authentication.loggedIn ? authentication.user.address : ''} required onKeyUp={this.handleKeyUp} />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3">
                  <label htmlFor="country">Country</label>
                  <select className="custom-select d-block w-100" id="country" required>
                    <option value="">Choose...</option>
                    <option>Poland</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="state">City</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>Poznań</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" className="form-control" id="zip" required />
                  <div className="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
              </div>
              
              <hr className="mb-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="d-block my-3">
                <div className="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" defaultChecked required />
                  <label className="custom-control-label" htmlFor="credit">Credit card</label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-name">Name on card</label>
                  <input type="text" className="form-control" id="cc-name" defaultValue={authentication.loggedIn ? authentication.user.firstName + ' ' + authentication.user.lastName : ''} required onKeyUp={this.handleKeyUp} />
                  <small className="text-muted">Full name as displayed on card</small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cc-number">Credit card number</label>
                  <input type="text" className="form-control" id="cc-number" required onKeyUp={this.handleKeyUp} />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-expiration">Expiration</label>
                  <input type="text" className="form-control" id="cc-expiration" required onKeyUp={this.handleKeyUp} />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label htmlFor="cc-cvv">CVV</label>
                  <input type="text" className="form-control" id="cc-cvv" required onKeyUp={this.handleKeyUp} />
                  <div className="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.handleSubmit}>Continue to checkout</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authentication } = state;
  return ({
    authentication
  });
}

export default connect(mapStateToProps)(CheckoutPage);