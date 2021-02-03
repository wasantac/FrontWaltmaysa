import React, { Component } from 'react';
import '../../css/Loader.css'
import { useEffect, useState } from "react";

const Expire = props => {
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, props.delay);
    }, [props.delay]);
  
    return visible ? <div>{props.children}</div> : <div />;
};
  
class Loader extends Component {
    render() {
        return (
            <Expire delay="2000">
                <div className="loader_bg">
                    <img className="imgLoader" alt="logo"src={process.env.PUBLIC_URL + '/assets/svg/LogoPeque.svg'}/>
                </div>
            </Expire>

        );
    }
    
}

export default Loader;
