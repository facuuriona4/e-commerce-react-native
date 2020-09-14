import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  Catalogue,
  LetterDetail,

} from "./screens";

const Router = createStackNavigator(
  {
    Catalogue,
    LetterDetail
  },
  {
    initialRouteName: "Catalogue",
    headerMode: "none",
  },
);

export default createAppContainer(Router);