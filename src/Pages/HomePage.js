import { useContext, useEffect, useState } from "react";
import ProductCollection from "../Components/3DProduct/ProductCollection";
import StarredProductsDiv from "../Components/HomePage/StarredProductsDiv";
import ProductDiv from "../Components/ProductDiv/ProductDiv";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../Store/data-slice";
import ModalContext from "../Components/Context/modal-context";

function HomePage() {
  const dispatch = useDispatch()
  const data = useLoaderData()

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(data);
    dispatch(dataActions.initiateData(data))
  });

  return (
    <div className="homePage">
      <header className="homePage__header">
        <div className="homePage__header__container">
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
        </div>
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