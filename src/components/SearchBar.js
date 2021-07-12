import { TextField } from "@material-ui/core";
import useStyles from '../styles/SeacrBar-Styles'
import React, {  } from "react";

export default function SearchBar() {
    const classes = useStyles();
    // useEffect(() => {
    //     GetWeather()
    // }, [])
  return <>
  
  <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Standard" />
</form>
  </>;
}
