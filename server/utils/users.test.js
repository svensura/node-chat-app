const expect = require('expect');

const {Users} = require('./users')

describe('Users', () =>{

    var users;

    beforeEach(() => {
        users = new Users;
        users.users = [{
            id: '1',
            name: 'User1',
            room: 'Room1'
        }, {
            id: '2',
            name: 'User2',
            room: 'Room2'
        },{
            id: '3',
            name: 'User3',
            room: 'Room1'
        }];

    })


    it('should add new user', () => {
        var users = new Users;
        var user = {
            id: '123',
            name: 'Andrew',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user])
        //expect(resUser).toBe(user);
     })

     it('should remove a user', () => {
        var id = '1'
        var user = users.removeUser(id);
        expect(users.users.length).toBe(2);
        expect(user.id).toBe(id);
        
     })

     it('should not remove a user', () => {
        var id = '4'
        var user = users.removeUser(id);
        expect(users.users.length).toBe(3);
        expect(user).toBeFalsy;
     })

     it('should find a user', () => {
        var id = '1';
        var user = users.getUser(id);
        expect(user.id).toBe(id);  
     })

     it('should find not a user', () => {
        var id = '4'
        var user = users.getUser(id);
        expect(user).toBeFalsy;
     })

     it('should return names for room1', () => {
        var userList = users.getUserList('Room1');
        expect(userList).toEqual(['User1', 'User3'])
        
     })


     it('should return names for room2', () => {
        var userList = users.getUserList('Room2');
        expect(userList).toEqual(['User2'])
        
     })
});



