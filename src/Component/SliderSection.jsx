import Marquee from 'react-fast-marquee';

import {
  BsDiscord,
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsMessenger,
  BsMicrosoft,
  BsNewspaper,
  BsSnapchat,
  BsTelegram,
  BsTwitch,
  BsTwitter,
  BsWallet,
  BsWhatsapp,
  BsYoutube,
} from 'react-icons/bs';

const SliderSection = () => {
  return (
    <div>
      <div className="pb-5">
        <div className=" gap-3 mb-3 mt-5 px-1 lg:px-0 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-colorOne uppercase font-poppins">
            Client
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-colorTwo capitalize font-poppins">
            Our top client
          </h1>
        </div>
        <Marquee
          className="p-8 m-8 border-2 border-colorOne rounded-lg hover:scale-105 duration-300"
          speed={50}
        >
          <BsFacebook size={100} className="text-colorOne mx-8" />
          <BsInstagram size={100} className="text-colorOne mx-8" />
          <BsTwitch size={100} className="text-colorOne mx-8" />
          <BsTwitter size={100} className="text-colorOne mx-8" />
          <BsDiscord size={100} className="text-colorOne mx-8" />
          <BsLinkedin size={100} className="text-colorOne mx-8" />
          <BsMessenger size={100} className="text-colorOne mx-8" />
          <BsWhatsapp size={100} className="text-colorOne mx-8" />
          <BsTelegram size={100} className="text-colorOne mx-8" />
          <BsSnapchat size={100} className="text-colorOne mx-8" />
          <BsYoutube size={100} className="text-colorOne mx-8" />
          <BsWallet size={100} className="text-colorOne mx-8" />
          <BsMicrosoft size={100} className="text-colorOne mx-8" />
          <BsGoogle size={100} className="text-colorOne mx-8" />
          <BsNewspaper size={100} className="text-colorOne mx-8" />
        </Marquee>
        <hr className="w-[400px] mx-auto mt-20 border-2" />
      </div>
    </div>
  );
};

export default SliderSection;
