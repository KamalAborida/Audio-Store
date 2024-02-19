import React from "react";
import TextInptDiv from "../FormElements/TextInptDiv";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { paymentActions } from "../../Store/payment-slice";

function ShippingDetails() {
  const { address, zipCode, country, city } = useSelector(
    (state) => state.paymentValidation
  );
  const dispatch = useDispatch();

  const addressChangeHandler = (e) => {
    dispatch(paymentActions.setAddress(e.target.value));
  };

  const zipCodeChangeHandler = (e) => {
    dispatch(paymentActions.setZipCode(e.target.value));
  };

  const countryDropDownHandler = (value) => {
    dispatch(paymentActions.setCountry(value));
  };

  const cityDropDownHandler = (value) => {
    dispatch(paymentActions.setCity(value));
  };

  return (
    <div className="shippingDetails">
      <h6 className="shippingDetails__title partTitle">SHIPPING DETAILS</h6>
      <div className="inputsDiv">
        <TextInptDiv
          label="Address"
          placeholder="1137 William Chaplin"
          value={address.value}
          onChangeHandler={addressChangeHandler}
          error={address.isError}
        />
        <TextInptDiv
          label="ZIP Code"
          placeholder="10001"
          value={zipCode.value}
          onChangeHandler={zipCodeChangeHandler}
          error={zipCode.isError}
        />
        <div className="dropDownDiv">
          <label className="dropDownDiv__label">Country</label>
          <CountryDropdown
            classes="dropDownDiv__dropDown"
            value={country}
            onChange={countryDropDownHandler}
          />
        </div>
        <div className="dropDownDiv">
          <label className="dropDownDiv__label">Region</label>
          <RegionDropdown
            classes="dropDownDiv__dropDown"
            country={country}
            value={city}
            onChange={cityDropDownHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
