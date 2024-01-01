import icon from "../edit.svg"

const Label = ({title}) => {
  return (
    <>
      <span className="fs-5 col-10 text-2 me-auto d-block">{title}</span>
      <div className="col-2 d-block m-auto text-end">
        <img src={icon} alt="" className="edit-icon" />
      </div>
    </>
  );
};

export default Label;
