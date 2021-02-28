import React from 'react';
/* red 1 Aqui conectamos al estado de redux nuestro componente */
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
/* green Vamos a traer la accion para simular el logout de la app  */
import { logoutRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

/* red 4 le pasamos por props el estado a nuestro componente */
const Header = (props) => {

  /* red 5 destructuramos props para poderlo manipular de mejor manera */
  const { user } = props;

  /* red 6 Validamos si user tiene elementos, como user es un objeto, le 
  pasamos Object.keys para manipularlo como un array, luego le pasamos un .lenghth
  para contar los elelemnto que lo conforman y le decimo que este sea Mayor a 0.
  Asi validamos que user esta vacio o esta lleno. */
  const hasUser = Object.keys(user).length > 0;

  /* green llamamos al action y le enviamos un objeto vacio para eliminar 
  los datos del user */
  const handleLogout = () => {
    props.logoutRequiest({})
  }
  return(
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/* red 7 Aqui hacemos la validacion, hasUser es verdadero, envia la 
          imagen con el gravita, si no, enva la imagen que ya guardamos */}
          { hasUser ? 
            <img src={gravatar(user.email)} alt={user.email}/>
            :
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
          {/* green Hacemos la validacion y comenzamos a editar nuestro entorno
          para que muestre y re renderice loq eu deseamos cuando se este o no 
          registrado */}
        { hasUser ? 
          <ul>
            <li><a href="/">{user.email}</a></li>
            <li><a href="#cerrarSesion" onClick={handleLogout}>Salir</a></li>
          </ul>
            :
          <ul>
            <li>
              <Link to="/login">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        }
      </div>
    </header>
)};

/* red 3 Aqui asignamos lo que vamos a hacer y con que parte del estado vamos 
a mostar en nuestro componenente. En este caso traemos el estado (state) 
retornamos el objeto user y lo buscamos en nuestro estado. */
const mapStateToProps = state => {
  return {
    user: state.user
  }
};

/* green Trabajamos con la modificacion de nuestro estado haciendo el llamado 
de nuestra action*/
const mapDispachToProps = {
  logoutRequest,
};


/* red 2 Aqui hacemos la coneccion y lo que vamos a necesitar hacer en nuestro 
componente, si necesitamos informacion de nuestro estado (mapStateToProps) 
o si necesitamos enviarla (mapDispachToProps). Como lo que vamso a hacer 
mostrar informacion de nuestro usuario que va a estar en el estado, vamos 
mapear. */
export default connect(mapStateToProps, mapDispachToProps)(Header);
