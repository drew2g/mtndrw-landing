
type ItemCardType = {
    title: string;
    description: string;
    src: string;
}

function ItemCard({ title= 'Title', description = "Description", src="Src"}: ItemCardType) {
    return <div className="text-black">
        <button className="card bg-base-100 w-96 shadow-xl hover:bg-gray-800/80 hover:text-white">
            <figure>
                <img
                    src={src}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </button>
    </div>
}

export default ItemCard