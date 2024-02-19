import React, { useState } from "react";
import TextInptDiv from "../FormElements/TextInptDiv";
import { useDispatch, useSelector } from "react-redux";
import { paymentActions } from "../../Store/payment-slice";

function BillingDetails() {
  const { name, email, phone } = useSelector(
    (state) => state.paymentValidation
  );
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(paymentActions.setName(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(paymentActions.setEmail(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(paymentActions.setPhone(e.target.value));
  };

  return (
    <div className="billingDetails">
      <h6 className="billingDetails__title partTitle">BILLING DETAILS</h6>
      <div className="inputsDiv">
        <TextInptDiv
          label="Name"
          placeholder="Axel Russo"
          value={name.value}
          onChangeHandler={handleNameChange}
          error={name.isError}
        />
        <TextInptDiv
          label="Email Address"
          placeholder="Axel@xxx.com"
          value={email.value}
          onChangeHandler={handleEmailChange}
          error={email.isError}
        />
        <TextInptDiv
          label="Phone Number"
          placeholder="+20 01587659821"
          value={phone.value}
          onChangeHandler={handlePhoneChange}
          error={phone.isError}
        />
      </div>
    </div>
  );
}

export default BillingDetails;
