import { Carousel } from "react-bootstrap"
export default function bannerCharge(props) {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://imgix.bustle.com/uploads/image/2020/9/17/d22b84d5-67cd-472c-836b-ad9b6de15e13-3840x2160-sandx-supercharger-countryside.jpg?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress"
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}