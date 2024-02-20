import { useContext, useEffect, useState } from "react";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import StarredProductsDiv from "../Components/HomePage/StarredProductsDiv";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../Store/data-slice";
import { motion } from "framer-motion";
// import loadingIndicator from "../Assets/Wedges-3s-200px.gif"
import loadingIndicator from "../Assets/Infinity-1s-263px.gif";

function HomePage() {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(data);
    dispatch(dataActions.initiateData(data));
  });

  return (
    <div className="homePage">
      {navigation.state === "loading" && (
        <img
          className="loadingIndicator"
          src={loadingIndicator}
          alt="loading..."
        />
      )}
      <header className="homePage__header">
        <motion.div
          animate={{ opacity: [0, 1], y: [50, 0] }}
          className="homePage__header__container"
        >
          <ProductDiv
            textPosition="left"
            isNew={data.record[2].new}
            title="XX99 Mark II
            Headphones"
            desription={data.record[2].description}
            type="toSee"
            id={data.record[2].id}
            category={data.record[2].category}
          />
        </motion.div>
      </header>
      <ProductCollection />
      <StarredProductsDiv />
    </div>
  );
}

export default HomePage;

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
