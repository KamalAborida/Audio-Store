function FeaturesList(props) {
  return (
    <div className="productDetails__content__features__featureslist">
      <h3 className="productDetails__content__features__featureslist__title">
        FEATURES
      </h3>
      <br />
      <p className="productDetails__content__features__featureslist__p1">
        {props.features}
      </p>
    </div>
  );
}

export default FeaturesList;
