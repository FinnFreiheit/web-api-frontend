import { Drawer, ListItemButton, ListItem, Box} from "@mui/material"
import styles from "../../styles/Components.module.css"



export default function ApiBrowse(props){

    const drawerWidth = 240;


    const sideNavElements = 
       props.apiFunctions.map((item) => {
           return (
               <ListItemButton
                   onClick={()=>{
                       props.handleSelectElement(item.name);
                   }}
                   key={item.name}>
                   {item.name}</ListItemButton>
           )
       })
    

    return(
        <Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent">
                <ListItem className={styles.listHeader} >Api Funktionen</ListItem>
                {sideNavElements}
            </Drawer>
        </Box>
    )
}