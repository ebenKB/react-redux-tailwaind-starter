import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST } from 'redux-persist/es/constants';
import reducers from '../redux/reducers/root';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});


export const persistor = persistStore(store)