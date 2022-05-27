import {Button, Card, IconButton, Input, Paper, Snackbar, TextField} from "@mui/material";
import style from "../styles/Components.module.css"
import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function ApiLogin(){

    const [open, setOpen] = React.useState(false);
    const [loginData, setLoginData] = React.useState({
        username:"",
        password:"",
        authToken:"blablabla"
    });


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={style.loginContainer}>

            <Paper className={style.paper} elevation={6} sx={{
             p:6,
            }}>
                <h2 style={{
                    justifySelf:"center",
                    paddingBottom:10,}}
                >Login</h2>

                <div className={style.loginFields}>
                    <TextField
                        value={loginData.username}
                        variant="outlined"
                        label="Username"
                        onChange={(e)=>{
                            setLoginData({
                                ...loginData,
                                username: e.target.value
                            })
                        }}/>

                    <TextField
                        value={loginData.password}
                        variant="outlined"
                        label={"Password"}
                        type={"password"}
                        onChange={(e) =>{
                            setLoginData({
                                ...loginData,
                                password: e.target.value
                            })
                        }}/>
                </div>
                <Button
                    onClick={()=>{setOpen(true)}}
                    variant={"contained"}
                    size={"large"}
                    style={{
                        marginTop:30,
                        marginLeft:10,
                        marginRight:10,
                    }}
                >Submit</Button>
            </Paper>

            <Snackbar
                open={open}
                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                autoHideDuration={1000}
                onClose={handleClose}
                message= {`Token: ${loginData.authToken}`}
            />
        </div>
    )
}