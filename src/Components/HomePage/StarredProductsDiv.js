import { useSelector } from "react-redux";
import ProductDiv from "../ProductDiv/ProductDiv";

function StarredProductsDiv() {
  const data = useSelector((state) => state.data.items);

  return (
    <div className="homePage__starProductsDiv">
      {data.record &&
        data.record
          .filter((element, indx) => {
            if (indx === 4 || indx === 5 || indx === 0) {
              return element;
            }
          })
          .map((element, index) => {
            return (
              <div className="homePage__starProductsDiv__product" key={`${element.id}`}>
                <ProductDiv
                  textPosition="left"
                  isNew={false}
                  title={`${element.name}`}
                  desription={`${index === 0 ? element.description : ""}`}
                  type="toSee"
                  btnType="2"
                  category={`${element.category}`}
                  id={`${element.id}`}
                  key={`${element.id}`}
                />
              </div>
            );
          })}
    </div>
  );
}

export default StarredProductsDiv;
