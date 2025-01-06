interface ICard {
  onClick?: () => void;
  image: string;
  title: string;
  price: string;
}

const Card = ({ onClick, image, title, price }: ICard) => {
  return (
    <button
      onClick={onClick}
      className="p-2 w-60 h-80 flex flex-col gap-2 items-start border-gray-200 rounded-md shadow-md border-[1px] "
    >
      <img src={image} />
      <h1 className="font-bold">{title}</h1>
      <h2 className="text-sm text-gray-600">{price}</h2>
    </button>
  );
};

export default Card;
