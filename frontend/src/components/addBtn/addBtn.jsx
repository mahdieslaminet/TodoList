import icon from "./plus-large-svgrepo-com.svg";
import "./addBtn.css"
import { Link } from "react-router-dom"

const AddBtn = () => {
  return (
    <Link to={"/add"} className="add-btn bg-2 ">
      <img src={icon} alt="" className="add-icon" />
    </Link>
  );
};

export default AddBtn;
