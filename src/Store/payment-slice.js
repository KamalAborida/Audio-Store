import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    name: { value: "", isTouched: false, isError: false },
    email: { value: "", isTouched: false, isError: false },
    phone: { value: "", isTouched: false, isError: false },
    address: { value: "", isTouched: false, isError: false },
    zipCode: { value: "", isTouched: false, isError: false },
    country: "",
    city: "",
    paymentMethod: {
      method: "e-money",
      eNumber: "",
      ePin: "",
      isENumberError: false,
      isEPinError: false,
      isENumberTouched: false,
      isEPinTouched: false,
    },
  },
  reducers: {
    resetAll(state) {
      state.name = { value: "", isTouched: false, isError: false };
      state.email = { value: "", isTouched: false, isError: false };
      state.phone = { value: "", isTouched: false, isError: false };
      state.address = { value: "", isTouched: false, isError: false };
      state.zipCode = { value: "", isTouched: false, isError: false };
      state.country = "";
      state.city = "";
      state.paymentMethod = {
        method: "e-money",
        eNumber: "",
        ePin: "",
        isENumberError: false,
        isEPinError: false,
        isENumberTouched: false,
        isEPinTouched: false,
      };
    },
    setName(state, action) {
      state.name.isTouched = true;
      if (!/^[a-zA-Z\s]+$/.test(action.payload)) {
        state.name.isError = true;
      } else {
        state.name.isError = false;
      }
      state.name.value = action.payload;
    },
    setEmail(state, action) {
      state.email.isTouched = true;
      if (
        !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(action.payload)
      ) {
        state.email.isError = true;
      } else {
        state.email.isError = false;
      }
      state.email.value = action.payload;
    },
    setPhone(state, action) {
      state.phone.isTouched = true;
      if (!/^\d{11}$/.test(action.payload)) {
        state.phone.isError = true;
      } else {
        state.phone.isError = false;
      }
      state.phone.value = action.payload;
    },
    setAddress(state, action) {
      state.address.isTouched = true;
      state.address.isError = action.payload.trim() === "";
      state.address.value = action.payload;
    },
    setZipCode(state, action) {
      state.zipCode.isTouched = true;
      state.zipCode.isError = !/^\d{5}$/.test(action.payload);
      state.zipCode.value = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setPaymentMethod(state, action) {
      state.paymentMethod.method = action.payload;
    },
    setENumber(state, action) {
      state.paymentMethod.eNumber = action.payload;
      state.paymentMethod.isENumberTouched = true;
      if (!/^\d{11}$/.test(action.payload)) {
        state.paymentMethod.isENumberError = true;
      } else {
        state.paymentMethod.isENumberError = false;
      }
    },
    setEPin(state, action) {
      state.paymentMethod.ePin = action.payload;
      state.paymentMethod.isEPinTouched = true;
      if (!/^\d{4}$/.test(action.payload)) {
        state.paymentMethod.isEPinError = true;
      } else {
        state.paymentMethod.isEPinError = false;
      }
    },
  },
});

export const paymentActions = paymentSlice.actions;

export default paymentSlice;
