import { Fragment } from 'react';

import classes from './Header.module.css';
import headerImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='A table full of food' />
      </div>
    </Fragment>
  );
};

export default Header;
