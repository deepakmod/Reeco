import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import avocado from '../../assets/avocado.jpg';
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Backdrop, Box, Fade, Modal, Typography} from "@mui/material";
import {updateStatus} from "../../redux/orderSlice";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    width: 500,
    backgroundColor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function Tables() {
    let rows = useSelector((state) => state.orders.data);

    const dispatch = useDispatch();

    const [missingProduct,setMissingProduct] = useState({});
    console.log(missingProduct)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleStatusChange = (index,status) => {
        dispatch(updateStatus({ index, status: status }));
    };


    let status= {
        'Approved':'bg-[#4FD185] px-5 py-2 text-white rounded-full',
        'Price Updated':'bg-[#4FD185] px-5 py-2 text-white rounded-full',
        'Quantity Updated':'bg-[#4FD185] px-5 py-2 text-white rounded-full',
        'Missing':'bg-[#F66D44] px-5 py-2 text-white rounded-full',
        'Missing - Urgent':'bg-[#DB2114] px-5 py-2 text-white rounded-full'
    };


    return (
        <div>
            <TableContainer component={Paper}  className="mt-8 text-slate-500 border-t" style={{boxShadow:"none",borderRadius:'16px'}} >
                <Table sx={{ minWidth: 650 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Product name</TableCell>
                            <TableCell>Brand</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row,index) => (
                            <TableRow className="h-20" key={index}>
                                <TableCell>
                                    <div  className="flex items-center gap-2">
                                        <div><img width='50' src={avocado} alt='avocado'/></div>
                                        <span className="flex-1 w-[150px]">{row.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{row.brand}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                                <TableCell>{row.total}</TableCell>
                                <TableCell style={{background:"#F9F9F9",minWidth:"300px"}}  >
                                    <div className="flex items-center justify-between max-full">
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className={status[row.status]} >{row.status}</div>
                                        </div>
                                        <div className="flex gap-5 items-center">
                                            <button onClick={()=>{handleStatusChange(index,'Approved')}}>
                                                <i className={`ti ti-check text-2xl hover:text-green-600 hover:font-bold ${(row.status === 'Approved') ? 'text-[#4FD185]  font-bold' : ''}`} ></i>
                                            </button>
                                            <button onClick={()=>{
                                                let obj = {
                                                    index: index,
                                                    element: row
                                                }
                                                setMissingProduct(obj);
                                                handleOpen();
                                            }}>
                                                <i className={`ti ti-x text-2xl hover:text-red-600 hover:font-bold ${(row.status==='Missing')? 'text-[#F66D44]  font-bold' : (row.status==='Missing - Urgent')? 'text-[#DB2114]  font-bold' : ''}`}
                                                  ></i>
                                            </button>
                                            <span className="">Edit</span>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <div className="flex items-center justify-between">
                                <div className="font-bold text-2xl">Missing product</div>
                                <button onClick={handleClose}>
                                    <i className="ti ti-x text-2xl"></i>
                                </button>
                            </div>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Is {missingProduct?.element?.name}... urgent
                        </Typography>
                        <div className="flex justify-end items-center gap-6 pt-6 pr-6">
                            <button onClick={()=>{
                                handleStatusChange(missingProduct?.index,'Missing');
                                handleClose();
                            }} className="font-bold text-xl">No</button>
                            <button  onClick={()=>{
                                handleStatusChange(missingProduct?.index,'Missing - Urgent');
                                handleClose();
                            }} className="font-bold text-xl">Yes</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
}
