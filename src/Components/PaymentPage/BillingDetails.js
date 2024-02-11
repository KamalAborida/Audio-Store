import TextInptDiv from "../FormElements/TextInptDiv";

function BillingDetails() {
  return (
    <div className="billingDetails">
      <h6 className="billingDetails__title partTitle">BILLING DETAILS</h6>
      <div className="inputsDiv">
        <TextInptDiv label="Name" placeholder="Axel Russo" />
        <TextInptDiv label="Email Adress" placeholder="Axel@xxx.com" />
        <TextInptDiv label="Phone Number" placeholder="+20 01587659821" />
      </div>
    </div>
  );
}

export default BillingDetails;
