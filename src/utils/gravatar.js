/* Aqui incorporamos una libreria, que la descargamos por npm, y que 
nos permite dar una imagen con gravitar */
import md5 from 'md5';

/* creamos una funcion que tenga de parametro el email, el dato qeu le vamos
a enviar desde nuestro componente */
const gravatar = (email) => {
  /* Hacemos uso de de gravitar con su direccion */
  const base = 'https://gravatar.com/avatar/';
  /* formateamos el dato de entrada, tomamos el parametro, con .trim 
  eliminamos los espacios que existan en nuestro dato y con toLowerCase 
  volvemos tolas las letras en minusculas */
  const formattedEmail = (email).trim().toLowerCase();
  /* ahora usamos la libreria md5, le pasamos el paso anterior y como 
  segundo parametro le pedimos de vuelva binario nuestra info */
  const hash = md5(formattedEmail, { encoding: "binary" });
  /*  Por ultimo hacemos el retorno tanto de la direccion de gravatar como 
  del uso de md5 */
  return `${base}${hash}`
};

/*  Exportamos porque si no, como lo llamamos en otra parte 😏😛 */
export default gravatar;