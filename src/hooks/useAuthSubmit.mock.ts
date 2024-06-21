import {useState} from 'react';
import {useDispatch} from 'react-redux';

import {SignUpFormInputs} from '@/forms/AuthForm/types';
import {setUser} from '@/store/slices/user';

export const useAuthSubmit = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (data: SignUpFormInputs) => {
    const {name, surname} = data;

    dispatch(
      setUser({
        name: name,
        surname: surname,
        uid: '123',
      }),
    );

    setIsLoading(false);
  };

  return {handleAuth, isLoading};
};
