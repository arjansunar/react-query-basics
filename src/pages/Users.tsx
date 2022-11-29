import { useQuery } from "react-query";

import { getUsersList, UsersListRes } from "../api";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users = () => {
  const {
    data: usersList,
    isLoading,
    isError,
    error,
  } = useQuery<UsersListRes, Error>("users/list", getUsersList);

  if (isLoading) return <div>...loading</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="mx-auto w-fit">
      <h1 className="my-5 font-bold uppercase text-center text-gray-800 text-2xl">
        {" "}
        Users
      </h1>
      {usersList?.data.map((user) => (
        <User {...user} />
      ))}
    </div>
  );
};

const User = (props: User) => {
  const { email, first_name, last_name, avatar } = props;

  return (
    <div className="mx-auto flex flex-col mb-5 p-4 rounded shadow-md shadow-emerald-300 w-fit min-w-[15rem] items-center">
      <div>
        <img className="w-15 h-15 rounded-full" src={avatar} alt="avatar" />
      </div>

      <h2 className="text-lg font-bold tracking-wider text-gray-800 ">
        {first_name} {last_name}
      </h2>

      <p className="italic font-mono text-sm text-rose-600 bg-rose-200 w-fit py-1 px-2 rounded ">
        # {email}
      </p>
    </div>
  );
};

export default Users;
