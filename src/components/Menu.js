import React, {PureComponent} from 'react';
import _ from 'lodash';

import pictures from './pictures';

import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
import DemoCarousel from "./DemoCarousel";
import App from './App';

var divStyle = {
    backgroundColor: 'lightgrey',
    margin: '0px',
    padding: '0px',
    overflow: 'overlap',
    top: '0px'
}

class Menu extends PureComponent {

    getMenuItems = () => {
        const {selectedSection, selectSection} = this.props;
        this.setState({selectedSection:this.props.selectedSection});
        return _.toPairs(pictures).map(([urlSufix, pictureDetails]) =>
            <a className={' item ' + (selectedSection === 'urlSufix' ? ' active selected ' :'')}
                key={urlSufix}
                title={pictureDetails.title}
                onClick={(e)=>{selectSection(urlSufix);}}>{pictureDetails.title}</a>
        );
    };

    render(props) {
        return (
            <div style={divStyle}>

            <div className="ui five item menu">
                    {this.getMenuItems()}
            </div>

                <DemoCarousel selectedSection={this.props.selectedSection}/>
            </div>
        );
    }

}

export default Menu;
