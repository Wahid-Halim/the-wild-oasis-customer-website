import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex gap-4 p-4">
      <ul>
        <li className="">
          {" "}
          <Link href={"/"} className="">
            HOme
          </Link>
        </li>
        <li className="">
          {" "}
          <Link href={"/about"} className="">
            About
          </Link>
        </li>
        <li className="">
          {" "}
          <Link href={"account"} className="">
            Account
          </Link>
        </li>
        <li className="">
          <Link href={"/cabins"} className="">
            Cabins
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
