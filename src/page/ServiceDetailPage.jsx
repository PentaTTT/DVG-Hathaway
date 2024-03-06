import React from 'react'
import { serviceDetail } from '../ultils/serviceDetail'

const ServiceDetailPage = () => {
    console.log(serviceDetail)
    return (
        <div className='wrapper'>
            <div>
                <h1>title</h1>
                <p>desc</p>
            </div>
            <div className=''>
                <h2 className='text-center'>Network Fanpage</h2>
                <div className='grid grid-cols-3'>
                    {serviceDetail && serviceDetail.length > 0 &&
                        serviceDetail.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.img} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>Follow: {item.follow}</p>
                                    <p>Cost: {item.cost}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default ServiceDetailPage