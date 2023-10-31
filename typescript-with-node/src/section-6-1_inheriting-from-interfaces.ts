enum PermissionsList {
	execute = 'execute',
	read = 'read',
	write = 'write',
}

enum Roles {
	admin = 'admin',
	author = 'author',
	editor = 'editor',
}

interface Role {
	role: Roles;
}

interface UserPermissions {
	permissions: PermissionsList[];
}

interface User {
	name: string;
	email: string;
	phone: string;
	gender: 'male' | 'female';
}

interface AdminUser extends User, Role, UserPermissions {
	numberOfUsersReporting: number;
}

const admin1: AdminUser = {
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
