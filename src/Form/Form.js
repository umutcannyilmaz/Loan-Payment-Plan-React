import React, { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react'
import DataContext from '../context/DataContext'
import "./form.css"
import validations from './validations'
import {useFormik} from "formik"
import CalculationContext from '../context/CalculationContext'

function Form() {

  const { setformData,setvisible} = useContext(DataContext)
  const {handleChange, handleSubmit, handleBlur, values, touched, errors, isSubmitting} = useFormik({
    initialValues: {loanAmount:"", loanTerm:"",interestRate:"",payBack:"haftalık",bsmv:"",kkdv:"" },

    validationSchema:validations,
    onSubmit: values => { setformData(values); setvisible(true)
      
    },
  });

  return (
    <div className='main'>
      <div className='formbox'>
        <form onSubmit={handleSubmit}>
        <div><div>Kredi Tutarı</div><input name='loanAmount' value={values.loanAmount}  onChange={handleChange} placeholder='100.000TL'></input></div>
          <div><div>Taksit Sayısı</div><input name='loanTerm'value={values.loanTerm}  onChange={handleChange} placeholder='12'></input></div>
          <div><div>Kar Oranı</div><input name='interestRate'value={values.interestRate}  onChange={handleChange} placeholder='1.25%'></input></div>

          <div><div>Taksit Aralığı</div>
            <select name="payBack" value={values.payBack}  onChange={handleChange}>
              <option value="haftalık">Haftalık</option>
              <option value="aylık">Aylık</option>
              <option value="yıllık">Yıllık</option>
            </select></div>
          <div><div>BSMV</div> <input name='bsmv' value={values.bsmv}  onChange={handleChange} placeholder='10%'></input></div>
          <div><div>KKDV</div><input name='kkdv'value={values.kkdv}  onChange={handleChange} placeholder='15%'></input></div>
          <button type='submit' onClick={handleSubmit}>Hesapla</button>
        </form>

      </div>
    </div>
  )
}

export default Form