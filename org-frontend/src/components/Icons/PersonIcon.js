import { IconContext } from "react-icons";
import { IoPersonSharp } from "react-icons/io5";

export default function PersonIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoPersonSharp />
      </div>
    </IconContext.Provider>
  );
}
