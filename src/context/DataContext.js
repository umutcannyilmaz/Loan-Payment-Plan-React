import { createContext, useEffect } from "react";
import { useState } from "react";

const DataContext = createContext();

export const DataProvider = ({children})=>{

 const [formData,setformData]= useState({})
  const [krediTutarı,setkrediTutarı]=useState(Number(formData?.loanAmount))
  const [taksitSayısı, settaksitSayısı]= useState(Number(formData?.loanTerm))
  const [karOranı,setkarOranı]=useState(Number(formData?.interestRate))
  const [paymentinterval,setPaymentInterval]=useState(formData?.payBack)
  const [bsmv,setbsmv]=useState(Number(formData?.bsmv))
  const [kkdv,setkkdv]=useState(Number(formData?.kkdv))
  const [visible,setvisible]=useState(false)


  const values = {
    formData,setformData,taksitSayısı,karOranı,bsmv,kkdv,krediTutarı,visible,setvisible,setPaymentInterval,paymentinterval
  }

  useEffect(()=>{
    setkrediTutarı(Number(formData?.loanAmount))
    settaksitSayısı(Number(formData.loanTerm));
    setPaymentInterval(formData.payBack)

    if(paymentinterval==="yıllık"){
      setkarOranı(Number(formData.interestRate)*12)
    }else if(paymentinterval==="aylık"){
      setkarOranı(Number(formData.interestRate))
    }else if(paymentinterval==="haftalık"){
      setkarOranı(Number(formData.interestRate)/4)}
    
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