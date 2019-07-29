import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from "./components/Login";

const Routes = createAppContainer(createSwitchNavigator({ Login }));

export default Routes