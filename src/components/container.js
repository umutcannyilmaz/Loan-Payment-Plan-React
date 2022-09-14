import React, { useContext, useRef } from 'react'
import Form from '../Form/Form'
import BasicTable from './table'
import Modal from './Modal/Modal'
import DataContext from '../context/DataContext'

function Container() {
  const {visible}=useContext(DataContext)
  const modalRef =useRef();
  return (
    <div>
      <h1>KREDİ ÖDEME PLANI</h1>
        <Form  />
        {visible && <button onClick={() => visible && modalRef.current.openModal()}>
          Tam Ekran Görüntüle
        </button>}
        
        <BasicTable/>
        <Modal ref={modalRef}>
        <BasicTable/>
        </Modal>
        
    </div>
    
  )
}

export default Container