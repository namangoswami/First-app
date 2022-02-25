import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme } from "react-native";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import reducers from './reducers'
import thunk from "redux-thunk";
import { getPosts } from "./actions/posts";

const store=createStore(reducers, compose(applyMiddleware(thunk)));
export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
 

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
