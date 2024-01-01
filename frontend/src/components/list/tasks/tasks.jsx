import toast from "react-hot-toast";
import Task from "./task/task";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const tasks = [];
  const navigate = useNavigate()
  const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };

  const getToday = () => {
    const date = new Date();
    return new Date(date.toDateString());
  };
  const getNow = () => {
    const date = new Date();
    return `${date.getHours()==0 ? "00":date.getHours()}:${date.getMinutes()}`;
  };

  for (let i = 0; i < localStorage.length; i++) {
    if (!isNumber(localStorage.key(i))) {
      continue;
    } else {
      const item = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (
        item.status &&
        (item.date ? new Date(item.date) - getNow() : false) < 0
      ) {
        localStorage.removeItem(localStorage.key(i));
      }
      item.tm = false;
      tasks.push(item);
    }
  }
  const getNotificationPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // toast.success("now do-or-die can call you with a notification")
      } else {
        toast.error("do-or-die can't call you with a notification")
        
      }
    });
    
  }
  const toastManager = () => {
    for (let i = tasks.length - 1; i >= 0; i--) {
      if (
        new Date(tasks[i].date).toDateString() === getToday().toDateString() &&
        tasks[i].time.slice(0, 2) === getNow().slice(0, 2) &&
        Number(tasks[i].time.slice(3, 5)) >= Number(getNow().slice(3, 5)) &&
        Number(tasks[i].time.slice(3, 5)) <= Number(getNow().slice(3, 5)) + 1 && 
        !tasks[i].status &&
        !tasks[i].tm
      ) {
        tasks[i].tm = true;
        toast(tasks[i].title);
        const notification = new Notification("New Message", {
          body: "You have a new message from John",
          icon: "https://example.com/icon.png",
          tag: "new-message",
          data: { sender: "John" },
          requireInteraction: true
        });
        notification.onclick=()=>(navigate(`add/${tasks[i].id}`))
      }
      setTimeout(toastManager, 10000);
    }
  };
  useEffect(() => {
    toastManager();
    getNotificationPermission()
  });
  return (
    <>
      {tasks.map((item) => (
        <Task props={item} />
      ))}
    </>
  );
};

export default Tasks;
