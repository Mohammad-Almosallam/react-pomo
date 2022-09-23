import React, { useState } from 'react'

export default function AlertNotif() {
    const [showNotf,setShowNotf] = useState('alertNotif')

    function handleNotifaction(){
        setShowNotf('alertNotif-closed')
    }

  return (
      <div className={showNotf}>
            <p>If Lagging - Elable hardware acceleration in chrome settings or click ( Hide 3D ) button in menu </p>
            <ion-icon class='notif-icon' onClick={()=>{handleNotifaction()}} name="close-outline"></ion-icon>
      </div>
  );
}