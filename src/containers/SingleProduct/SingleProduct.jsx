import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, fetchSingleProduct } from "../../api";
import {
  MensIndeoor,
  MensHome,
  MensOutwear,
  WomensIndeoor,
  WomensHome,
  WomensOutwear,
  ChildIndeoor,
  ChildHome,
  ChildOutwear,
  Exessories,
} from "../../app/ItemTypes";
import { setProductsList, setProductSpecial } from "../../app/slice/fetchApi";
import { SingleProduct, SpinnerBook } from "../../components";

const SingleProductContainer = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [spinner, setSpinner] = useState(true);

  const special = useSelector((state) => state.api.products.special);

  const { slug } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!special) {
      fetchProduct()
        .then((products) => {
          const special = [];

          const mensIndeoor = [];
          const mensHome = [];
          const mensOutwear = [];
          const womensIndeoor = [];
          const womensHome = [];
          const womensOutwear = [];
          const childIndeoor = [];
          const childHome = [];
          const childOutwear = [];
          const exessories = [];

          products.map((product, index) => {
            if (product.projectType === MensIndeoor) mensIndeoor.push(product);
            else if (product.projectType === MensHome) mensHome.push(product);
            else if (product.projectType === MensOutwear)
              mensOutwear.push(product);
            else if (product.projectType === WomensIndeoor)
              womensIndeoor.push(product);
            else if (product.projectType === WomensHome)
              womensHome.push(product);
            else if (product.projectType === WomensOutwear)
              womensOutwear.push(product);
            else if (product.projectType === ChildIndeoor)
              childIndeoor.push(product);
            else if (product.projectType === ChildHome) childHome.push(product);
            else if (product.projectType === ChildOutwear)
              childOutwear.push(product);
            else if (product.projectType === Exessories)
              exessories.push(product);
            product.special && special.push(product);

            return null;
          });
          let action;
          const object = {
            special: special,
            mensIndeoor: mensIndeoor,
            mensHome: mensHome,
            mensOutwear: mensOutwear,
            womensIndeoor: womensIndeoor,
            womensHome: womensHome,
            womensOutwear: womensOutwear,
            childIndeoor: childIndeoor,
            childHome: childHome,
            childOutwear: childOutwear,
            exessories: exessories,
          };
          action = setProductsList(object);
          dispatch(action);
          action = setProductSpecial(special);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, special]);

  useEffect(() => {
    fetchSingleProduct(slug)
      .then((data) => {
        setSingleProduct(data[0]);
      })
      .catch((error) => console.log("error: ", error));
  }, [slug]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <div className="">
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          <SingleProduct product={singleProduct} special={special} />
        </>
      )}
    </div>
  );
};

export default SingleProductContainer;
