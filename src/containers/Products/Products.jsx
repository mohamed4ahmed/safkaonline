import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroProduct, fetchProduct } from "../../api";
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
import {
  setProductSpecial,
  setHeroProduct,
  setProductsList,
} from "../../app/slice/fetchApi";
import { SpinnerBook, HeroPage, ProductsList } from "../../components";

const Products = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.api.productsList);
  const heroProduct = useSelector((state) => state.api.heroProduct);

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    if (!productsList) {
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
  }, [dispatch, productsList]);

  useEffect(() => {
    if (!heroProduct) {
      fetchHeroProduct()
        .then((data) => {
          const action = setHeroProduct(data);
          dispatch(action);
        })
        .catch((error) => console.log("error", error));
    }
  }, [dispatch, heroProduct]);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 2300);
  }, []);

  return (
    <>
      {spinner ? (
        <SpinnerBook />
      ) : (
        <>
          {" "}
          <HeroPage slides={heroProduct} idScrollTo="productList" />
          <ProductsList products={productsList} />
        </>
      )}
    </>
  );
};

export default Products;
