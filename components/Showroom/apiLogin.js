import {Button, Card, IconButton, Input, Paper, Snackbar, TextField} from "@mui/material";
import style from "../../styles/Components.module.css"
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function ApiLogin(props){

    const [open, setOpen] = React.useState(false);
    const [authToken, setAuthToken] = React.useState("");

    const [input, setInput] = React.useState({
        username:"",
        password:"",
    })

    const setUsername = (e) => {
    setInput({...input,
        username: e.target.value});
    }

    const setPassword = (e) => {
    setInput({...input,
    password: e.target.value});
    }

    const submitUserData = () => {
        props.setLoginData({
            username: input.username,
            password: input.password,

            //TODO
            authToken: authToken,
        });
        setOpen(true);
        setAuthToken("awfrgsdtbnsdrtrtnbadfbaerhadfbertb")
    }

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
                        value={input.username}
                        variant="outlined"
                        label="Username"
                        onChange={setUsername}/>
                    <TextField
                        value={input.password}
                        variant="outlined"
                        label={"Password"}
                        type={"password"}
                        onChange={setPassword}/>
                </div>
                <Button
                    onClick={submitUserData}
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
                message= {`Token: ${authToken}`}
            />
        </div>
    )
}