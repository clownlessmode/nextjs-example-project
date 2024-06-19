import Layout from './_ui/Layout';
import Logo from './_ui/Logo';

const AppHeader: React.FC = () => {
  const isProfile = false;

  return (
    <Layout
      logo={<Logo />}
      // nav={}  <MainNav />
      profile={isProfile && <p>User Profile</p>} // <Profile />
    />
  );
};

export default AppHeader;
