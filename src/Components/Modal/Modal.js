import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
      background: `linear-gradient(rgba(0,0,0,0.3),rgba(0, 0, 0,0.3)), url('https://brettdesigninc.com/wp-content/uploads/2015/06/Brett_Design_Wallpaper_Ombre_Sky_blue.jpg')` ,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    weatherElement : {
        borderBottom: '0.3px solid rgba(255,255,255,0.5)', 
        padding: '0.4%', 
        marginTop: '13px'
    },
    whiteColorText:{
        color: '#fff'
    }
  }));

  
const ModalComponent = (props) => {
    let modal = null;
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    let modalContent = null;
    if(props.data){
        let weather = props.data.weather[0];
        let main = props.data.main;
        console.log("WEATHER ",weather)

        modalContent = (
            <div style={modalStyle} className={classes.paper}>
                        <Typography variant="h6" id="modal-title" className={classes.whiteColorText}>
                            Weather Report for {props.data.name}
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            <div className={classes.weatherElement}>
                                <strong>Weather :</strong>
                                {weather.main}
                            </div>
                            <div className={classes.weatherElement}>
                                <strong>Description :</strong>
                                {weather.description}
                            </div>
                            <div className={classes.weatherElement}>
                                <strong>Temperature :</strong>
                                {main.temp}(K)
                            </div>
                            <div className={classes.weatherElement}>
                                <strong>Humidity :</strong>
                                {main.humidity}
                            </div>
                            <div className={classes.weatherElement}>
                                <strong>Pressure :</strong>
                                {main.pressure}
                            </div>
                        </Typography>
            </div>
        );
    }else {
        modalContent=(<div style={modalStyle} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
                Sorry No Result Found !
            </Typography>
        </div>)
    }


       
        
         modal =(
                 <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={true}
                        onClose={props.closeModal}
                    >
                        {modalContent}                        
                 </Modal>
            
        )
    

    return modal;

}

export default ModalComponent;