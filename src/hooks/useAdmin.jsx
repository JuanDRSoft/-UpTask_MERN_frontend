import useProyectos from "../hooks/useProyectos";
import useAuth from "../hooks/useAuth";

import React from "react";

const useAdmin = () => {
  const { proyecto } = useProyectos();
  const { auth } = useAuth();

  return proyecto.creador === auth._id;
};

export default useAdmin;
