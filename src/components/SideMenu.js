import React from 'react'
import { makeStyles, withStyles } from "@material-ui/core";
import Home from '@material-ui/icons/Home';
import { Notifications } from '@material-ui/icons';  
import ContactsIcon from '@material-ui/icons/Contacts'; 


// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '170%',
        backgroundColor: '#253053'
    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <h1 style={{marginLeft:10,padding:10,color:"white"}}>Settings</h1>
        <div style={{color: "white",fontSize:25,alignItems:"center",padding:5,alignContent:"center"}}>
            <Home style={{ 
            color: "white",
            width: "35px",
            height: "40px",
            // marginTop: "20px",
            alignItems: "center"

            }}/> Home  
         </div>  
        <div style={{color: "white",fontSize:25,alignItems:"center",padding:5 }}>
            <Notifications style={{ 
            color: "white",
            width: "35px",
            height: "40px",
            marginTop: "20px"
           
                 }}
        /> Notification<br></br>  </div>
        <div style={{color: "white",fontSize:25,alignItems:"center",padding:5}}>
            <ContactsIcon style={{ 
            color: "white",
            width: "35px",
            height: "40px",
            marginTop: "20px"

    }}
    /> Contact 
    </div>
        </div>
    )
}

export default withStyles(style)(SideMenu);