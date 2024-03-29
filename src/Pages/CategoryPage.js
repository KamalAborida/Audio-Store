import { useNavigation, useParams } from "react-router-dom";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../Store/data-slice";
// import loadingIndicator from "../Assets/Wedges-3s-200px.gif"
import loadingIndicator from "../Assets/Infinity-1s-263px.gif";
import { motion } from "framer-motion";

function CategoryPage() {
  const params = useParams();
  const navigation = useNavigation();
  const data = useSelector((state) => state.data.items);
  const dispatch = useDispatch();
  const productsList = [];
  const imagesArray = [];

  useEffect(() => {
    const loadEvents = async () => {
      const resp = await loader();
      dispatch(dataActions.initiateData(resp));
    };

    window.scrollTo(0, 0);

    if (!data.record) {
      loadEvents();
    }
  }, [data, dispatch, params.categoryName]);

  if (data && data.record) {
    data.record.forEach((element) => {
      if (
        element.category.toLowerCase() === params.categoryName.toLowerCase()
      ) {
        productsList.push(element);
        let img;
        if (window.innerWidth > 900) {
          img = require(`../Assets/product-${element.slug}/desktop/image-category-page-preview.jpg`);
        } else if (window.innerWidth > 350) {
          img = require(`../Assets/product-${element.slug}/tablet/image-category-page-preview.jpg`);
        } else {
          img = require(`../Assets/product-${element.slug}/mobile/image-category-page-preview.jpg`);
        }
        imagesArray.push(img);
      }
    });
  }

  return (
    <div className="categoryPage">
      {navigation.state === "loading" && (
        <img
          className="loadingIndicator"
          src={loadingIndicator}
          alt="loading..."
        />
      )}
      <header className="categoryPage__header">
        <motion.div
          animate={{ opacity: [0, 1] }}
          className="categoryPage__header__container"
        >
          <h1 className="categoryPage__header__container__title">
            {params.categoryName}
          </h1>
        </motion.div>
      </header>
      <motion.div
        className="categoryPage__productsList"
        animate={{ opacity: [0, 1], x: [50, 0] }}
      >
        {productsList.map((elem, indx) => {
          return (
            <ProductDiv
              textPosition="left"
              imgPosition={indx % 2 !== 0 ? "right" : "left"}
              img={imagesArray[indx]}
              isNew={indx === 1 ? true : false}
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
      </motion.div>
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
