import { create } from "zustand";
import {
  compareAndUpdateUser,
  CreateUser,
  DeleteUser,
  GetSedes,
  GetUserById,
} from "../services/employee_services/UserServices";
import { LoginService } from "../services/auth_services/login_services";
import { notify } from "../helpers/notifications";
import { GetEquipmentBySerial, CreateEquipment } from "../services/equipment_service/equipment_services"
import { SignUpService } from "../services/auth_services/signup_services";
import { fetchFields } from "../services/equipment_service/brands_service";

export const useUserStore = create((set) => ({
  user: null,
  inputs: [
    { text: "Identificación",       name: "identificacion",         value: "" },
    { text: "Nombre",               name: "nombre",                 value: "" },
    { text: "Celular",              name: "celular",                value: "" },
    { text: "cargo",                name: "cargo",                  value: "" },
    { text: "centro_costos",        name: "centro_costos",          value: "" },
    { text: "Centro Logístico",     name: "centro_logistico",       value: "" },
    { text: "Ciudad",               name: "ciudad",                 value: "" },
    { text: "Jefe inmediato",       name: "jefe_inmediato",         value: "" },
    { text: "Gerencia",             name: "gerencia",               value: "" },
    { text: "Usuario de red",       name: "usuario_red",            value: "" },
    { text: "Ubicacion",            name: "ubicacion",              value: "sin ubicacion" },
  ],

  fetchUser: async (id) => {
    const user = await GetUserById(id);
    set({ user });
    set((state) => {
      const updatedInputs = state.inputs.map((input) => ({
        ...input,
        value: user[input.name] || "",
      }));
      return { inputs: updatedInputs };
    });
  },

  updateUser: async (user, newFields) => {
    await compareAndUpdateUser(user, newFields);
  },

  createUser: async (user) => {
    await CreateUser(user);
  },

  deleteUser: async(user) => {
    await DeleteUser(user);
    set({ user: null })
  },
  resetUser: () => {
    set({ user: null });
  }
}));

export const useEquipmentStore = create((set) => ({
  equipment: null,
  inputs: [
    { text: "Serial", name: "Serial", value: "" },
    { text: "Tipo", name: "Tipo", value: "" },
    { text: "Placa", name: "Placa", value: "" },
    { text: "Marca", name: "Marca", value: "" },
    { text: "MAC", name: "MAC", value: "" },
    { text: "Disco", name: "Disco", value: "" },
    { text: "RAM", name: "RAM", value: "" },
    { text: "IP", name: "IP", value: "" },
    { text: "Punto Red", name: "Punto Red", value: "" },
    { text: "Accesorios", name: "Accesorios", value: "" },
    { text: "Antiguedad", name: "Antiguedad", value: "" },
    { text: "version_SO", name: "version_SO", value: "" },
    { text: "otros", name: "otros", value: "" },
    { text: "usuario", name: "usuario", value: "" },
  ],

  fetchEquipment: async (serial) => {
    const equipment = await GetEquipmentBySerial(serial);
    set({ equipment });
    set((state) => {
      const updatedInputs = state.inputs.map((input) => ({
        ...input,
        value: equipment[input.name] || "",
      }));
      return { inputs: updatedInputs };
    });
  },

  updateEquipment: async (equipment, newFields) => {
    await compareAndUpdateEquipment(equipment, newFields);
  },

  createEquipment: async (equipment, accesories, userId) => {
    await CreateEquipment(equipment, accesories, userId.id);
  },

  deleteEquipment: async (equipment) => {
    await DeleteEquipment(equipment);
    set({ equipment: null });
  },
  setEquipment: (equipment) => {
    set({ equipment });
  },
  resetEquipment: () => {
    set({ equipment: null });
  }
}));

export const useBrandsStore = create((set) => ({
  brands: [],
  accesories: [],
  brand: null,
  accesory: [],
  fetchFields: async () => {
    try {
      const response = await fetchFields();
      set({ brands: response.data["brands"] });
      set({ accesories: response.data["accessories"] });
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  },
  setBrand: (brand) => {
    set({ brand });
  },
}));


export const useNewEquipmentStore = create((set) => ({
  newEquipment: {},
  setNewEquipment: (newEquipment) => {
    set({ newEquipment });
  },
  resetNewEquipment: () => {
    set({ newEquipment: {} });
  },
}));


export const useUser = create((set) => ({
  user: null,
  token: "",
  login: async ( email, password, navigate ) => {
    if (email === "" || password === "") {
      return;
    }

    const result = await notify({
      messageList: ["Iniciando sesión", "Inicio de sesión exitoso", "Error al iniciar sesión"],
      funct: LoginService(email, password)
    });

    if (!result) {
      return;
    }

    set({ user: result.user });
    set({ token: result.token });

    navigate("/home");
  },
  signup: async ( data ) => {
    
    if (data.name === "" || data.lastname === "" || data.email === "" || data.password === "") {
      return;
    }
    const user = await notify({
      messageList: ["Registrando usuario", "Usuario registrado", "Error al registrar usuario"],
      funct: SignUpService(data.name, data.lastname, data.email, data.password)
    })
    set({ user });
  },
  logout: () => {
    set({ user: null });
    set({ token: "" });
  }
}));

export const useSedesStore = create((set, get) => ({
  sedes: [],
  facilidades: [],
  modalidades: [],
  contratos: [],
  propiedades: [],
  loading: true,
  select_inputs: [],
  fetchSedes: async () => {
    const info = await GetSedes();
    const sedesTemp = info.sedes;
    const facilidadesTemp = info.facilidades;
    const modalidadesTemp = info.modalidades;
    const contratosTemp = info.tipo_contrato;
    const propiedadesTemp = info.propiedad;

    // Actualiza cada lista global
    set({
      sedes: sedesTemp.map((sede) => ({
        value: sede.id,
        text: sede.nombre,
      })),
    });

    set({
      facilidades: facilidadesTemp.map((facilidad) => ({
        value: facilidad.id,
        text: facilidad.facilidades_operativas,
      })),
    });

    set({
      modalidades: modalidadesTemp.map((modalidad) => ({
        value: modalidad.id,
        text: modalidad.modalidad_trabajo,
      })),
    });

    set({
      contratos: contratosTemp.map((contrato) => ({
        value: contrato.id,
        text: contrato.tipo_contrato,
      })),
    });

    set({
      propiedades: propiedadesTemp.map((propiedad) => ({
        value: propiedad.id,
        text: propiedad.propiedad,
      })),
    });

    // Combina las listas globales en select_inputs
    const { sedes, facilidades, modalidades, contratos, propiedades } = get();

    set({
      select_inputs: [
        { name: "sede", text: "Sede", options: sedes },
        { name: "facilidades_operativas", text: "Facilidad", options: facilidades },
        { name: "modalidad_trabajo", text: "Modalidad", options: modalidades },
        { name: "tipo_contrato", text: "Tipo de contrato", options: contratos },
        { name: "propiedad_equipo", text: "Propiedad", options: propiedades },
      ],
    });
  },
}));
