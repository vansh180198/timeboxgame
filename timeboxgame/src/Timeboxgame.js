import React, { useState } from 'react'

const Timeboxgame = ({grid}) => {
    const[griddata,setgriddata]=useState(grid);
    const[paintedgrid,setpaintedgrid]=useState([]);
    
    function handleclick(rowindex,colindex){
        let selectedid=`${rowindex}${colindex}`;
        document.getElementById(selectedid).style.backgroundColor="green";
        let arr=paintedgrid;
        arr.push(selectedid);
        setpaintedgrid(arr);
        if(paintedgrid.length==7){
            let id=setInterval(()=>{
                let ele=paintedgrid.pop();
                console.log(ele)
                document.getElementById(ele).style.backgroundColor="yellow";
                if(paintedgrid.length==0){
                    clearInterval(id);
                    setpaintedgrid([])
                }

            },1000)
        }



    }
    
    return (
    <div>
        <div className='container'>
                {griddata.map((row,rowindex)=>{
                    return <div className='row'>{row.map((cell,colindex)=>{
                        return <div onClick={()=>handleclick(rowindex,colindex)} id={`${rowindex}${colindex}`} className={cell==1?"filled cell":"empty cell"}></div>
                    })}</div>
                })}
        </div>

    </div>
  )
}

export default Timeboxgame