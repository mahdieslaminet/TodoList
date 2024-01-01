const Style = () => {
  let color = {};
  if (localStorage.getItem("theme-colors")) {
    color = JSON.parse(localStorage.getItem("theme-colors"));
  } else {
    color = {
      color_1: "#164863",
      color_2: "#427d9d",
      color_3: "#9bbec8",
      color_4: "#ddf2f2",
    };
    localStorage.setItem("theme-colors", JSON.stringify(color));
  }
  const style = `\
    .bg-1 {\
background: ${color.color_1}}\
.bg-2 {\
background:  ${color.color_2}}\
.bg-3 {\
background: ${color.color_3}}\
.bg-4 {\
background: ${color.color_4}}\
.text-1 {\
color: ${color.color_1}}\
.text-2 {\
color: ${color.color_2}}\
.text-3 {\
color: ${color.color_3}}\
.text-4 {\
color: ${color.color_4}}\
`;
  return (
    <>
      <style>{style}</style>
    </>
  );
};

export default Style;
