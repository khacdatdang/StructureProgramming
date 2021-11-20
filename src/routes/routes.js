import UserProfile from "../components/UserProfile/UserProfile";
import CardInfo from "../components/UserProfile/CardInfo";
import ChangePassword from "../components/UserProfile/ChangePassword";
import Profile from "../components/UserProfile/Profile";
import EditProfile from "../components/UserProfile/EditProfile";
const routes = [
    { path : '/userprofile' ,exact : true, name : 'UserProfile'},
    { path : '/userprofile/viewprofile' ,exact : true, name : 'Profile', component : Profile},
    { path : '/userprofile/cardinfo' ,exact : true, name : 'CardInfo', component : CardInfo},
    { path : '/userprofile/changepassword' ,exact : true, name : 'ChangePassword', component : ChangePassword},
    { path : '/userprofile/editprofile' ,exact : true, name : 'EditProfile', component : EditProfile},


   
];

export default routes;