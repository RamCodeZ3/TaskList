// Definimos la interfaz de las tareas
interface Tarea {
  titulo: string;
  descripcion: string;
  categoria: string;
  color: string;
}

// Exportamos el array de tareas
const tareas: Tarea[] = [
  {
    titulo: "Hacer ejercicio",
    descripcion: "Correr 30 minutos",
    categoria: "Salud",
    color: "#5DADEC", // azul pastel
  },
  {
    titulo: "Estudiar TypeScript",
    descripcion: "Repasar tipos e interfaces",
    categoria: "Educación",
    color: "#4ECDC4", // verde agua
  },
  {
    titulo: "Limpiar la habitación",
    descripcion: "Organizar y barrer",
    categoria: "Hogar",
    color: "#C77DFF", // lila
  },
  {
    titulo: "Preparar comida",
    descripcion: "Cocinar algo saludable para el almuerzo",
    categoria: "Salud",
    color: "#5DADEC", // azul pastel
  },
  {
    titulo: "Leer documentación de React",
    descripcion: "Revisar hooks y componentes funcionales",
    categoria: "Educación",
    color: "#4ECDC4", // verde agua
  },
  {
    titulo: "Organizar escritorio",
    descripcion: "Limpiar el monitor y ordenar los cables",
    categoria: "Hogar",
    color: "#C77DFF", // lila
  },
];

export default tareas;
