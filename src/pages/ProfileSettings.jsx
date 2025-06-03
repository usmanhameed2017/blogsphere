import React from 'react';
import UpdateProfile from '../components/updateProfile';
import { Col, Container, Row } from 'react-bootstrap';

function ProfileSettings() 
{
    return (
        <div>
            <Container>
                {/* Update Profile */}
                <Row>
                    <Col xs="12" sm="6" md="5" lg="5" className='mx-auto'>
                        <UpdateProfile />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProfileSettings;