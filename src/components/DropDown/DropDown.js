import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth_action";
import classes from "./DropDown.module.scss"

const DropDown = ({profile}) => {
  
  const dispatch = useDispatch()
  const handleDoubleFunc = () => {
    dispatch(logout())
    profile()
  }

  return ( <div className={classes.DropDown}>
    <Link onClick={profile} to="/orders">Мои заказы</Link>
    <Link onClick={profile} to="profile">Профиль</Link>
    <div></div>
    <span onClick={()=> handleDoubleFunc()}>Выйти</span>
  </div> );
}
 
export default DropDown;