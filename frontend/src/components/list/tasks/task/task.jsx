import "./task.css";
import img from "./checkmark-svgrepo-com.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Task = ({ props }) => {
  const [Status, setStatus] = useState(props.status === false);
  const clickHandel = () => {
    const status = !Status;
    setStatus(status);
    var item = props;
    item.status = !item.status;
    localStorage.setItem(props.id, JSON.stringify(item));
  };

  return (
    <>
      {(() => {
        if (Status) {
          return (
            <div className="bg-3 m-3 rounded-4 px-4 py-3 text-4 fs-2 fw-bold shadow row">
              <Link to={`/add/${props.id}`} className="col-7 me-auto text-1">{props.title}</Link>
              <div className="col-3 text-1 text-end">{props.time}</div>
              <div className="checkbox-div mt-auto">
                <div
                  className="checkbox bg-4 rounded-2 shadow"
                  onClick={clickHandel}
                ></div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="bg-3 m-3 rounded-4 px-4 py-3 text-4 fs-2 fw-bold shadow row">
              <Link to={`/add/${props.id}`} className="col-10 me-auto text-1 text-decoration-line-through">{props.title}</Link>
              <div className="checkbox-div mt-auto">
                <div
                  className="checkbox bg-2 rounded-2 shadow d-flex 
                 justify-content-center align-items-center"
                >
                  <img
                    src={img}
                    alt="a"
                    className="check-icon d-block"
                    onClick={clickHandel}
                  />
                </div>
              </div>
            </div>
          );
        }
      })()}
    </>
  );
};

export default Task;
