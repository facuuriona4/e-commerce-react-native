import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  Catalogue,    
  CartDetail,
} from "./screens";

const Router = createStackNavigator(
  {
    Catalogue,
    CartDetail,
  },
  {
    initialRouteName: "Catalogue",
    headerMode: "none",
  },
);

export default createAppContainer(Router);