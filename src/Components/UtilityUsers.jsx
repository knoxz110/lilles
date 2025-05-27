import person1 from "../assets/naruto.jpg";
const Users = [
    {
      name: "Suga Daddy",
      email: "sugadaddy1@gmail.com",
      password: "12345678",
      Address: "123 Micheal Jordan St, Manhattan",
      Phone: "+1234567890",
      State: "New York",
      Country: "USA",
    },
    {
      name: "Suga Mama",
      email: "sugamama1@gmail.com",
      password: "12345678",
      Address: "123 Micheal Jordan St, Manhattan",
      Phone: "+2234567890",
      State: "New York",
      Country: "USA",
    },
    {
      name: "Suga Baby",
      email: "sugababy101@gmail.com",
      password: "12345678",
      Address: "23 Micheal Jordan St, Los Angeles",
      Phone: "+2334567890",
      State: "California",
      Country: "USA",
    },
    {
      name: "Ezeh Miracle Abuchi",
      email: "baby-oil@gmail.com",
      password: "12345678",
      Address: "24 Martin Luther King Street, Los Angeles",
      Phone: "+2348567890",
      State: "California",
      Country: "USA",
      photo: person1
    }
  ];
  export const updateUser = async (updatedUser) => {
  const index = Users.findIndex(u => u.email === updatedUser.email);
  if (index === -1) throw new Error('User not found');

  Users[index] = { ...Users[index], ...updatedUser };

  return new Promise((resolve) => {
    setTimeout(() => resolve(Users[index]), 500);
  });

  
};


export default Users;

  