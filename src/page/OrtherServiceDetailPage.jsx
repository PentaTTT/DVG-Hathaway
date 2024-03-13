import React from 'react'
import { Contact, Team } from "../component/index"
import videoBg from "/image/video_service.mp4"
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useLocation } from 'react-router-dom';

const OrtherServiceDetailPage = () => {
    const location = useLocation();
    const serviceData = location.state

    const title = 'Nội Dung'

    const columnsCustome = serviceData?.serviceDetail?.columns.map(item => ({
        ['name']: item, ['options']:
        {
            customBodyRender: (value) => (
                <p
                    className={`inline-block px-3 py-1 rounded-full ${value === 'true' ? 'bg-lime-500 text-white' : value === 'false' ? 'bg-red-500 text-white' : 'bg-transparent text-slate-800'}`}
                >{value === 'true' ? 'Có' : value === 'false' ? 'Không' : value}</p>
            )
        }
    }))
    const columns = columnsCustome


    const data = serviceData?.serviceDetail?.data

    const options = {
        selectableRows: 'none',
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10, 20, 30],
        responsive: 'standard'
    };

    //style table
    const theme = createTheme({
        typography: {
            fontFamily: "Roboto Slab",
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

                <video src={videoBg} loop muted autoPlay
                    className='w-full lg:h-[24vw] object-cover shadow-md'
                />

                <div className='absolute lg:top-[45%] top-[40%] lg:left-48 left-5'>
                    <h1 className='font-fontRoboto lg:text-3xl text-2xl text-yellowColor'>Dịch Vụ {serviceData.title}</h1>
                    <p className='my-3'></p>
                </div>
            </div>

            <div className='wrapper py-10'>
                <h2 className='text-center text-green font-bold font-fontRoboto text-2xl my-10'>{serviceData.title}</h2>
                <div className=''>
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

export default OrtherServiceDetailPage