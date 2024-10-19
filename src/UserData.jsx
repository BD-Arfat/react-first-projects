export const UserData = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div>
      <h2>Name : {name}</h2>
      <h4>Phone Number : {phone}</h4>
      <p>Email : {email}</p>
    </div>
  );
};
