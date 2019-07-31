import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from "./components/Login";
import UsersList from "./components/UsersList";
import ReposList from "./components/ReposList";
import UserProfile from "./components/UserProfile";

const Navigator = createSwitchNavigator({ 
    Login: {
        screen: Login
    },
    UsersList: {
        screen: UsersList
    },
    UserProfile: {
        screen: UserProfile
    },
    ReposList: {
        screen: ReposList
    }
},{ initialRouteName: "UserProfile" })

const Routes = createAppContainer(Navigator);

export default Routes