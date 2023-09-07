import React, { useEffect, useState } from "react";
import "../checkout.css";
import Button from "@elements/button";





export default function Payments() {
  var pattern = /[^\x00-\x7F]/g;
  const [formDate, setFormDate] = useState({
    month: '',
    year: '',
  })

  const [number, setNumber] = useState({
    partOne: '',
    partTwo: '',
    partThree: '',
    partFour: ''
  })

  const [paymentInfo, setPaymentInfo] = useState({
    nameOnCard: '',
    cardNumber: '',
    expireDate: '',
    cvc: ''
  })


  const [errors, setErrors] = useState({
    nameOnCard: '',
    cardNumber: '',
    expireDate: '',
    cvc: ''
  })


  const [choices, setChoices] = useState({
    visa: false,
    master: false,
  });

  const { visa, master } = choices;

  const changeHandler = (name) => {
    if (name === "visa") {
      setChoices({
        visa: true,
        master: false,
      });
    } else {
      setChoices({
        visa: false,
        master: true,
      });
    }
  };
 
  const handleCardNumber = (e) => {
    if(e.target.value.length === 4) {
      setNumber({
        ...number,
        [e.target.name] : e.target.value
      })
    }else {
      setNumber({
        ...number,
        [e.target.name] : '',
      })
    }
  } 
  
  useEffect(() => {
    setPaymentInfo({
      ...paymentInfo,
      cardNumber: number.partOne + number.partTwo + number.partThree + number.partFour
    })
  }, [number])

  // Expire Date
  const handleExpireDate = (e) =>{
    if(e.target.value.length === 2) {
      if(e.target.name === "year") {
        setFormDate({
            ...formDate,
            [e.target.name] : e.target.value,
        })
      }else if( e.target.value <= 12) {
          setFormDate({
            ...formDate,
            [e.target.name] : e.target.value
          })
      }else {
          setFormDate({
            ...formDate,
            [e.target.name] : '',
          })
      } 
    }else {
      setFormDate({
        ...formDate,
        [e.target.name] : '',
      })
    }

    setPaymentInfo({
      ...paymentInfo,
      expireDate: formDate.year + formDate.month 
    })
  }

  useEffect(() => {
    setPaymentInfo({
      ...paymentInfo,
      expireDate: formDate.year + formDate.month 
    })
  }, [formDate])


  const handlePaymentInfo = (e) => {
    // Name on Card
    if(!e.target.value) {
      setErrors({
        ...errors,
        [e.target.name]: "Required !"
      })
    }else if(e.target.name === 'nameOnCard') {
      if(pattern.test(e.target.value)) {
        setErrors({
          ...errors,
          [e.target.name]: "Name on card is incorrect (example: VU VAN DUC) !"
        })
      }else {
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
        setPaymentInfo({
          ...paymentInfo,
          [e.target.name]: e.target.value
        })
      }

    }else if(e.target.name === 'cvc') {
      if(/[0-9]/.test(e.target.value)) {
        setPaymentInfo({
          ...paymentInfo,
          [e.target.name]: e.target.value
        })
      }
    }else {
      setErrors({
        ...errors,
        [e.target.name]: ""
      })
    }

  }

  const handlePayment = () => {
    let isChoices = choices.visa || choices.master
    console.log(isChoices);
    
    const isPayment = paymentInfo.nameOnCard && 
                      paymentInfo.cardNumber.length === 16 && 
                      paymentInfo.expireDate.length === 4 && 
                      paymentInfo.cvc.length === 3

    if(isPayment && isChoices ) {
      console.log(true);
    }else {
      console.log();
    }
  }

  return (
    <div>
      <div className="px-10 my-10">
        {/* Contact information */}
        <div className=" border-b-[1px] border-b-neutral-300 pb-6">
          <p className="text-3xl font-istok_web text-primary-v1">Payment</p>
          <div className="flex justify-center items-center gap-8 my-8">
            <div
              onClick={() => changeHandler("visa")}
              className="cursor-pointer"
            >
              <img
                className={`w-[530px] ${visa ? "checked" : ""}`}
                src="https://th.bing.com/th/id/OIP.5cvB_KzMHESmJhw_NXDKVgAAAA?pid=ImgDet&rs=1"
                alt=""
              />
            </div>
            <div
              onClick={() => changeHandler("master")}
              className="w-[500px] cursor-pointer"
            >
              <img
                className={`${master ? "checked" : ""}`}
                src="https://www.cloudhostnews.com/wp-content/uploads/2021/02/Mastercard-To-Allow-Merchants-Accept-Payments-in-Crypto.jpg"
                alt=""
              />
            </div>
          </div>
          <form action="">
            {/* Name on card */}
            <div className="mt-3">
              <label className="text-lg font-istok_web " htmlFor="">
                Name on card
              </label>
              <br />
              <input
                autoComplete="off"
                className="uppercase border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                type="text"
                name="nameOnCard"
                placeholder="VU VAN DUC"
                onChange={(e) => handlePaymentInfo(e)}
              />
              <p className="text-red-500">{errors.nameOnCard}</p>
            </div>
            {/* Card number */}
            <div className="mt-3">
              <label className="text-lg font-istok_web " htmlFor="">
                Card number
              </label>
              <br />
              <div className="flex items-center border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700">
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="partOne"
                  maxLength={4}
                  placeholder="_ _ _ _"
                  onChange={(e) => handleCardNumber(e)}
                />
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="partTwo"
                  maxLength={4}
                  placeholder="_ _ _ _"
                  onChange={(e) => handleCardNumber(e)}
                />
                <input
                  className="w-10 focus:outline-none mr-2"
                  type="text"
                  name="partThree"
                  maxLength={4}
                  placeholder="_ _ _ _"
                  onChange={(e) => handleCardNumber(e)}
                />
                <input
                  className="w-10 focus:outline-none "
                  type="text"
                  name="partFour"
                  maxLength={4}
                  placeholder="_ _ _ _"
                  onChange={(e) => handleCardNumber(e)}
                />
              </div>
            </div>
            {/* Expiration date (MM/YY) */}
            <div className="mt-4 flex justify-between gap-5 w-[300px]">
              <div className="">
                <label className="text-lg font-istok_web" htmlFor="">
                  Expiration date (MM/YY)
                </label>
                <div className="flex items-center border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700">
                  <input
                    className="text-right w-20 focus:outline-none mr-2"
                    type="text"
                    name="month"
                    maxLength={2}
                    placeholder="MM"
                    onChange={(e) => handleExpireDate(e)}
                  />
                  <span>
                      {"//"}
                  </span>
                  <input
                    className="w-20 focus:outline-none ml-2"
                    type="text"
                    name="year"
                    maxLength={2}
                    placeholder="YY"
                    onChange={(e) => handleExpireDate(e)}
                  />
                </div>
              </div>
              {/* CVC */}
              <div className="flex-1">
                <label className="text-lg font-istok_web" htmlFor="">
                  CVC
                </label>
                <input
                  className="border-[1px] border-blue-300  rounded-lg bg-white w-full h-[40px] px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-700"
                  type="text"
                  placeholder="789"
                  name='cvc'
                  maxLength={3}
                  onChange={e => handlePaymentInfo(e)}
                />
              </div>
            </div>
            <div 
              onClick={() => handlePayment()}
              className="text-xl border-t-[1px] pt-4"
            >
              <Button value={"Payment"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
