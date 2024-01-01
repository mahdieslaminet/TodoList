import Label from "../label/label";

const Date = ({props}) => {
  return (
    <>
      <div className="bg-3 fs-2 p-1 pt-2 shadow row rounded-4 mx-1 mt-2 mt-3">
        <Label title={"Date"} />
        <input
          type="date"
          className="input-d  ps-3 col-12 text-1"
          onChange={e => props[1](e.target.value)}
          value={props[0]}
        />
      </div>
    </>
  );
};

export default Date;
