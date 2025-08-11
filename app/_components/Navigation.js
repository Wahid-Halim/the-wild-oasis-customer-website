import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex gap-4 p-4">
      <ul>
        <li className="text-2xl font-bold">
          {" "}
          <Link href={"/"} className="text-blue-500 underline">
            HOme
          </Link>
        </li>
        <li className="text-2xl font-bold">
          {" "}
          <Link href={"/about"} className="text-blue-500 underline">
            About
          </Link>
        </li>
        <li className="text-2xl font-bold">
          {" "}
          <Link href={"account"} className="text-blue-500 underline">
            Account
          </Link>
        </li>
        <li className="text-2xl font-bold">
          <Link href={"/cabins"} className="text-blue-500 underline">
            Cabins
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
