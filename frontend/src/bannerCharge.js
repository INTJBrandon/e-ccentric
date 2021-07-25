import { Carousel } from "react-bootstrap"
export default function bannerCharge(props) {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1035e344-82ec-4b61-8988-3dd8464beaa9/bvlatuR/std/2880x1620/Main-Charging-HomeCharging-Desktop"
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}