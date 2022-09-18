import { createContext, useEffect } from "react";
import { useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children})=>{

 const [formData,setformData]= useState({})
 
 /* formData verilerini matematiksel işlemlerde daha kolay uygulayabilmek için
 ayrı ayrı statelere kaydettik
 */
  const [loanAmount,setLoanAmounth]=useState(Number(formData?.loanAmount))
  const [loanTerm, setLoanTerm]= useState(Number(formData?.loanTerm))
  const [interestRate,setInterestRate]=useState(Number(formData?.interestRate))
  const [paymentinterval,setPaymentInterval]=useState(formData?.payBack)
  const [bsmv,setbsmv]=useState(Number(formData?.bsmv))
  const [kkdv,setkkdv]=useState(Number(formData?.kkdv))
  const [visible,setvisible]=useState(false)


  const values = {
    formData,setformData,loanTerm,interestRate,bsmv,kkdv,loanAmount,visible,setvisible,setPaymentInterval,paymentinterval
  }

  useEffect(()=>{
    setLoanAmounth(Number(formData?.loanAmount))
    setLoanTerm(Number(formData.loanTerm));
    setPaymentInterval(formData.payBack)

    if(paymentinterval==="yearly"){
      setInterestRate(Number(formData.interestRate)*12)
    }else if(paymentinterval==="monthly"){
      setInterestRate(Number(formData.interestRate))
    }else if(paymentinterval==="weekly"){
      setInterestRate(Number(formData.interestRate)/4)}
    
    setbsmv(Number(formData.bsmv))
    setkkdv(Number(formData.kkdv))
  },[formData,paymentinterval])

  return(
    <DataContext.Provider value={values}>
        {children}
    </DataContext.Provider>
  )

}

export default DataContext;