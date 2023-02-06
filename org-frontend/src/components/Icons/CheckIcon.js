import { IconContext } from "react-icons";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function CheckIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoCheckmarkCircleSharp />
      </div>
    </IconContext.Provider>
  );
}
