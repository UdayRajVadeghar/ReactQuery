import Image from "next/image";

const Card = ({ location, info, name }) => {
  return (
    <>
      <Image src={location} width={300} height={300}></Image>
      <div>{info}</div>
      <div className="font-bold">{name}</div>
    </>
  );
};

export default Card;
