import style from "../../styles/Components.module.css";
import {Button, List, ListItem, ListItemText, Paper, Snackbar, TextField} from "@mui/material";
import React from "react";

export default function GetPermissions(props) {



    const mapPermission =
        props.permissionData.map(item => {
            return <ListItemText key={item.name} primary={item.name}/>
            }
        )

    return (
        <div className={style.loginContainer}>

            <Paper
                className={style.paper}
                elevation={6} sx={{
                p:6,
            }}>
                <h2 style={{
                    justifySelf:"center",
                    paddingBottom:10,}}
                >Permissions</h2>

                <List>
                    {mapPermission}
                </List>
            </Paper>

        </div>
    )
}