import { configureStore } from '@reduxjs/toolkit';
import userDetail from "./userDetail"
export const store = configureStore({

    reducer: {
        
       app: userDetail
    },
});
