/* eslint-disable react/prop-types */
import "./card.css";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@store/cart.slice";
import { changeVND } from "@Js";

function CardProduct({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    dispatch(cartActions.addToCart(id));
  };

  return (
    <div className="cardProduct container page-wrapper cursor-pointer">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <div className="flex justify-center">
                <img className="img" src={product.img} alt="" />
              </div>

              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{product.name}</span>
                  <span className="p-company">{product.category}</span>
                </div>
                <div className="a-size">
                  Available sizes : <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <div className="cart" onClick={() => handleAddToCart(product.id)}>
                <span className="price">{changeVND(product.price)} đ</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
