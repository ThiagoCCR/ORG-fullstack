import FoodClassIcon from "../../components/Icons/financeLogClassIcons/foodClassIcon";

export default function SortLogClassIcon({ logClass }) {
  if (logClass === "food") {
    return (
      <FoodClassIcon
        iconProps={{
          color: "#040404",
          className: "global-class-name",
          size: "20px",
        }}
      />
    );
  }
}
