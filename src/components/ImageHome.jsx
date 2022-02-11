import React,{useRef, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    container: {
      display:'flex',
      padding: "0 10% ",
      overflow: "hidden",
      flexDirection:'column',
      height: '100vh',
      color:'white',

    }
  })
function ImageHome({getSearchTerm}) {
    const classes = useStyles();
    const searchRef = useRef();
    const [searchTerm, setSearchTerm] = useState('')
    const handleSearch  = () =>{
        getSearchTerm(searchTerm)
    }
    const handleChange =(e) =>{
        setSearchTerm(e.currentTarget.value)
    }

  return (
    <div className={classes.container}>
    {/* <SideNavBar /> */}
    <div className="heading">
        Image Gallery 
    </div>
    <div className="image-search">
        <TextField
            label="Search Image Gallery"
          id="outlined-name"
          variant="filled"
          defaultValue={""}
          ref={searchRef}
          onChange={handleChange}
          style={{width:'60%',margin:'auto',backgroundColor:'#f7f7f7', color:'white'}}
          InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5,cursor: 'pointer',fontSize: "2.5rem" }} onClick = {handleSearch}/>
                </InputAdornment>
              ),
            }}
        >

        </TextField>
    </div>
  </div>
  )
}

export default ImageHome