import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {cardsData} from '../../../../data/cards';

const CustomCard = () => {
  // console.log(cardsData)
  return (
    <>
      {cardsData.Cards.map((card, index) => (
        <Card key={index} className="card-container">
          {card.images && card.images.map((image, imgIndex) => (
            <Image key={imgIndex} src={image} alt="Card background" className="object-cover rounded-xl" width={270} />
          ))}
          <CardHeader className="pb-0 pt-2 flex-col">
            <h4 className="font-bold text-large">{card.title}</h4>
            <p className="py-2">{card.content}</p>
            <Link href="https://app.theaccountantai.com/" target="_blank"><h6 className="try-now">Try now</h6></Link>
          </CardHeader>
        </Card>
      ))}
    </>
  );
};

export default CustomCard;
