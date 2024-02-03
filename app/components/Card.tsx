import Image, { StaticImageData } from "next/image";

// For using the palceholder="blur" property -> need to import the images statically

export const Card = ({ image }: { image: StaticImageData }) => {
  return (
    <div
      className="relative h-[50vh] w-[50vw] overflow-hidden"
    >
      <Image
        src={image} // static Image source
        alt="Description" 
        placeholder="blur"
        width={500}
      />
    </div>
  );
};
