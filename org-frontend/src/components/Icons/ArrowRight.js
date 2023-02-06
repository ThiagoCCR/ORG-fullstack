import { IconContext } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function ArrowRight({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoChevronForwardOutline />
      </div>
    </IconContext.Provider>
  );
}
