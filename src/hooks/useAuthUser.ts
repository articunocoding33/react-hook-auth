import { useAuthContext } from '.';

const useAuthUser = () => {
  const { user } = useAuthContext();

  return user;
};

export default useAuthUser;
