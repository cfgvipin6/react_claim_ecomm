import { configureStore } from "@reduxjs/toolkit";
import claimReducer from '../containers/claimSlice' ;

export default configureStore({
  reducer: {
    claims: claimReducer,
  },
});