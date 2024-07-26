import type {
  ItemCardCarousel,
  PrivateProject,
  Project,
  PublicProject,
} from "../types";
import ItemCard from "./ItemCard";

const ItemCardCarousel: React.FC<ItemCardCarousel> = ({ itemCards, title }) => {
  // TODO: Implement custom carousel logic that doesn't use webkit (daisyUI's implementation doesn't work well)
  return (
    <>
      <p className="p-2">{title}</p>
      <div className="text-black">
        <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
          {itemCards.map((proj: PrivateProject | PublicProject) => {
            return (
              <div className="carousel-item">
                <ItemCard itemCard={proj} key={proj.title}></ItemCard>
                {/* <img src={proj.src} className="rounded-box" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemCardCarousel;
