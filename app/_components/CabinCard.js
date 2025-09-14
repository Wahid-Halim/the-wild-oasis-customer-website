import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapaciy, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col sm:flex-row border-primary-800 border">
      <div className="flex-1 relative h-48 sm:h-auto">
        <Image
          fill
          src={image}
          alt={`Cabin ${name}`}
          className="flex-1 sm:border-r border-primary-800 object-cover"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-4 sm:pt-5 pb-3 sm:pb-4 px-4 sm:px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl sm:text-2xl mb-2 sm:mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-2 sm:gap-3 items-center mb-2">
            <UsersIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
            <p className="text-base sm:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapaciy}</span> guests
            </p>
          </div>

          <p className="flex gap-2 sm:gap-3 justify-end items-baseline flex-wrap">
            {discount > 0 ? (
              <>
                <span className="text-2xl sm:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 text-lg sm:text-xl">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl sm:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm sm:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-3 sm:py-4 px-4 sm:px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 text-sm sm:text-base"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
