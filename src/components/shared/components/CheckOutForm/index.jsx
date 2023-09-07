import OrderSummary from "./OrderSummary";
import ContactForm from "./contact";
import Payments from "./Payments";
import { useState, useEffect } from "react";
import Alert from "@elements/alert";
import {decodeValue} from '@Js'

export default function CheckOutForm() {
  const token = localStorage.getItem("token") || "";
  const user = decodeValue(token)

  const [backStep, setBackStep] = useState (false)
  const [isPayment, setIsPayment] = useState(false);
  const [shipping, setShipping] = useState(0);
  const [contactInfo, setContactInfo] = useState({})
  const [showAlert, setShowAlert] = useState(false);
  const [formName, setFormName] = useState("contact")


  const handleShipping = (type) => {
    if (type === "express") {
      setShipping(50000);
    } else {
      setShipping(0);
    }
  };

  const handleBackStep = (name) => {
    if(name === "payment") {
      setFormName("contact")
      setBackStep(false )
      setIsPayment(false)
    }
  }

  const handleNextStep = (name) => {

    if(name === "contact") {
      console.log('33333333333333333333');
      if(contactInfo.email && contactInfo.address && contactInfo.phoneNumber) {
        setIsPayment(true)
        setBackStep(true)
        setShowAlert(false)
        setFormName("payment")
      }else {
        setShowAlert(!showAlert)
      }
    }
  }

  useEffect(() => {
    setContactInfo({
      email: user.email,
      address: user.address,
      phoneNumber: user.phone,
    })
  }, [])


  return (
    <div className="flex flex-col justify-center items-center bg-black/60 py-10"> 
     
      <div className="relative bg-slate-200 grid grid-cols-1 w-full lg:grid-cols-2 lg:w-[85%]">
        {
          showAlert ? 
          <div className="fixed left-[36%] top-[100px]">
            <Alert showAlert={showAlert} setShowAlert={setShowAlert}  message="Contact information required !" />
          </div>: 
          ""
        }
       
        <div className=" ">
          {isPayment ? (
            <Payments />
          ) : (
            <ContactForm handleShipping={handleShipping}  contactInfo={contactInfo} setContactInfo={setContactInfo}/>
          )}

          <div className="flex justify-between px-10 mb-10">
            <button
              onClick={() => handleBackStep(formName)}
              className={`${
                backStep ? "btn--active" : "btn--non-active"
              } flex items-center`}
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Back step
            </button>
            <button
              onClick={() =>handleNextStep(formName)}
              className={`${isPayment ? "btn--non-active" : "btn--active"}`}
            >
              Payment
              <i className="fa-solid fa-arrow-right mt-1 ml-2"></i>
            </button>
          </div>
        </div>
        <div className="">
          <OrderSummary shipping={shipping} />
        </div>
      </div>
    </div>
  );
}
