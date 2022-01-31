import UserProfile from "../components/UserProfile/UserProfile";
import CardInfo from "../components/UserProfile/CardInfo";
import ChangePassword from "../components/UserProfile/ChangePassword";
import Profile from "../components/UserProfile/Profile";
import EditProfile from "../components/UserProfile/EditProfile";
import OrderInfo from "../components/UserProfile/OrderInfo";
import ViewUser from "../components/Admin/ViewUser";
import CreateAccount from "../components/Admin/CreateAccount";
import AdminChangePassword from "../components/Admin/ChangePassword";
const routes = [
    { path : '/userprofile' ,exact : true, name : 'UserProfile'},
    { path : '/userprofile/viewprofile' ,exact : true, name : 'Profile', component : Profile},
    { path : '/userprofile/cardinfo' ,exact : true, name : 'CardInfo', component : CardInfo}, 
    { path : '/userprofile/orderinfo' ,exact : true, name : 'OrderInfo', component : OrderInfo},
    { path : '/userprofile/changepassword' ,exact : true, name : 'ChangePassword', component : ChangePassword},
    { path : '/userprofile/editprofile' ,exact : true, name : 'EditProfile', component : EditProfile},
    { path : '/admin/viewuser' ,exact : true, name : 'ViewUser', component : ViewUser},
    { path : '/admin/createaccount' ,exact : true, name : 'CreateAccount', component : CreateAccount},
    { path : '/admin/changepassword' ,exact : true, name : 'ChangePassword', component : AdminChangePassword},


   
];

export default routes;