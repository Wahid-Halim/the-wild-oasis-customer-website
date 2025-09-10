import { auth } from "@/app/_lib/auth";

const Page = async () => {
  const session = await auth();
  const firstName = session?.user?.name
    ? session.user.name.split(" ").at(0)
    : "Guest";

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome {firstName}
      </h2>
    </div>
  );
};

export default Page;
