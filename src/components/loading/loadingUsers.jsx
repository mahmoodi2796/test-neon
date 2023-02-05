import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function LoadingUsers() {
     return Array(6).fill({}).map((s,i)=>{
        return(
            <div key={i} className="col-4 text-center p-5">
                <Skeleton className='mb-4' circle={true} height={100} width={100}/>
                <Skeleton className='mb-2' count={2} height={30}/>
            </div>
        )
     })
}

export default LoadingUsers