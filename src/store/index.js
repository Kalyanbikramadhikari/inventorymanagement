// Author: Kalyan Bikram Adhikari
// Created-Date: 2024/09/30
// Modified-Date: 



import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rtkQueryErrorLogger } from './middleware/errorHandlingMiddleware'
import { AccountApi } from './APIFeatures/AccountApi'
import adminReducer from './reducerSlices/AdminSlice'
import { BannerApi } from './APIFeatures/BannerApi'





export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [AccountApi.reducerPath]: AccountApi.reducer,
    [BannerApi.reducerPath]: BannerApi.reducer,
    admin: adminReducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(patientApi.middleware, staffApi.middleware, adminApi.middleware, rtkQueryErrorLogger),
    getDefaultMiddleware().concat(AccountApi.middleware, BannerApi.middleware),

})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)