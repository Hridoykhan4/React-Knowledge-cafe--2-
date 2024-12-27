import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex w-11/12  justify-between items-center p-4 mx-auto bg-gray-200 rounded-lg border-b-2'>
      <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
        <img src={profile} alt="" />
        </header>
    );
};

export default Header;