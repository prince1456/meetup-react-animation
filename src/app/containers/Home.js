import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip';
import Roll from 'react-reveal/Roll';
class Home extends Component {
    render(){
        return (
            <div>
            <Fade left>
                <div style={{fontSize: 50, margin: 40}}>Hello I'm Home</div>
            </Fade>
            <Flip left>
                 <div style={{fontSize: 50, margin: 40}}>Hello I'm Home</div>
            </Flip>
            <Roll left>
                 <div style={{fontSize: 50, margin: 40}}>Hello I'm Home</div>
            </Roll>
            </div>
           
        )
    }
}

export default Home;