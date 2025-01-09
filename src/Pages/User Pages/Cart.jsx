import React from "react";
import SectionTitle from "../../Components/Shared/SectionTitle";
import useCart from "../../hooks/useCart";
import { FaTrash } from "react-icons/fa6";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Cart = () => {
  const { cart, refetch } = useCart();
  const axiosSecure = useAxios();

  const totalPrice = cart.reduce((accum, item) => accum + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-5">
      <SectionTitle
        subtitle={"---excellent ambience---"}
        title={"my bookings"}
      ></SectionTitle>
      <section className="mt-10 bg-white w-10/12 mx-auto p-5">
        <div className="text-black font-cinzel font-bold text-xl uppercase flex justify-between items-center mb-3">
          <h2>total bookings: {cart.length}</h2>
          <h2>total price: ${totalPrice.toFixed(1)}</h2>
          <button className="btn btn-sm bg-[#d1a054] text-white">pay</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#d1a054] text-white">
              <tr className="uppercase rounded-t-xl">
                <th></th>
                <th>item image</th>
                <th>item name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem, idx) => (
                <tr key={cartItem._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <img className="h-12" src={cartItem.image} alt="" />
                  </td>
                  <td className="text-gray-500">{cartItem.name}</td>
                  <td className="text-gray-500">${cartItem.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(cartItem._id)}
                      className="btn btn-sm bg-red-600"
                    >
                      <FaTrash className="text-white text-md" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Cart;
