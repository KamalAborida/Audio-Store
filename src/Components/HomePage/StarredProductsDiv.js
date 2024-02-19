import { useSelector } from "react-redux";
import ProductDiv from "../ProductDiv/ProductDiv";

function StarredProductsDiv() {
  const data = useSelector((state) => state.data.items);

  return (
    <div className="homePage__starProductsDiv">
      {data.record && (
        <>
          <div className="homePage__starProductsDiv__product">
            <ProductDiv
              textPosition="left"
              isNew={false}
              title={data.record[5].name}
              desription={
                "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
              }
              type="toSee"
              btnType="2"
              category={data.record[5].category}
              id={data.record[5].id}
            />
          </div>
          <div className="homePage__starProductsDiv__product">
            <ProductDiv
              textPosition="left"
              isNew={false}
              title={data.record[4].name}
              desription={""}
              type="toSee"
              btnType="2"
              category={data.record[4].category}
              id={data.record[4].id}
            />
          </div>
          <div className="homePage__starProductsDiv__product">
            <ProductDiv
              textPosition="left"
              isNew={false}
              title={data.record[0].name}
              desription={""}
              type="toSee"
              btnType="2"
              category={data.record[0].category}
              id={data.record[0].id}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default StarredProductsDiv;

// data.record
//           .filter((element, indx) => {
//             if (indx === 4 || indx === 5 || indx === 0) {
//               return element;
//             }
//           })
//           .map((element, index) => {
//             return (
//               <div className="homePage__starProductsDiv__product" key={`${element.id}`}>
//                 <ProductDiv
//                   textPosition="left"
//                   isNew={false}
//                   title={`${element.name}`}
//                   desription={`${index === 0 ? element.description : ""}`}
//                   type="toSee"
//                   btnType="2"
//                   category={`${element.category}`}
//                   id={`${element.id}`}
//                   key={`${element.id}`}
//                 />
//               </div>
//             );
//           })}
