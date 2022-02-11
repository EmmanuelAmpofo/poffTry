import React,{useState} from "react";
import SideNavBar from "./SideNavBar";
import ImageHome from "../components/ImageHome";
import { makeStyles } from '@material-ui/core/styles';
import { createApi } from 'unsplash-js';
import '../components/page2.css'
import './style.css'


const useStyles = makeStyles({
	photoContainer: {
	  display:'grid',
	  gridTemplateColumns: '1fr 1fr 1fr ',
	  gridAutoFlow:"dense",
	  gap:"2rem",
	  padding: "0 10% ",
	  flexDirection:'',
    width: '80vw',
	  
	},
  container: {
    display: "flex",
    // border: '1px solid',
    // width: "100%"
  },
  })

function Page2() {
  const classes = useStyles()
  const unsplash = createApi({
		accessKey:'N0Pr_YOzvuJcbhHs2qIijpNP-HpJWrfPIi_F6HvQJjw',
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
      <div className="style"><h1>Page2</h1>
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
