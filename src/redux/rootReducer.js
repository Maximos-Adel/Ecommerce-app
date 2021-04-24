import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./products/products_reducers";
import checkout from "./auth/auth_reducers";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productsReducer,
  auth: checkout,
});

export default persistReducer(persistConfig, rootReducer);
