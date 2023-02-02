import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-hot-toast";

export const postUsers = async (userData) => {
  try {
    const rawResponse = await fetch("http://localhost:4000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const content = await rawResponse.json();

    return content.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const updateUsers = async (userUpdated) => {
  const { _id } = userUpdated;

  try {
    const rawResponse = await fetch(`http://localhost:4000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      //1.recoger info del formulario
      body: JSON.stringify(userUpdated),
    });
    const content = await rawResponse.json();
    // toast.success("Successfully updated");

    return content;
  } catch (error) {
    toast.error("Can get user data, please, wait");
  }
};

export const getUsers = async () => {
  const { getAccessTokenSilently } = useAuth0();

  const url = "http://localhost:4000/user";

  try {
    const token = await getAccessTokenSilently();
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const users = await response.json();

    return users;
  } catch (error) {
    toast.error("Api error fetching users");
  }
};

export const checkUserByEmail = async (userData) => {
  const url = "http://localhost:4000/user/create";

  try {
    // const token = await getAccessTokenSilently();
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();
    return data.data;
  } catch (error) {
    toast.error("Something went wrong");
  }
};
