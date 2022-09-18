import { createContext, useEffect, useContext } from "react";
import DataContext from "./DataContext";

const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {


  const { loanTerm,interestRate,bsmv,kkdv,loanAmount } = useContext(DataContext)


  function installmentArray() {
    const installment = []
    let remainingTotalPrincipal = loanAmount
    let interestAmount;
    let kkdfAmount;
    let bsmvAmount;
    let monthlyPrincipal;

    /* 
    Eşit Taksit Tutarlı Kredi Ödemelerinin Günümüz değeri üzerinden taksit tutarı hesaplanmıştır.
    Eğer belli bir dönemde faiz oranı değişseydi gelecek dönem formülü kullanılacaktır.
    */
    const repaymentAmount = Number(((remainingTotalPrincipal / ((1 - (1 / (Math.pow((1 + (interestRate / 100 + (kkdv / 100 + bsmv / 100) * interestRate / 100)), (loanTerm))))) / (interestRate / 100 + (kkdv / 100 + bsmv / 100) * interestRate / 100)))).toFixed(2))


    if (isNaN(loanAmount)) {
      return 
    } else {
      
      function firstInstallment() {
// loanAmount Nan değilse sontaksit hariç kalan tüm taksitleri firstInstallment fonksiyonu hesaplıyor.
        for (var i = 0; i < loanTerm - 1; i++) {

          interestAmount = Number((remainingTotalPrincipal * (interestRate / 100)).toFixed(2))
          kkdfAmount = Number((interestAmount * kkdv / 100).toFixed(2))
          bsmvAmount = Number((interestAmount * bsmv / 100).toFixed(2))
          monthlyPrincipal = Number((repaymentAmount - interestAmount - kkdfAmount - bsmvAmount).toFixed(2))
          remainingTotalPrincipal = Number((remainingTotalPrincipal - monthlyPrincipal).toFixed(2))

          installment.push([repaymentAmount, monthlyPrincipal, interestAmount, kkdfAmount, bsmvAmount, remainingTotalPrincipal])
        }

        
        lastInstallment()
        

        if (isNaN(interestAmount)) {
          return
        } else {
          return installment
        }

      }


      function lastInstallment() {
        //sadece son taksiti hesaplayan fonksiyon
        const interestAmount = Number(((repaymentAmount - remainingTotalPrincipal) / (1 + kkdv / 100 + bsmv / 100)).toFixed(2))
        kkdfAmount = Number((interestAmount * kkdv / 100).toFixed(2))
        bsmvAmount = Number((interestAmount * bsmv / 100).toFixed(2))
        monthlyPrincipal = Number((repaymentAmount - interestAmount - kkdfAmount - bsmvAmount).toFixed(2))

        installment.push([repaymentAmount, remainingTotalPrincipal, interestAmount, kkdfAmount, bsmvAmount, 0])
      }
      return firstInstallment()
    }

  } // hesap fonksiyonu bitimi

  const installment = installmentArray()
  const values = {
    installment
  }


  return (
    <CalculationContext.Provider value={values}>
      {children}
    </CalculationContext.Provider>
  )

}
export default CalculationContext;