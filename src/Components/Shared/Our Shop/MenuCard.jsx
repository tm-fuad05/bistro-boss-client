import Button from "../Button";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
// SweetAlert
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../../hooks/useCart";

const MenuCard = ({ item }) => {
  const { _id, name, image, price, recipe } = item;

  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const { refetch } = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        name,
        email: user.email,
        image,
        price,
        recipe,
      };
      console.log(cartItem);

      axios.post("http://localhost:5000/cart", cartItem).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${item.name} has been added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You aren't logged in",
        text: "Please login at first and add your item to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };

  return (
    <div className=" shadow-lg bg-gray-100 rounded space-y-4 flex flex-col">
      <img src={item.image} alt="" className="w-full h-64 object-cover" />

      <h2 className="font-semibold text-xl lg:text-2xl text-center">
        {item.name}
      </h2>
      <p className="text-gray-600 text-center text-sm md:text-md px-2 flex-grow ">
        {item.recipe}
      </p>

      <div onClick={handleAddToCart} className="w-fit mx-auto pb-10">
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
