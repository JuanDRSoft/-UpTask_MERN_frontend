import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormularioColaborador from "../components/FormularioColaborador";
import useProyectos from "../hooks/useProyectos";
import Cargando from "../components/Cargando";
import Alerta from "../components/Alerta";

const NuevoColaborador = () => {
  const {
    obtenerProyecto,
    proyecto,
    cargando,
    colaborador,
    agregarColaborador,
    alerta,
  } = useProyectos();
  const params = useParams();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  if (!proyecto?._id) return <Alerta alerta={alerta} />;
  return (
    <>
      <h1 className="text-4xl font-black">
        Añadir Colaborador(a) al proyecto: {proyecto.nombre}
      </h1>

      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>

      {cargando ? (
        <div className="mt-10">
          <Cargando />
        </div>
      ) : (
        colaborador?._id && (
          <div className="md:flex justify-center mt-10">
            <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full">
              <h2 className="text-center mb-10 text-2xl font-bold">
                Resultado:
              </h2>

              <div className="md:flex justify-between items-center">
                <p>{colaborador.nombre}</p>

                <button
                  type="button"
                  className="bg-slate-500 px-5 py-2 rounded-lg uppercase text-white font-bold"
                  onClick={() =>
                    agregarColaborador({ email: colaborador.email })
                  }
                >
                  Agregar al proyecto
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default NuevoColaborador;