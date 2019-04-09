export const join = (req, res) => res.render('join', { pageTitle: 'Join' });
export const login = (req, res) => res.render('login', { pageTitle: 'Login' });

export const logout = (req, res) => res.send('logout');
export const users = (req, res) => res.send('users');
export const uerDetail = (req, res) => res.send('uerDetail');
export const editProfile = (req, res) => res.send('editProfile');
export const changePassword = (req, res) => res.send('changePassword');