import routes from '../routes';

export const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400); // 잘못된 요청
    res.render('join', { pageTitle: 'Join' });
  } else {
    // To Do: Register User
    // To Do: log user id
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render('login', { pageTitle: 'Login' });
};
export const postLogin = (req, res) => {
  console.log(req.body);
  const {
    body: { email, password }
  } = req;
  // console.log(email);
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: process log out
  res.redirect(routes.home);
};

export const users = (req, res) => res.send('users');

export const editProfile = (req, res) => {
  res.render('editProfile', {
    pageTitle: 'edit profile'
  });
};

export const changePassword = (req, res) => {
  res.render('changePassword', {
    pageTitle: 'change password'
  });
};

export const uerDetail = (req, res) => {
  res.render('userDetail', { pageTitle: 'User Profile' });
};
