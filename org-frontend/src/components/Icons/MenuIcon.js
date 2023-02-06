import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";

export default function MenuIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoMenu />
      </div>
    </IconContext.Provider>
  );
}
