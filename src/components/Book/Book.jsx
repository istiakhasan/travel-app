import React from 'react'
import {Container, Grid, TextField, Button} from "@mui/material"
import Menubar from '../MenuBar/Menubar'

import './Book.css'
import { useParams,useNavigate} from 'react-router-dom'
import {ProductState} from '../Context/Context'


const Book = () => {
    const {product} = ProductState()
   
    const {bookid} = useParams()
    const book = product.find(pd => pd.id === bookid)
    const navigate=useNavigate()


    const startbooking=()=>{
        navigate('/bookdetails')
    }
   

    return (
        <Container className="home" maxWidth="large">
            <Menubar showbtn={true}/>

            <Grid container>
                <Grid item md={6}>

                    <div className="banner-wraper">

                        <h1>{book.name}
                        </h1>
                        <p>{book.sortdesc}</p>

                    </div>

                </Grid>
                <Grid item md={6} >
                    <div className="booking_form">

                        <form>
                            <div className="form-group">
                                <label>Origin</label>
                                <TextField label="Origin" fullWidth/>

                            </div>

                            <div>
                                <label>Destination</label>

                                <TextField label="Destination" fullWidth/>

                            </div>

                            <div className="bookwraper">

                                <TextField
                                    id="date"
                                    type="date"
                                    label="To"
                                    defaultValue="2017-05-24"
                                    sx={{
                                        width: 220
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}/>

                                <TextField
                                    id="date"
                                    variant="outlined"
                                    type="date"
                                    label="From"
                                    defaultValue="2017-05-24"
                                    sx={{
                                        width: 220
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}/>

                            </div>
                            <Button
                             onClick={startbooking}

                            
                                style={{
                                    background: "#F9A51A"
                                }}
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 5
                                }}>Start Booking</Button>

                        </form>
                    </div>
                </Grid>

            </Grid>
        </Container>
    )
}

export default Book
