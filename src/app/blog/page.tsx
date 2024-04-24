import React from "react";
import Articles from "../components/Articles/page";


export default function Blog() {
    return (
    <React.Fragment>
      <div className="container">
        <div className="subcontainer">
          <h1 className="custom-heading title-text">Welcome to Our Blog!</h1>
          <p className="lg:w-2/3 text-xl mx-auto leading-relaxed">Discover the latest insights, tips, and trends in modern accounting. From optimizing workflows to leveraging cutting-edge technology, our blog is your go-to resource for mastering the art of finance. Stay tuned for expert advice, success stories, and industry updates that will revolutionize the way you manage your business finances. Lets embark on this journey towards financial freedom together!</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <Articles />
        </div>
      </div>
    </React.Fragment>
  );
}