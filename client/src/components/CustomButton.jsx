import { useSelector } from "react-redux";

export default function CustomButton({
  title,
  type,
  customStyles,
  handleClick,
}) {
  const bgColor = useSelector((state) => state.global.color);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: bgColor,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
