import ApiBrowse from "../components/Showroom/apiBrowse";
import React, {useEffect} from "react"
import apiBrowseData from "../services/Data/apiBrowse"
import plcBrowseDataService from "../services/Data/plcBrowseData";
import style from "../styles/Showroom.module.css"
import PlcBrowse from "../components/Showroom/plcBrowse/plcBrowse";
import Box from "@mui/material/Box";
import {CircularProgress, Grid} from "@mui/material";
import ApiLogin from "../components/Showroom/apiLogin";
import Layout from "../components/Showroom/Layout";
import getpermissionData from "../services/Data/getPermissionData"
import * as PropTypes from "prop-types";
import GetPermissions from "../components/Showroom/getPermission"
import GetCertificate from "../components/Showroom/getCertificate";
import PlcRead from "../components/Showroom/plcRead/plcRead";

export default function Showroom(props){


    const [apiBrowse, setApiBrowse] = React.useState(apiBrowseData)
    const [plcBrowseData, setPlcBrowseData] = React.useState(plcBrowseDataService)
    const [permissionData, setPermissionData] = React.useState(getpermissionData)
    const [loginData, setLoginData] = React.useState({
        username: "",
        password:"",
        authToken:"",
    })

    const [open, setOpen] = React.useState(false)

    const [timeLogin, setTimeLogin]  = React.useState(1);

    /**
     *  Zeitverlauf Uhr
     */
    useEffect(()=>{
        setInterval(()=>{
            setTimeLogin(prevState => (prevState + 1))
        },1200)
    }, []);


    const [component, setComponent] = React.useState(
        <ApiLogin setLoginData={setLoginData}/>
    )


    /**
     * Auswahl der Komponente die angezeigt werden soll
     * @param element
     */
    const handleSelectElement = (element) => {
        setComponent(components[element])
    }

    /**
     * Aufruf von Login bei onClick von Submit
     */
    const handleSubmit = () => {

    }


    /**
     * Komponenten Map.
     */
    const components = {
        "PlcProgram.Browse": <PlcBrowse plcBrowseData={plcBrowseData}/>,
        "Api.Login":<ApiLogin
            setLoginData={setLoginData}
            loginData={loginData}
            username={loginData.username}
            handleSubmit={handleSubmit}
            open={open}
            setOpen ={setOpen}
        />,
        "Api.GetPermissions": <GetPermissions permissionData = {permissionData}/>,
        "Api.GetCertificateUrl": <GetCertificate url={"/MiniWebCA_Cer.crt"}/>,
        "PlcProgram.Read": <PlcRead/>,
    }


    return (
        <div className={style.showroom}>
            <div className={style.leftNav}>
                <ApiBrowse handleSelectElement = {handleSelectElement} apiFunctions = {apiBrowse}/>
            </div>
            <div className={style.main}>
                    <Layout>
                        {component}
                    </Layout>
            </div>
            <div className={style.footer}>
                <CircularProgress variant={"determinate"} value={timeLogin}/>
            </div>
        </div>
    )
}

//
