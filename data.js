const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name:'Hoang'  ,role: ROLE.ADMIN},
        {id: 2, name:'HoangA' ,role: ROLE.BASIC},
        {id: 3, name:'HoangB' ,role: ROLE.BASIC}
    ],
    projects: [
        {id: 1, name:'Hoang Project'  ,userId: 1},
        {id: 2, name:'HoangA Project' ,userId: 2},
        {id: 3, name:'HoangB Project' ,userId: 3}
    ]
}