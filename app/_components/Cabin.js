import Image from "next/image";
import TextExpander from "./TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

const Cabin = ({ cabin }) => {
  const { id, name, maxCapaciy, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20 border border-primary-800 py-4 sm:py-6 lg:py-3 px-4 sm:px-6 lg:px-10 mb-12 sm:mb-16 lg:mb-24">
      <div className="relative h-64 sm:h-80 lg:h-auto lg:scale-[1.15] lg:-translate-x-3 order-1">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="order-2">
        <h3 className="text-accent-100 font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-5 lg:translate-x-[-254px] lg:bg-primary-950 lg:p-6 lg:pb-1 lg:w-[150%]">
          Cabin {name}
        </h3>

        <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-8 lg:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-7">
          <li className="flex gap-2 sm:gap-3 items-center">
            <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
            <span className="text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapaciy}</span> guests
            </span>
          </li>
          <li className="flex gap-2 sm:gap-3 items-center">
            <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
            <span className="text-base sm:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-2 sm:gap-3 items-center">
            <EyeSlashIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
            <span className="text-base sm:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cabin;
