"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  const handlerFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-primary-800 flex flex-wrap">
      <Button
        filter="all"
        handlerFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handlerFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handlerFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7 guests
      </Button>
      <Button
        filter="large"
        handlerFilter={handlerFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
};

const Button = ({ children, handlerFilter, activeFilter, filter }) => {
  return (
    <button
      className={`px-3 sm:px-5 py-2 text-sm sm:text-base hover:bg-primary-700 transition-colors ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handlerFilter(filter)}
    >
      {children}
    </button>
  );
};

export default Filter;
