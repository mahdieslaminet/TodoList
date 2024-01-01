import Time from "./time/time";
import Title from "./title/title";
import Text from "./text/text";
import Save from "./save/save";
import Date from "./date/date";
import "./addTask.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DelBtn from "./del/del";

const AddTask = () => {
  var item;
  const { id } = useParams();
  if (id) {
    item = JSON.parse(localStorage.getItem(id));
  }

  const [title, setTitle] = useState(item ? item.title : "");
  const [text, setText] = useState(item ? item.text : "");
  const [time, setTime] = useState(item ? item.time : "");
  const [date, setDate] = useState(item ? item.date : "");

  return (
    <div className="p-3 pb-5 mb-5">
      <Title props={[title, setTitle]} />
      <Text props={[text, setText]} />
      <Time props={[time, setTime]} />
      <Date props={[date, setDate]} />
      <Save props={[title, text, time, date]} />
      {(() => {
        if (id) return <DelBtn />;
      })()}
    </div>
  );
};

export default AddTask;
