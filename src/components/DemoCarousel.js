import React from 'react';
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/main.css';
import 'react-responsive-carousel/lib/styles/carousel.css';
import pictures from './pictures';

const styleC = {
    padding: '0px',
    margin: '0px',
    backgroundColor: 'lightblue',
    color: 'red'
}

class DemoCarousel extends React.Component {

    output11 = (pp) => pictures[pp].pictures.map( (value, index) => {
      //  this.setState({selectedSection: pp});
        return (
                <div className='carousel' key={value}>
                    <img src={value}  key={value}/>
                    <p className='legend'> Picture  {index+1} </p>
                </div>
        );
    });
    render(props) {
        console.log(this.props.selectedSection);
        console.log(this.props);
            return (
                <Carousel className='page-carousel' style={styleC}
                          axis={"horizontal"}
                          showArrows={true}
                          showThumbs={true}
                          showIndicators={false}
                          width={'840px'}
                          autoPlay={true}
                          infiniteLoop={true}
                          dynamicHeight={true}
                         /* onChange={()=> {
                              this.setState({selectedSection:this.props.selectedSection})
                          }}*/
                >
                    {
                        this.output11(this.props.selectedSection)
                    }
                </Carousel>
            );

    }
}
export default DemoCarousel;