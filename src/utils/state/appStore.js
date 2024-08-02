import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import musicSlice from "./musicSlice";

const appStore = configureStore({
   reducer : {
    user : userSlice, 
    music : musicSlice
   }
});

export default appStore;
