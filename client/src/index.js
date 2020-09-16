import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home , Catalogue, LetterDetail } from "./screens/";

const Router = createStackNavigator(
  { Home, Catalogue, LetterDetail },
  {
    initialRouteName: "Home",
    headerMode: "none",
  },
);

export default createAppContainer(Router);
