import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";

export default function DeleteIcon({ iconProps }) {
  return (
    <IconContext.Provider value={iconProps}>
      <div>
        <IoCloseSharp />
      </div>
    </IconContext.Provider>
  );
}
