import Greeting from "../components/Greeting";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Button from "../components/Button";
import Testimonial from "../components/Testimonial";

function Home(){
    return(
        <>
            <Greeting />
            <Banner />
            <Card />
            <Button />
            <Testimonial />
        </>
    )
}

export default Home