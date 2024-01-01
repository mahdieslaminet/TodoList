import { useNavigate, useParams } from "react-router-dom";

const Save = ({ props }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clickHandel = () => {
    if (localStorage.getItem("last-id")) {
      localStorage.setItem(
        "last-id",
        Number(localStorage.getItem("last-id")) + 1
      );
    } else {
      localStorage.setItem("last-id", 1);
    }
    const key = id ? id : localStorage.getItem("last-id");
    localStorage.setItem(
      key,
      JSON.stringify({
        title: props[0],
        text: props[1],
        time: props[2],
        date: props[3],
        id: key,
        status: false,
      })
    );
    navigate("/");
  };
  return (
    <div
      className="s-btn bg-2 text-center fs-2 p-1 pt-2 shadow rounded-4 mx-1 mt-2 mt-3"
      onClick={clickHandel}
    >
      save
    </div>
  );
};

export default Save;
