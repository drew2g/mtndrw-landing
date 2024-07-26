import type { ItemCard, Project } from "../types";

interface ItemCardProps {
  itemCard: ItemCard;
}

const ItemCard: React.FC<ItemCardProps> = ({ itemCard }) => {
  return (
    <div className="text-black">
      <button className="card bg-base-100 w-96 shadow-xl hover:bg-gray-800/80 hover:text-white">
        <figure>
          <img src={itemCard.src} alt={itemCard.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">{itemCard.title}</h2>
          <p>{itemCard.description}</p>
          <div className="card-actions justify-end">
            {"link" in itemCard && (
              <a
                href={itemCard.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            )}
            {"githubLink" in itemCard && itemCard.githubLink && (
              <a
                href={itemCard.githubLink}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Github Link
              </a>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ItemCard;
