import React, { Component } from 'react'
import PropTypes from'prop-types'


import cssClass from './BurgerIngredient.css'

class BurgerIngredients extends Component  {

	render() {

		let ingredient = null;

		switch (this.props.type) {
			case ('bread-bottom'):
				ingredient = <div className={cssClass.BreadBottom}/>;
				break;
			case ('bread-top'):
				ingredient = (
					<div className={cssClass.BreadTop} >
						<div className={cssClass.Seeds1}/>
						<div className={cssClass.Seeds2}/>
					</div>
				);
				break;
			case ('meat'):
				ingredient = <div className={cssClass.Meat}/>;
				break;
			case('cheese'):
				ingredient = <div className={cssClass.Cheese}/>;
				break;
			case ('bacon'):
				ingredient = <div className={cssClass.Bacon}/>;
				break;
			case('salad'):
				ingredient = <div className={cssClass.Salad}/>;
				break;
			default:
				ingredient = null
		}
		return ingredient;

	}
}

BurgerIngredients.PropTypes  = {
	type: PropTypes.string.isRequired
};

export default BurgerIngredients

