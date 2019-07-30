import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from "./components/Login";
import UsersList from "./components/UsersList";
import ReposList from "./components/ReposList";

const Navigator = createSwitchNavigator({ 
    Login: {
        screen: Login
    },
    UsersList: {
        screen: UsersList
    },
    ReposList: {
        screen: ReposList
    }
},{ initialRouteName: "UsersList" })

const Routes = createAppContainer(Navigator);

export default Routes