const ActiveUsersList = () => {
  const { users } = useUsers();

  return (
    <ul>
      {getActiveUsers(users).map((user) => (
        <UserItem key={user.id} user={user}></UserItem>
      ))}
    </ul>
  );
};

function getActiveUsers(users) {
  if (!Array.isArray(users)) return [];
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const filterUsers = users.filter(
    (user) => !user.isBanned && user.lastActivityAt >= weekAgo
  );
  return filterUsers;
}

function UserItem(props) {
  const { user } = props;
  return (
    <li>
      <img src={user.avatarUrl} />
      <p>{user.fullName}</p>
      <small>{user.role}</small>
    </li>
  );
}

function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch("/some-api");
      const data = await response.json();
      setUsers(data);
    };

    loadUsers();
  }, []);
  return {
    users,
  };
}
