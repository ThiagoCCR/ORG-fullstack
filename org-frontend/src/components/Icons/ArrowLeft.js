import { IconContext } from "react-icons";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ArrowLeft({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoChevronBackOutline />
      </div>
    </IconContext.Provider>
  );
}
