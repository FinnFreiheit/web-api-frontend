import {Button, Card, IconButton, Input, Paper, Snackbar, TextField} from "@mui/material";
import style from "../../styles/Components.module.css"
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import {login} from '../../services/requests'


export default function ApiLogin(props){

    //TODO LoginData





    const handleClose = () => {
        props.setOpen(false);
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
                            props.setLoginData({
                                ...props.loginData,
                                username:e.target.value
                            })
                        }}/>
                    <TextField
                        value={props.loginData.password}
                        variant="outlined"
                        label={"Password"}
                        type={"password"}
                        onChange={(e)=>{
                            props.setLoginData({
                                ...props.loginData,
                                password:e.target.value
                            })
                        }}/>
                </div>
                <Button
                    onClick={tempAPI}
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
                open={props.open}
                anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                autoHideDuration={1000}
                onClose={handleClose}
                message= {`Token: ${props.loginData.authToken}`}
            />
        </div>
    )
}