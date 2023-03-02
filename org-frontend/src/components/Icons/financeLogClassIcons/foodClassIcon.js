import { IconContext } from "react-icons";
import { IoFastFoodSharp } from "react-icons/io5";

export default function FoodClassIcon({ iconProps }) {
  return (
    <IconContext.Provider value={iconProps}>
      <div>
        <IoFastFoodSharp />
      </div>
    </IconContext.Provider>
  );
}
