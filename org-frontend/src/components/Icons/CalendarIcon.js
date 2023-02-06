import { IconContext } from "react-icons";
import { IoCalendarOutline } from "react-icons/io5";

export default function CalendarIcon({ iconProps }) {
  return (
    <IconContext.Provider
      value={iconProps}
    >
      <div>
        <IoCalendarOutline />
      </div>
    </IconContext.Provider>
  );
}
