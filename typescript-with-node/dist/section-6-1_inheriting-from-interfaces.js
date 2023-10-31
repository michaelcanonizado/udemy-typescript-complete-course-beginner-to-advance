"use strict";
var PermissionsList;
(function (PermissionsList) {
    PermissionsList["execute"] = "execute";
    PermissionsList["read"] = "read";
    PermissionsList["write"] = "write";
})(PermissionsList || (PermissionsList = {}));
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
const admin1 = {
    name: 'Rob Deniel',
    email: 'robbyDeyn@gmail.com',
    phone: '09123456789',
    gender: 'male',
    role: Roles.admin,
    permissions: [
        PermissionsList.write,
        PermissionsList.read,
        PermissionsList.execute,
    ],
    numberOfUsersReporting: 1000,
};
console.log(admin1);
