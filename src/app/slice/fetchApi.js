import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
  name: API,
  initialState: {
    about: null,
    products: {
      special: null,
      mensIndeoor: null,
      mensHome: null,
      mensOutwear: null,
      womensIndeoor: null,
      womensHome: null,
      womensOutwear: null,
      childIndeoor: null,
      childHome: null,
      childOutwear: null,
      exessories: null,
    },
    productsList: null,
    posts: null,
    instaPosts: null,
    hero: null,
    heroProduct: null,
    heroBlog: null,
  },
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setInstaPosts: (state, action) => {
      state.instaPosts = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setProductSpecial: (state, action) => {
      state.products.special = action.payload;
    },
    setProductMensIndeoor: (state, action) => {
      state.products.mensIndeoor = action.payload;
    },
    setProductMensHome: (state, action) => {
      state.products.mensHome = action.payload;
    },
    setProductMensOutwear: (state, action) => {
      state.products.mensOutwear = action.payload;
    },
    setProductWomensIndeoor: (state, action) => {
      state.products.womensIndeoor = action.payload;
    },
    setProductWomensHome: (state, action) => {
      state.products.womensHome = action.payload;
    },
    setProductWomensOutwear: (state, action) => {
      state.products.womensOutwear = action.payload;
    },
    setProductChildIndeoor: (state, action) => {
      state.products.childIndeoor = action.payload;
    },
    setProductChildHome: (state, action) => {
      state.products.childHome = action.payload;
    },
    setProductChildOutwear: (state, action) => {
      state.products.childOutwear = action.payload;
    },
    setProductExessories: (state, action) => {
      state.products.exessories = action.payload;
    },

    setHeroProduct: (state, action) => {
      state.heroProduct = action.payload;
    },
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
    setHeroBlog: (state, action) => {
      state.heroBlog = action.payload;
    },
  },
});

const { reducer, actions } = fetchApi;

export const {
  setAboutData,
  setPosts,
  setInstaPosts,
  setHero,
  setProductSpecial,
  setProductMensIndeoor,
  setProductMensHome,
  setProductMensOutwear,
  setProductWomensIndeoor,
  setProductWomensHome,
  setProductWomensOutwear,
  setProductChildIndeoor,
  setProductChildHome,
  setProductChildOutwear,
  setProductExessories,

  setHeroProduct,
  setProductsList,
  setHeroBlog,
} = actions;

export default reducer;
