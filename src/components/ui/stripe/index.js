import React, { useEffect, useRef, useState } from 'react';
import _ from 'lodash'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { loadStripe } from '@stripe/stripe-js';
import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import './index.scss'
import mapDivisions from 'countrycitystatejson'
import { showToast } from '../../utils';

const SubmitButton = ({ processing, error, children, disabled, onClick }) => (
  <button
    className={`btn btn-primary oss-13 white green-btn update-changes SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
    onClick={onClick}
  >
    {processing ? 'Processing...' : children}
  </button>
);


const CheckoutForm = ({ addCard, billingDetailsProp, addCardRequest, updateCardRequest, loading: loadingProp, submitTxt, deleteCard }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardNumerComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvvComplete, setCardCvvComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    name: ''
  });
  const [extraDetails, setExtraDetails] = useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    phone: ''
  });

  const [expDate, setExpDate] = useState(new Date());
  const [updateCardDetails, setUpdateDetails] = useState({
    exp_month: null,
    exp_year: null,
    is_default: false
  })
  // const expiryRef = useRef(null);
  const formRef = useRef(null);
  useEffect(() => {
    if (!billingDetailsProp) {
      // call in reset
      reset()
    }
    if (billingDetailsProp && billingDetailsProp.exp_month && billingDetailsProp.exp_year && !deleteCard) {
      let expiryDate = `${billingDetailsProp.exp_year}-${billingDetailsProp.exp_month.length == 1 ? '0' + billingDetailsProp.exp_month : billingDetailsProp.exp_month}`
      // expiryRef.current.value = expiryDate
      setExpDate(new Date(expiryDate))
      setUpdateDetails({
        exp_month: billingDetailsProp.exp_month,
        exp_year: billingDetailsProp.exp_year,
        is_default: billingDetailsProp.is_default,
      })
      const { billing_info } = billingDetailsProp
      setExtraDetails({
        address1: (billing_info.address_line_1 && billing_info.address_line_1 != 'undefined') ? billing_info.address_line_1 : '',
        address2: (billing_info.address_line_2 && billing_info.address_line_2 != 'undefined') ? billing_info.address_line_2 : '',
        city: (billing_info.city && billing_info.city != 'undefined') ? billing_info.city : '',
        state: (billing_info.state && billing_info.state != 'undefined') ? billing_info.state : '',
        zip_code: (billing_info.zipcode && billing_info.zipcode != 'undefined') ? billing_info.zipcode : '',
        country: (billing_info.country && billing_info.country != 'undefined') ? billing_info.country : '',
        phone: (billing_info.phone && billing_info.phone != 'undefined') ? billing_info.phone : '',
      })
    }
  }, [billingDetailsProp,  deleteCard])

  const checkEmpty = (obj) => {
    let resp = false
    _.forEach(obj, (value, key) => {
      if (value == '' || !value) {
        resp = true
      }
    })
    return resp
  }

  const cardUpdate = () => {
    updateCardRequest && updateCardRequest(updateCardDetails, extraDetails)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (extraDetails.phone.length != 10) {
      showToast({ type: 'error', message: "Phone Number should be 10 digits long" })
      return
    }
    if (!addCard) {
      cardUpdate()
      return
    }
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement('cardNumber');
      return;
    }

    if (checkEmpty(billingDetails)) {
      return
    }

    if (cardNumerComplete || cardExpiryComplete || cardCvvComplete) {
      setProcessing(true);
    }
    const cardElement = elements.getElement('cardNumber');

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
      metadata: extraDetails,
    });
    setProcessing(false);
    if (payload.error) {
      showToast({ type: 'error', message: payload.error && payload.error.message })
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
      const token = await stripe.createToken(cardElement, {
        name: billingDetails.name,
        address_line1: extraDetails.address1,
        address_line2: extraDetails.address2,
        address_city: extraDetails.city,
        address_state: extraDetails.state,
        address_zip: extraDetails.zip_code,
        address_country: extraDetails.country,
      });
      if (token.token) {
        formReset()
        reset()
        addCardRequest && addCardRequest(token.token.id, extraDetails)
      }
    }
  };

  const formReset = () => {
    let form = formRef.current
    Array.from(form.elements).forEach(field => {
      field.value = ''
    })
  }

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      name: ''
    });
    setExtraDetails({
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip_code: '',
      country: '',
      phone: ''
    })
    setUpdateDetails({
      exp_month: null,
      exp_year: null,
      is_default: false
    })
  };

  return <form className="Form" onSubmit={handleSubmit} ref={formRef}>
    <ul>
      {
        addCard && (
          <li className="center">
            <div className="">
              <label htmlFor="noc" className="form-label oss-16 black">Name on card</label>
              <input type="text" className="form-control osr-13 darkgrey" id="noc"
                required
                value={billingDetails.name}
                onChange={(e) => {
                  setBillingDetails({ ...billingDetails, name: e.target.value });
                }} />
            </div>
          </li>
        )
      }
      {/* ======================================Stripe Field========================================= */}
      <li className="center">
        <div className="">
          <label htmlFor="c-number" className="form-label oss-16 black">Card Number</label>
          {
            addCard ? (
              <CardNumberElement className="form-control osr-13 darkgrey" id="c-number" options={{ placeholder: 'Enter Account Number', showIcon: true }}
                onChange={(e) => {
                  setError(e.error);
                  setCardNumberComplete(e.complete);
                }}
              />
            ) : (
                <input type="text" className="form-control osr-13 darkgrey" id="c-number"
                  disabled={true}
                  value={`xxxx-xxxx-xxxx-${billingDetailsProp && billingDetailsProp.last4}`}
                />
              )
          }
        </div>
      </li>
      <div className="date-cvv">
        <li className="center left" style={addCard ? {} : { width: '50%' }}>
          <div className="">
            <label htmlFor="inputExpDate" className="form-label oss-16 black">Expiration Date</label>
            {
              addCard ? (
                <CardExpiryElement className="form-control osr-13 darkgrey" id="inputExpDate"
                  onChange={(e) => {
                    setError(e.error);
                    setCardExpiryComplete(e.complete);
                  }}
                />
              ) : (
                  <DatePicker
                    selected={expDate}
                    onChange={value => {
                      value = value.toISOString().split('T')[0]
                      if (!value || value == '') {
                        return
                      }
                      setExpDate(new Date(value))
                      value = value.split('-')
                      setUpdateDetails({ ...updateCardDetails, exp_year: parseInt(value[0]), exp_month: parseInt(value[1]) })
                    }}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                  />
                )
            }
          </div>
        </li>

        {
          addCard && (
            <li className="center right">
              <div className="">
                <label htmlFor="cvv-number" className="form-label oss-16 black" style={{ position: 'relative' }}>
                  CVV
                  <span className="icon-Question-Mark darkgrey"></span>
                  <span className="comment" style={{ position: 'absolute', background: '#011627', borderRadius: '3px 3px 3px 0px', color: '#fff', padding: '8px 25px 8px 11px', bottom: '40px', left: '40px' }}>CVV is the three-digit or four-digit <br/>security code on the back of your card.</span>
                  <span className="comment" style={{ position: 'absolute', background: 'transparent', borderRadius: '0px', bottom: '24px', left: '40px', width: '0px', height: '0px', borderLeft: '8px solid #011627', borderTop: '8px solid #011627', borderRight: '8px solid transparent', borderBottom: '8px solid transparent'  }}></span>
                  </label>
                <CardCvcElement id="cvv-number" className="cvv form-control osr-13 darkgrey"
                  onChange={(e) => {
                    setError(e.error);
                    setCardCvvComplete(e.complete);
                  }}
                />
              </div>
            </li>
          )
        }
      </div>
      <li className="center">
        <div className="">
          <label htmlFor="phoneNo" className="form-label oss-16 black">Phone Number</label>
          <input type="number" className="form-control osr-13 darkgrey" id="phoneNo"
            required
            value={extraDetails.phone}
            onChange={(e) => {
              setExtraDetails({ ...extraDetails, phone: e.target.value });
            }} />
        </div>
      </li>

      <li className="center">
        <div className="">
          <label htmlFor="address-l1" className="form-label oss-16 black">Address Line 1</label>
          <input type="text" className="form-control osr-13 darkgrey" id="address-l1"
            required
            value={extraDetails.address1}
            onChange={(e) => {
              setExtraDetails({ ...extraDetails, address1: e.target.value });
            }} />
        </div>
      </li>

      <li className="center">
        <div className="">
          <label htmlFor="address-l2" className="form-label oss-16 black">Address Line 2</label>
          <input type="text" className="form-control osr-13 darkgrey" id="address-l2"
            value={extraDetails.address2}
            onChange={(e) => {
              setExtraDetails({ ...extraDetails, address2: e.target.value });
            }} />
        </div>
      </li>
      <div className="cou-state">
        <li className="center left">
          <div className="">
            <label htmlFor="country" className="form-label oss-16 black">Country</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="country"
              required
              value={extraDetails.country || 'Select a country'}
              onChange={(e) => {
                setExtraDetails({ ...extraDetails, country: e.target.value });
              }} >
              <option value="">Select a Country</option>
              {
                [...mapDivisions.getCountries()].map((item, index) => {
                  return <option key={index} value={item.shortName}>{item.name}</option>
                })
              }
            </select>
          </div>
        </li>
        <li className="center right">
          <div className="">
            <label htmlFor="state" className="form-label oss-16 black">State</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="state"
              required
              disabled={extraDetails.country == ''}
              value={extraDetails.state || 'Choose'}
              onChange={(e) => {
                setExtraDetails({ ...extraDetails, state: e.target.value });
              }} >
              <option value="">Choose</option>
              {
                extraDetails.country != '' && [...mapDivisions.getStatesByShort(extraDetails.country)].map((item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })
              }
            </select>
          </div>
        </li>
      </div>
      <div className="cou-state">
        <li className="center left">
          <div className="">
            <label htmlFor="city" className="form-label oss-16 black">City</label>
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="city"
              required
              disabled={extraDetails.state == ''}
              value={extraDetails.city || 'Select a city'}
              onChange={(e) => {
                setExtraDetails({ ...extraDetails, city: e.target.value });
              }} >
              <option value="">Select a city</option>
              {
                extraDetails.state != '' && [...mapDivisions.getCities(extraDetails.country, extraDetails.state)].map((item, index) => {
                  return <option key={index} value={item}>{item}</option>
                })
              }
            </select>
          </div>
        </li>
        <li className="center right">
          <div className="">
            <label htmlFor="postalCode" className="form-label oss-16 black">Postal Code</label>
            <input id="postalCode" type="number" class="form-control osr-13 darkgrey" placeholder={'Enter your postal code'}
              required
              value={extraDetails.zip_code}
              onChange={(e) => {
                setExtraDetails({ ...extraDetails, zip_code: e.target.value });
              }} />
          </div>
        </li>
      </div>
      {
        !addCard && (billingDetailsProp && !billingDetailsProp.is_default) && (
          <li style={{ float: 'left', marginBottom: '0px' }}>
            <div className="notify-data-row1" style={{ borderBottom: 'none' }}>
              <label className="form-label oss-16 black">Default</label>
              <label className="switch left">
                <div className="">
                  <input id="default-toggle" type="checkbox" checked={updateCardDetails.is_default} onChange={(e) => {
                    setUpdateDetails({ ...updateCardDetails, is_default: e.target.checked ? 1 : 0 })
                  }} />
                  <span className="slider round" htmlFor="default-toggle"></span>
                </div>
              </label>
            </div>
          </li>
        )
      }
      {/* {
        addCard && (
          <>
          </>
        )
      } */}
    </ul>
    <SubmitButton processing={processing} error={error} disabled={!stripe} >{!loadingProp ? (submitTxt || 'Save Changes') : 'Processing...'}</SubmitButton>
  </form>

};

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const StripeForm = (props) => {
  return (
    <div className="AppWrapper">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm {...props} />
      </Elements>
    </div>
  );
};
export default StripeForm;



