import { v4 as uuidv4 } from "uuid";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";

const dataSlider = [
    {
        id: uuidv4(),
        title: "Wade Warner",
        image: img1,
        subTitle: "A fantastic team of passionate designers and UX specialists at the top of their game. I've had the pleasure of  getting my work done with them and these guys are game-changers for any tech platform."
    },
    {
        id: uuidv4(),
        title: "Leslie Alexander",
        image: img2,
        subTitle: "Lorem ipsum dolor sit amet consectetur. Aliquam pretium sed phasellus neque in convallis amet. Adipiscing egestas in nulla vulputate orci purus eget posuere sit. Vitae dolor dictum enim porta non. Lacinia ullamcorper quisque a nisl senectus est quam tincidunt arcu."
    },
    {
        id: uuidv4(),
        title: "Jenny Wilson",
        image: img3,
        subTitle: "Lorem ipsum dolor sit amet consectetur. Aliquam pretium sed phasellus neque in convallis amet. Adipiscing egestas in nulla vulputate orci purus eget posuere sit. Vitae dolor dictum enim porta non. Lacinia ullamcorper quisque a nisl senectus est quam tincidunt arcu."
    },
];

export default dataSlider;