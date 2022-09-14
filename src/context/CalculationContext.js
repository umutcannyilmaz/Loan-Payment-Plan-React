import { createContext, useEffect, useContext } from "react";
import DataContext from "./DataContext";

const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {


  const { taksitSayısı, karOranı, bsmv, kkdv, krediTutarı } = useContext(DataContext)


  function installmentArray() {
    const aylık = []

    let kalantoplamanapara = krediTutarı
    let ilkfaiz;
    let kkdftutarı;
    let bsmvtutarı;
    let aylıködenenanapara;
    const taksitTutarı = Number(((kalantoplamanapara / ((1 - (1 / (Math.pow((1 + (karOranı / 100 + (kkdv / 100 + bsmv / 100) * karOranı / 100)), (taksitSayısı))))) / (karOranı / 100 + (kkdv / 100 + bsmv / 100) * karOranı / 100)))).toFixed(2))


    if (isNaN(krediTutarı)) {
      return 
    } else {
      function ilkaylık() {

        for (var i = 0; i < taksitSayısı - 1; i++) {

          ilkfaiz = Number((kalantoplamanapara * (karOranı / 100)).toFixed(2))
          kkdftutarı = Number((ilkfaiz * kkdv / 100).toFixed(2))
          bsmvtutarı = Number((ilkfaiz * bsmv / 100).toFixed(2))
          aylıködenenanapara = Number((taksitTutarı - ilkfaiz - kkdftutarı - bsmvtutarı).toFixed(2))
          kalantoplamanapara = Number((kalantoplamanapara - aylıködenenanapara).toFixed(2))

          aylık.push([taksitTutarı, aylıködenenanapara, ilkfaiz, kkdftutarı, bsmvtutarı, kalantoplamanapara])
        }

        sonaylık()
        

        if (isNaN(ilkfaiz)) {
          return
        } else {
          return aylık
        }

      }


      function sonaylık() {

        const sonfaiz = Number(((taksitTutarı - kalantoplamanapara) / (1 + kkdv / 100 + bsmv / 100)).toFixed(2))
        kkdftutarı = Number((sonfaiz * kkdv / 100).toFixed(2))
        bsmvtutarı = Number((sonfaiz * bsmv / 100).toFixed(2))
        aylıködenenanapara = Number((taksitTutarı - ilkfaiz - kkdftutarı - bsmvtutarı).toFixed(2))

        aylık.push([taksitTutarı, kalantoplamanapara, sonfaiz, kkdftutarı, bsmvtutarı, 0])
      }
      return ilkaylık()
    }



  } // hesap fonksiyonu bitimi

  const sonuc = installmentArray()
  const values = {
    sonuc
  }


  return (
    <CalculationContext.Provider value={values}>
      {children}
    </CalculationContext.Provider>
  )

}
export default CalculationContext;