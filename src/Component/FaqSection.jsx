import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const FaqSection = () => {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <div className="mt-[30rem] mb-[20rem]">
      <div className="flex flex-col lg:flex-row md:flex-row gap-8 mx-20 my-10">
        <div>
          <img
            className="rounded-lg"
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/master/LOGO/10136664_17973871.jpg"
            alt=""
            width="1000px"
          />
        </div>
        <div>
          <Accordion
            open={openAcc1}
            className="lg:-mt-[10rem] md:-mt-[10rem] mt-0"
          >
            <AccordionHeader onClick={handleOpenAcc1}>
              <span className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                How do I choose the right smartphone or laptop for my needs?
              </span>
            </AccordionHeader>
            <AccordionBody>
              <span className="font-poppins leading-10 text-xl">
                Choosing the right smartphone or laptop can be a daunting task.{' '}
                <br />
                &quot;Tech for Everyone&quot; offers comprehensive guides and
                reviews to help you make an informed decision. <br />
                <br /> We consider factors like budget, performance, features,
                and user preferences to provide recommendations that suit a
                variety of needs.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc2}>
            <AccordionHeader onClick={handleOpenAcc2}>
              <span className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                Can I trust the product reviews and recommendations on this
                website?
              </span>
            </AccordionHeader>
            <AccordionBody>
              <span className="font-poppins leading-10 text-xl">
                Yes, you can! &quot;Tech for Everyone&quot; is committed to
                providing unbiased and honest product reviews. <br /> <br /> Our
                team of experts thoroughly researches and tests products to
                ensure the information we provide is reliable and helpful.{' '}
                <br /> We also disclose any potential conflicts of interest to
                maintain transparency.
              </span>
            </AccordionBody>
          </Accordion>
          <Accordion open={openAcc3}>
            <AccordionHeader onClick={handleOpenAcc3}>
              <span className="font-poppins text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                How can I stay updated on the latest tech product releases and
                deals?
              </span>
            </AccordionHeader>
            <AccordionBody>
              <span className="font-poppins leading-10 text-xl">
                &quot;Tech for Everyone&quot; offers a dedicated section for
                staying up-to-date with the latest tech product releases and
                deals. <br />
                <br />
                You can subscribe to our newsletter, follow us on social media,
                or regularly check our website for announcements on new
                products, discounts, and special offers from various tech
                brands.
              </span>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
