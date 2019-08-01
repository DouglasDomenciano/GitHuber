import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from "./components/Login";
import UsersList from "./components/UsersList";
import ReposList from "./components/ReposList";
import UserProfile from "./components/UserProfile";
import RepoDetails from "./components/RepoDetails"

const Navigator = createSwitchNavigator({ 
    Login: { screen: Login },
    UsersList: { screen: UsersList },
    UserProfile: { screen: UserProfile },
    ReposList: { screen: ReposList },
    RepoDetails: { screen: RepoDetails },
},{ initialRouteName: "Login" })
// },{ initialRouteName: "ReposList" })
// },{ initialRouteName: "UsersList" })
// },{ initialRouteName: "UserProfile" })
// },{ initialRouteName: "RepoDetails" })

const Routes = createAppContainer(Navigator);

export default Routes