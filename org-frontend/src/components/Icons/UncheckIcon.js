import { IconContext } from "react-icons";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function UncheckIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoCloseCircleSharp />
      </div>
    </IconContext.Provider>
  );
}
