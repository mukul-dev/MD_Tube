import React from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube";



class App extends React.Component{
    render(){
        return(
            <Grid justifyContent="center" container spacing= {16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {
                                //SEARCH BAR
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;