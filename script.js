const users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 28, balance: 5000, isActive: true },
    { id: 2, name: "Bob", email: "bob@example.com", age: 34, balance: 3000, isActive: false },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 22, balance: 7000, isActive: true },
    { id: 4, name: "Diana", email: "diana@example.com", age: 29, balance: 4000, isActive: false },
    { id: 5, name: "Eve", email: "eve@example.com", age: 35, balance: 10000, isActive: true },
];

// all active users
const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);

// total balance of all users
const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
console.log(totalBalance);

// Find a user by email
const user = users.find(user => user.email == "charlie@example.com");
console.log(user);

// sort users by age
const sortedUsers = users.sort((a, b) => a.age - b.age);
console.log(sortedUsers);

// Increase each user's balance by 10%
const updatedUsers = users.map(user => ({
    ...user,
    balance: user.balance * 1.10
}));
console.log(updatedUsers);

// Check if any user is under 25
const hasYoungUser = users.some(user => user.age < 25);
console.log(hasYoungUser);

// Check if all users have a balance over 2000
const allHaveHighBalance = users.every(user => user.balance > 2000);
console.log(allHaveHighBalance);

// Get a list of user names
const names = users.map(user => user.name);
console.log(names);

// Count users with a balance of at least 5000
const highBalanceUsers = users.filter(user => user.balance >= 5000);
const count = highBalanceUsers.length;
console.log(count);

// Remove a user by ID 
const usersWithoutId3 = users.filter(user => user.id !== 3);
console.log(usersWithoutId3);
