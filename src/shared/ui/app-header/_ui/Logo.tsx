import Link from 'next/link';

import LogoIcon from '../../assets/brand/logo/LogoIcon';

const Logo: React.FC = () => {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <LogoIcon className="h-6 w-6" />
      <span className="font-bold inline-block">Example name</span>
    </Link>
  );
};

export default Logo;
