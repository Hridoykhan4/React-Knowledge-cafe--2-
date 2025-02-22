import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex w-11/12 py-2 justify-between items-center mx-auto rounded-lg border-b-2">
      <h1 className="sm:text-3xl text-xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
