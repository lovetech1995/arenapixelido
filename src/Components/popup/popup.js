import "../../App.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import backgroudPop from './image/backgroud.png'
import textfield from './image/FRAME.png'
import plusbt from './image/plus.png'
import minusbt from './image/minus.png'
import bt from './image/bt.png'
import { useWindowSize } from "../../useWindowSize";

export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { size } = useWindowSize({ gameWidth: 1920, gameHeight: 3405 });
    const { ratio } = size;
    return (
        <div>
          
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 1175 * ratio,
                    height: 569 * ratio,
                    backgroundImage: `url(${backgroudPop})`, // Thay đổi đường dẫn đến hình ảnh của bạn
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}>
                    <Typography id="quantity" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 210 * ratio, left: 135 * ratio }} variant="h3" component="h2">
                        Quantity(slots)
                    </Typography>
                    <a ><img src={minusbt} className='absolute' alt="minusbt" style={{ height: 56 * ratio, width: 57 * ratio,top: 210 * ratio, left: 640 * ratio  }} /></a>

                    <img src={textfield} className='absolute' alt="textfield" style={{ height: 62 * ratio, width: 334 * ratio, top: 205 * ratio, left: 710 * ratio }} />

                    <a><img src={plusbt}  className='absolute'  alt="plusbt" style={{ height: 56 * ratio, width: 57 * ratio,top: 210 * ratio, left: 1055 * ratio }} /> </a>

                    <Typography id="number" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 210 * ratio, left: 860 * ratio }} variant="h3" component="h2">
                        1
                    </Typography>


                    <Typography id="receive" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 350 * ratio, left: 135 * ratio }} variant="h3" component="h2">
                        Receive:
                    </Typography>

                    <Typography id="receiveNumber" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 350 * ratio, left: 330 * ratio }} variant="h3" component="h2">
                        3000 APX
                    </Typography>

                    <Typography id="price" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 350 * ratio, left: 680 * ratio }} variant="h3" component="h2">
                        Price:
                    </Typography>
                    <Typography id="receive" className='text-bold absolute' style={{ fontSize: 50 * ratio, top: 350 * ratio, left:820 * ratio }} variant="h3" component="h2">
                        150 USD
                    </Typography>
                    <a><img src={bt}  className='absolute'  alt="bt" style={{ height: 76 * ratio, width: 285 * ratio,top: 480 * ratio, left:455 * ratio}} /> </a>

                </Box>
            </Modal>
        </div>
    );
}
