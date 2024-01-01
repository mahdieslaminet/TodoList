import { useEffect, useState } from "react";

const ColorSetting = () => {
  const [color_1, setColor_1] = useState("");
  const [color_2, setColor_2] = useState("");
  const [color_3, setColor_3] = useState("");
  const [color_4, setColor_4] = useState("");
  const updateLocalStorage = () => {
    localStorage.setItem(
      "theme-colors",
      JSON.stringify({
        color_1: color_1,
        color_2: color_2,
        color_3: color_3,
        color_4: color_4,
      })
      );
  };
  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("theme-colors"));
    setColor_1(colors.color_1);
    setColor_2(colors.color_2);
    setColor_3(colors.color_3);
    setColor_4(colors.color_4);
  }, []);
  const colorsList = [
    [color_1, setColor_1],
    [color_2, setColor_2],
    [color_3, setColor_3],
    [color_4, setColor_4],
  ];
  useEffect(() => {
    if (color_1 && color_2 && color_3 && color_4) updateLocalStorage();
  }, [color_1, color_2, color_3, color_4]);
  return (
    <>
      {colorsList.map((item) => {
        return (
          <div className="bg-2 m-3 rounded-3 shadow-sm row px-5 py-4">
            <label className="d-block col-10 col-lg-11 fs-4 text-3">
              color 
            </label>
            <input
              type="color"
              className="d-block col-2 col-lg-1 bg-2 rounded-5 border-0 "
              value={item[0]}
              onChange={(color) => {
                item[1](color.target.value);
                window.location.reload(1)
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default ColorSetting;
