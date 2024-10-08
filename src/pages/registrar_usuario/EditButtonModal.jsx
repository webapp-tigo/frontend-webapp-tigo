/* eslint-disable react/prop-types */
import { MdEdit } from "react-icons/md";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import CustomInput from "../../components/custom_input";
import { useState } from "react";
import { UpdateUser } from "../../helpers/UserHelpers";

const EditButtonModal = ({ inputs, user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [userInputs, setUserInputs] = useState({ ...user });

  const handleChange = (e, name) => {
    setUserInputs({ ...userInputs, [name]: e.target.value });
  };

  const handleSubmit = () => {
    UpdateUser(userInputs);
  };

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        className="bg-green-700 text-white rounded mx-1"
      >
        <MdEdit className="text-white" />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        className="overflow-y-scroll p-10"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="grid grid-cols-12">
                <h2 className="col-span-12 text-4xl text-gray-700 text-center mb-5">
                  Edición
                </h2>
                <form className="bg-white w-full col-span-6 p-2">
                  <div className="space-y-4">
                    <CustomInput
                      item={"Nombre del usuario"}
                      value={user.nombre}
                    />
                    <label className="block text-sm font-medium text-gray-700 mt-20">
                      Propiedad {user.propiedad}
                    </label>
                    <select
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      name="propiedad"
                      required
                    >
                      <option value="" disabled>
                        Selecciona una opción {user.propiedad}
                      </option>
                      <option value="opcion1">Colsubsidio</option>
                      <option value="opcion2">PCCOM</option>
                      <option value="opcion3">Otros</option>
                    </select>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Modalidad de trabajo {user.modalidad}
                      </label>
                      <select
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="modalidad"
                        required
                      >
                        <option value="" disabled></option>
                        <option value="opcion1">Presencial</option>
                        <option value="opcion2">Teletrabajo Autónomo</option>
                        <option value="opcion3">
                          Teletrabajo Suplementario
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Facilidades operativas {user.facilidades}
                      </label>
                      <select
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="operativas"
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="opcion1">Carnet</option>
                        <option value="opcion2">Tarjeta de acceso</option>
                        <option value="opcion3">Otros</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Tipo de contrato del usuario {user.tipocontrato}
                      </label>
                      <select
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name="contrato"
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>
                        <option value="opcion1">Trabajador</option>
                        <option value="opcion2">Estudiante en práctica</option>
                        <option value="opcion3">Contratista</option>
                      </select>
                    </div>
                  </div>
                </form>

                <form className="col-span-6 p-2">
                  {inputs.map((item, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-gray-700">
                        {item.text}
                      </label>
                      <input
                        type="text"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        name={item.name}
                        placeholder={item.name}
                        value={userInputs[item.name]}
                        onChange={(e) => handleChange(e, item.name)}
                      />
                    </div>
                  ))}
                </form>

                <Button
                  variant="bordered"
                  color="primary"
                  className="col-span-6 text-xl mt-4"
                  onPress={handleSubmit}
                >
                  Crear
                </Button>
                <Button
                  onPress={onClose}
                  variant="solid"
                  color="danger"
                  className="col-span-6 text-xl mt-4"
                >
                  Cancelar
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditButtonModal;
