import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {cardsData} from '../../../../data/cards';

const CustomCard = () => {
  // console.log(cardsData)
  return (
    <>
      {cardsData.Cards.map((card, index) => (
        <Card key={index} className="container w-[21%]">
          {card.images && card.images.map((image, imgIndex) => (
            <Image key={imgIndex} src={image} alt="Card background" className="object-cover rounded-xl" width={270} />
          ))}
          <CardHeader className="pb-0 pt-2 flex-col">
            <h4 className="font-bold text-large">{card.title}</h4>
            <p className="py-2">{card.content}</p>
            <Link href="https://app.theaccountantai.com/" target="_blank"><h6 className="more">Try now</h6></Link>
          </CardHeader>
        </Card>
      ))}




          {/* {cardsData.Cards.map((card, index) => (
          <div className="p-4 lg:w-1/4 md:w-1/2 hover:bg-[#F9F9F9] rounded-xl hover:translate-y-12">
            <div className="py-10 h-full flex flex-col items-center text-center">
              {card.images && card.images.map((image, imgIndex) => (
                <Image key={imgIndex} src={image} alt="Card background" className="object-cover rounded-xl" width={270} />
              ))}
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900 mb-3">{card.title}</h2>
                <p className="mb-4">{card.content}</p>
                <span className="inline-flex">
                  <Link href="https://app.theaccountantai.com/" target="_blank" className="text-[#5236FF] underline">Try now</Link>
                </span>
              </div>
            </div>
          </div>
          ))} */}


    </>
  );
};

export default CustomCard;
