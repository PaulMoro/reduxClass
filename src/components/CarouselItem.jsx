import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deliteFavorite } from '../actions';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props
  const handleSetFavorite = () => {
    props.setFavorite ({
        id, cover, title, year, contentRating, duration
    })

  }
  const handleDeliteFavorite = (itemId) => {
    props.deliteFavorite(itemId)
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
{/* Esta es la validacion que tenemos para que el boton de agregar a favoritos 
se desactive cuando esté ya en favoritos y aparesca la de eliminar, que en este
caso seria otro playIcon */}
          { isList ?
            <img 
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
              onClick= {() => handleDeliteFavorite(id)}
              /> :
              <img 
                className="carousel-item__details--img"
                src={plusIcon}
                alt="Plus Icon"
                onClick={handleSetFavorite}
              /> 
            }
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
)};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deliteFavorite,
};


export default connect(null, mapDispatchToProps)(CarouselItem);