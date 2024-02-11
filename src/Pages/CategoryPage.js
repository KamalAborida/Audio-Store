import { useParams } from "react-router-dom";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../Store/data-slice";

function CategoryPage() {
  const params = useParams();
  const data = useSelector((state) => state.data.items);
  const dispatch = useDispatch();
  const productsList = [];
  const imagesArray = [];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!data.record || data.record.length === 0) {
      dispatch(dataActions.initiateData(data));
    }
  });

  if (data) {
    data.record.forEach((element) => {
      if (
        element.category.toLowerCase() === params.categoryName.toLowerCase()
      ) {
        productsList.push(element);
        const img = require(`../Assets/product-${element.slug}/desktop/image-category-page-preview.jpg`);
        imagesArray.push(img);
      }
    });
    console.log(productsList, imagesArray);
  }

  return (
    <div className="categoryPage">
      <header className="categoryPage__header">
        <div className="categoryPage__header__container">
          <h1 className="categoryPage__header__container__title">
            {params.categoryName}
          </h1>
        </div>
      </header>
      <div className="categoryPage__productsList">
        {productsList.map((elem, indx) => {
          return (
            <ProductDiv
              textPosition="left"
              imgPosition={indx % 2 !== 0 ? "right" : "left"}
              img={imagesArray[indx]}
              isNew={false}
              title={elem.name}
              desription={elem.description}
              type="toSee"
              btnType="2"
              category={elem.category}
              id={elem.id}
              key={elem.id}
            />
          );
        })}
      </div>
      <ProductCollection />
    </div>
  );
}

export default CategoryPage;

export async function loader() {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/65b5abfe266cfc3fde821ce0/latest",
      {
        method: "GET",
        headers: {
          "X-Master-Key":
            "$2a$10$rzjxnlzPw5x0zRg56AR.1eZUUHyt9lsMxkGOa//ZP6/7qkPYr/fPW",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Could not fetch events.");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Could not fetch events.");
  }
}
