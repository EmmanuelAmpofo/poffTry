import React,{useState} from "react";
import SideNavBar from "./SideNavBar";
import ImageHome from "../components/ImageHome";
import { makeStyles } from '@material-ui/core/styles';
import { createApi } from 'unsplash-js';
import './page2.css'


const useStyles = makeStyles({
	photoContainer: {
	  display:'grid',
	  gridTemplateColumns: '1fr 1fr 1fr ',
	  gridAutoFlow:"dense",
	  gap:"2rem",
	  padding: "0 10% ",
	  flexDirection:'column',
    width: '80vw'
	  
	},
  container: {
    display: "flex",
  },
  })

function Page2() {
  const classes = useStyles()
  const unsplash = createApi({
		accessKey:'npO4KpmGScjfUYAsyUtWrSSCQenSBFGLCxLfEPCJ6uk',
	  })
    const [imageResult, setImageResult] = useState();
    const [searchTerm, setSearchTerm] = useState("");
  
    const getSearchTerm = (term) =>{
        getPhoto(term);
    }
  
    const getPhoto = (search) =>{
      unsplash.search.getPhotos({
        query: search,
        page: 1,
        perPage: 20,
        // color: 'green',
        // orientation: 'portrait',
        })
        .then(
            (res)=>{
  
          setImageResult(res.response.results);
          setSearchTerm(search); 
          })
    }

  return (
    <div className={classes.container}>
      <SideNavBar />
      <div><h1>Page2</h1>
      {!imageResult && <ImageHome getSearchTerm = {getSearchTerm}/>}
		{ imageResult && 	(<div >
								<div className = "result-text-header">Results for {searchTerm}</div>
								<div className = {classes.photoContainer}>{imageResult.map(element =>{
									return(
										<div key={element.id} className = "image-div"><img className = "image-tag" src = {element?.urls?.small} alt = {element.description}/></div>
									)
								})}
								</div>
								

						 	</div>)
		}

      
      </div>
    </div>
  );
}

export default Page2;
