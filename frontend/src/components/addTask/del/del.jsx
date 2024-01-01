import { useParams, useNavigate } from "react-router-dom";

const DelBtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clickHandel = () => {
    localStorage.removeItem(id);
    navigate("/");
  };
  return (
    <div
      className="s-btn bg-2 text-center fs-2 p-1 pt-2 shadow rounded-4 mx-1 mt-2
     mt-3 text-warning"
      onClick={clickHandel}
    >
      delete
    </div>
  );
};

export default DelBtn;
