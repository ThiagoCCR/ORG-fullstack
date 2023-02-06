import { IconContext } from "react-icons";
import { IoAddCircleSharp } from "react-icons/io5";

export default function AddButton({ iconProps }) {
  return (
    <IconContext.Provider value={iconProps}>
      <div>
        <IoAddCircleSharp />
      </div>
    </IconContext.Provider>
  );
}
