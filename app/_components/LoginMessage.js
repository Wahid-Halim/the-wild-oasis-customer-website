import Link from "next/link";

const LoginMessage = () => {
  return (
    <div className="grid bg-primary-800 min-h-[400px]">
      <p className="text-center text-lg sm:text-xl py-8 sm:py-12 self-center px-4">
        Please{" "}
        <Link
          href="/login"
          className="underline text-accent-500 hover:text-accent-400 transition-colors"
        >
          login
        </Link>{" "}
        to reserve this
        <br className="hidden sm:block" /> cabin right now
      </p>
    </div>
  );
};

export default LoginMessage;
