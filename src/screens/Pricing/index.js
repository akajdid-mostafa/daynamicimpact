import React from "react";
import Plan from "./Plan";
import Comment from "./Comment";
import Faq from "../../components/Faq";
import Testimonials from "../../components/Testimonials";

const Pricing = () => {
    return (
        <>
            <Plan />
            <Comment />
            <Faq />
            <Testimonials className="section-bg" />
        </>
    );
};

export default Pricing;
