import { IconContext } from "react-icons";
import { IoEllipsisVerticalSharp } from "react-icons/io5";

export default function ModalIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoEllipsisVerticalSharp />
      </div>
    </IconContext.Provider>
  );
}
