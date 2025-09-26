import { Col, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SubHeader = ({ current, detail, detailRoute }) => {
    return (
            <Row>
                <Col>
                    <Breadcrumb
                        className='breadcrumb'>
                        <BreadcrumbItem>
                            <Link to='/' style={{color: 'white'}} activestyle={{color: 'lightgray'}}>Home</Link>
                        </BreadcrumbItem>
                    
                        {detail && (
                            <BreadcrumbItem>
                                <Link to={`/${detailRoute}`} style={{color: 'white'}} activestyle={{color: 'lightgray'}}>{detailRoute}</Link>
                            </BreadcrumbItem>
                        )}
                        <BreadcrumbItem active>{current}</BreadcrumbItem>
                    </Breadcrumb>
                </Col>
            </Row>
    )

};

export default SubHeader;