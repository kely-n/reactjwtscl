import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { connect } from 'react-redux';

class HomePage extends React.Component{
    render(){
        return (
            <MDBRow>
            <MDBCol style={{ maxWidth: "40rem" }}>
                <MDBCard reverse>
                <MDBCardImage cascade style={{ height: '20rem' }} src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" />
                <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>My adventure</MDBCardTitle>
                    <h5 className="indigo-text"><strong>Photography</strong></h5>
                    <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                    rem aperiam.</MDBCardText>
                    <a href="#!" className="icons-sm li-ic ml-1">
                    <MDBIcon fab icon="linkedin-in" /></a>
                    <a href="#!" className="icons-sm tw-ic ml-1">
                    <MDBIcon fab icon="twitter" /></a>
                    <a href="#!" className="icons-sm fb-ic ml-1">
                    <MDBIcon fab icon="facebook-f" /></a>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
        );
    }
}
  
function mapState(state) {
    const { authentication } = state;
    const { user } = authentication;
    return { user };
}

const connectedHomePage = connect(mapState)(HomePage);

export { connectedHomePage as HomePage };