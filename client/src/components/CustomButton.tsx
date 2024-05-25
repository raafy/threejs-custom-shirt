import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { MouseEventHandler } from "react";

type Props = {
  title: string;
  type: string;
  customStyles: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function CustomButton({
  title,
  type,
  customStyles,
  handleClick,
}: Props) {
  const bgColor = useSelector((state: RootState) => state.global.color);
  const generateStyle = (type: string) => {
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
