/* eslint-disable react/prop-types */
import "./card.css";

function CardProduct({ product }) {
  return (
    <div className="container page-wrapper cursor-pointer">
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

              <div className="cart ">
                <span className="price">$120</span>
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
