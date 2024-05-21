import profile from "./../../assets/images/profile.png";
const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center pb-5 border-b-2 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img src={profile} alt="" />
      </header>
    </div>
  );
};

export default Header;
