import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMenus = async () => {
      const { data } = await axios.get("http://localhost:5000/menus");
      setMenu(data);
      setLoading(false);
    };
    fetchAllMenus();
  }, []);

  return { menu, loading };
};

export default useMenu;
