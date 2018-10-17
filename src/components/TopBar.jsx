import React, {Component} from 'react';


class TopBar extends Component {

render(){
    return (
        <div className="header">
            <div className="marginedInner80">
            <div className="left logo"><b>HELEN</b></div>
            <div className="menuWrapper right">
            <ul className="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <div className="clear"></div>
            </ul>
            </div>
            <div className="clear"></div>
            </div>
            <div className="clear"></div>
        </div>
    );
}

}

export default TopBar;