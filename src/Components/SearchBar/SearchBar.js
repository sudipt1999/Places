import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";


const useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    searchBarClasses: {
      marginTop: 40
    },
    searchButton: {
        marginLeft: 12
    }
}));


const SearchBar = (props) => {
    let autocompleteResults = null;
    if(props.autocompleteResult && props.showAutoComplete){
        autocompleteResults = props.autocompleteResult.map(part=>{
            return(      
                    <MenuItem component="div" style={{width: "60%", borderLeft: '0.5px solid #fff'}} onClick={()=>props.autocompleteSelect(part.place_id)}>
                        <div style={{display: "block", color: "#fff"}}>
                            <span key={part.place_id}  style={{ fontWeight: part.highlight ? 500 : 400 }}>
                                {part.structured_formatting.main_text}
                            </span>
                        </div>
                    </MenuItem>
                )
        })
    }  
    


    if(props.areCardsDisplay) {
        
    }

    console.log("P",props.searchValue);
    const classes = useStyles();
    return (
        <Container className={classes.searchBarClasses}>
            <Container>
            <TextField
                id="standard-name"
                className={classes.textField}
                style={{width: "55%", color: "#fff"}}
                value={props.searchValue}
                placeholder="Enter The Location"
                onChange={props.searchBarHandler}
                margin="normal"
            />
                <Button className={classes.searchButton} variant="contained" size="large" color="primary" className="searchInputButton" onClick={props.searchValueButtonClicked}>Search</Button>
            </Container>
                {autocompleteResults}    
        </Container>
    )

}


export default SearchBar;