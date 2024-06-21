import bcrypt from 'bcryptjs';
const users=[
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Person1',
        email:'p1@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:'p2',
        email:'p2@gmail.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
]
export default users;