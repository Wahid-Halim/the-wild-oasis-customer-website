import CabinList from "@/app/_components/CabinList";
<<<<<<< HEAD
import TextExpander from "@/app/_components/TextExpander";
=======
>>>>>>> e6d820e8a07d233ec79f7d84c62ecd15ecd48326
import { getCabins, getCabin } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export const generateMetadata = async ({ params }) => {
  const { name } = await getCabin(params?.cabinId);
  return {
    title: `Cabin ${name}`,
  };
};

export const generateStaticParams = async () => {
  const cabins = await getCabins();

  const ids = cabins?.map((cabin) => ({
<<<<<<< HEAD
    cabinId: String(cabin.id),
  }));

=======
    cabinId: String(cabin.id), // wrap in parentheses to return object
  }));

  console.log(ids);

>>>>>>> e6d820e8a07d233ec79f7d84c62ecd15ecd48326
  return ids;
};

const Page = async ({ params }) => {
  const cabin = await getCabin(params?.cabinId);

  const { id, name, maxCapaciy, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300 mb-10">
            <TextExpander>{description}</TextExpander>
          </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapaciy}</span> guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
};

export default Page;
