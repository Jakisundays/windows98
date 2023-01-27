import { loginSwitch, registerSwitch } from "../../store/slices/windowsSlice";

export const iconos = [
  {
    title: "Sign up",
    icon: require("/Users/jacobdominguez/Documents/codiyapa/MERN/Mern Auth/client/src/assets/compu.png"),
    funcion: () => registerSwitch(),
  },
  {
    title: "Login",
    icon: require("/Users/jacobdominguez/Documents/codiyapa/MERN/Mern Auth/client/src/assets/key.ico"),
    funcion: () => loginSwitch(),
  },
];
