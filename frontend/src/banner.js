import { Carousel } from "react-bootstrap"
export default function banner(props) {
    return (
        <Carousel controls={false} indicators={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/32e5e0f3-5c04-42ef-8f8f-c6b1c26f8a9e/bvlatuR/std/2880x1800/ms-main-hero-desktop"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/325743a2-d187-4e28-91a3-5a2e47e317f7/bvlatuR/std/2880x1800/ModelX-Homepage-D"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}