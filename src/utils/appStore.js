import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";

const appStore = configureStore({
    reducer : {
        theme : themeSlice
    }
})

export default appStore