import TextInptDiv from "../FormElements/TextInptDiv";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

function ShippingDetails() {
  return (
    <div className="shippingDetails">
      <h6 className="shippingDetails__title partTitle">SHIPPING DETAILS</h6>
      <div className="inputsDiv">
        <TextInptDiv label="Address" placeholder="1137 William Chaplin" />
        <TextInptDiv label="ZIP Code" placeholder="10001" />
        <div className="dropDownDiv">
          <label className="dropDownDiv__label">Country</label>
          <CountryDropdown
            classes="dropDownDiv__dropDown"
            value="Egypt"
            onChange={(e) => console.log(e)}
          />
        </div>
        <div className="dropDownDiv">
          <label className="dropDownDiv__label">Region</label>
          <RegionDropdown
            classes="dropDownDiv__dropDown"
            country="Egypt"
            onChange={(e) => console.log(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingDetails;
