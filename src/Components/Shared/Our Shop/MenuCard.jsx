import Button from "../Button";

const MenuCard = ({ item }) => {
  const {} = item;

  return (
    <div className=" shadow-lg bg-gray-100 rounded space-y-4 flex flex-col">
      <img src={item.image} alt="" className="w-full h-64 object-cover" />

      <h2 className="font-semibold text-xl lg:text-2xl text-center">
        {item.name}
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-md px-2 flex-grow ">
        {item.recipe}
      </p>

      <div className="w-fit mx-auto pb-10 ">
        <Button
          bgColor={"yellow-600"}
          textColor={"yellow-600"}
          name={"add to card"}
        ></Button>
      </div>
    </div>
  );
};

export default MenuCard;
