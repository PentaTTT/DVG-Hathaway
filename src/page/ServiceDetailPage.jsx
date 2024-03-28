import React from 'react'
import { serviceNetFanPage, serviceNetFanPageExtra } from '../ultils/serviceDetail'
import videoBg from "/image/video_service.mp4"
import { Contact, Team } from '../component'
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles"

const ServiceDetailPage = () => {

    const title = 'BÁO GiÁ TỔNG HỢP FANPAGE LOCAL'

    const columnsCustome = serviceNetFanPageExtra?.columns?.map(item => ({
        ['name']: item, ['options']:
        {
            customBodyRender: (value) => (
                !value?.indexOf("https://") ?
                    <a
                        href={value}
                        target='_blank'
                        className={!value?.indexOf('https://') && 'px-3 py-2 text-white bg-green rounded-md'}
                    > {!value?.indexOf('https://') ? 'Xem Fanpage' : value}</a>
                    :
                    <p>{value}</p>
            )
        }
    }))
    const columns = columnsCustome


    const data = serviceNetFanPageExtra?.data

    const options = {
        selectableRows: 'none',
        rowsPerPage: 10,
        rowsPerPageOptions: [10, 20, 30, 100],
        responsive: 'standard'
    };

    //style table
    const theme = createTheme({
        typography: {
            fontFamily: "Open Sans",
        },
        palette: {
            background: {
                paper: "#fff",
                default: "#fff",
            },
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px 4px",
                    },
                    body: {
                        padding: "15px 20px",
                    },
                }
            }
        }
    })

    return (
        <div className=''>
            <div className='relative'>

                <video src={videoBg} loop muted autoPlay playsinline
                    className='w-full lg:h-[24vw] object-cover shadow-md'
                />

                <div className='absolute lg:top-[45%] top-[40%] lg:left-48 left-5'>
                    <h1 className='font-fontRoboto lg:text-3xl text-2xl text-yellowColor'>Dịch Vụ Network Fanpage</h1>
                    <p className='my-3'></p>
                </div>
            </div>

            <div className='wrapper py-10'>
                <h2 className='text-center text-green font-bold font-fontRoboto text-2xl my-10'>Network Fanpage</h2>
                <div className='grid lg:grid-cols-3 gap-5 p-5 md:grid-cols-2'>
                    {serviceNetFanPage && serviceNetFanPage.length > 0 &&
                        serviceNetFanPage.map((item) => {
                            return (
                                <div key={item.id}
                                    className='bg-white flex justify-center p-5 rounded-md shadow-md hover:shadow-2xl'
                                >
                                    <a href={item.link} target='_blank'>
                                        <div>
                                            <img loading='lazy' src={item.img} alt={item.name}
                                                className='rounded-full h-[250px] w-[250px] flex justify-center'
                                            />
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-xl font-bold py-5 font-fontRoboto'>{item.name}</p>
                                            <p>Follow: {item.follow}</p>
                                            <p>Chi Phí Post: {item.cost}</p>
                                        </div>

                                    </a>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='py-12 px-5'>
                    <ThemeProvider theme={theme}>
                        <MUIDataTable
                            title={title}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>

            <Team />
            <Contact />
        </div>
    )
}

export default ServiceDetailPage