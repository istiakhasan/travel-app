import React from 'react'
import {Container, Grid, TextField, Button} from "@mui/material"
import Menubar from '../MenuBar/Menubar'

import './Book.css'
import {useParams} from 'react-router'
import {ProductState} from '../Context/Context'

const Book = () => {
    const {product} = ProductState()
    const {bookid} = useParams()
    const book = product.find(pd => pd.id === bookid)
    console.log(book)

    return (
        <Container className="home" maxWidth="large">
            <Menubar showbtn={true}/>

            <Grid container="container">
                <Grid item="item" md={6}>

                    <div className="banner-wraper">

                        <h1>{book.name}
                        </h1>
                        <p>{book.sortdesc}</p>

                    </div>

                </Grid>
                <Grid item="item" md={6} alignItems="center">
                    <div className="booking_form">

                        <form>
                            <div className="form-group">
                                <label>Origin</label>
                                <TextField label="Origin" fullWidth="fullWidth"/>

                            </div>

                            <div>
                                <label>Destination</label>

                                <TextField label="Destination" fullWidth="fullWidth"/>

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
                                style={{
                                    background: "#F9A51A"
                                }}
                                fullWidth="fullWidth"
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
