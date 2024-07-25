import type { ItemCardCarousel } from "../types";
import ItemCard from "./ItemCard";

function ItemCardCarousel({
  title = "Title",
  itemCards = [],
}: ItemCardCarousel) {
  return (
    <div className="text-black">
      <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
        {itemCards.map((proj) => {
          return (
            <div className="carousel-item">
              <ItemCard {...proj}></ItemCard>
              {/* <img src={proj.src} className="rounded-box" /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemCardCarousel;
