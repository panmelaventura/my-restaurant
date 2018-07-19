import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Picture4 from './Picture4.png';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid>
                    <Cell col={12}>
                        <div>
                            <img src={Picture4} alt={"Picture4"} style={{ height: '240px', paddingTop: '50px' }} />

                            {/*<h1 style={{fontFamily:'Raleway ExtraLight', fontSize:'70px'}}>PANMELA <br/>VENTURA</h1>*/}
                            <br clear="all" />
                            <br />
                            <hr />
                            <p>HTML/CSS | Bootstrap | Javascript | React JS | Node JS </p>
                        <br />
                        </div>     
                                
                    </Cell>                    
                </Grid>
                    <br />
                    <br />
                <div className="landing-content">  
                    <p>Content</p> 
                </div>         

            

        </div> 
        )
    }
}
export default Landing;