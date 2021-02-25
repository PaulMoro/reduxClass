import React from 'react';
/* 1 Aqui conectamos al estado de redux nuestro componente */
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

/* 4 le pasamos por props el estado a nuestro componente */
const Header = (props) => {
  /* 5 destructuramos props para poderlo manipular de mejor manera */
  const { user } = props;
  /* 6 Validamos si user tiene elementos, como user es un objeto, le 
  pasamos Object.keys para manipularlo como un array, luego le pasamos un .lenghth
  para contar los elelemnto que lo conforman y le decimo que este sea Mayor a 0.
  Asi validamos que user esta vacio o esta lleno. */
  const hasUser = Object.keys(user).length > 0;
  return(
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {/* 7 Aqui hacemos la validacion, hasUser es verdadero, envia la 
          imagen con el gravita, si no, enva la imagen que ya guardamos */}
          { hasUser ? 
            <img src={gravatar(user.email)} alt={user.email}/>
            :
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
        <ul>
          <li><a href="/">Cuenta</a></li>
          <li>
            <Link to="/login">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
)};

/* 3 Aqui asignamos lo que vamos a hacer y con que parte del estado vamos 
a mostar en nuestro componenente. En este caso traemos el estado (state) 
retornamos el objeto user y lo buscamos en nuestro estado. */
const mapStateToProps = state => {
  return {
    user: state.user
  }
};

/* 2 Aqui hacemos la coneccion y lo que vamos a necesitar hacer en nuestro 
componente, si necesitamos informacion de nuestro estado (mapStateToProps) 
o si necesitamos enviarla (dispachStateToProps). Como lo que vamso a hacer 
mostrar informacion de nuestro usuario que va a estar en el estado, vamos 
mapear. */
export default connect(mapStateToProps, null)(Header);
