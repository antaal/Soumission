import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import {useReactToPrint} from 'react-to-print';
export const ReactPdfPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content:()=>componentRef.current,
        documentTitle: 'emp-data',
        onAfterPrint:()=>alert('print success')
    })
  return (
    <>
    <div ref={componentRef} style={{width:'100%', height:window.innerHeight}}>
<div>
    <Button variant="success" onClick={handlePrint}>Print</Button>
</div>

    </div>
    </>
  )
}
export default ReactPdfPrint;