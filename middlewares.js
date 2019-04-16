import routes from './routes';
import multer from 'multer';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1
  };
  next();
};

const multerVideo = multer({ dest: 'uploads/videos/' });
const multerAvatar = multer({ dest: 'uploads/avatar' });

export const uploadVideo = multerVideo.single('videoFile');
// export const uploadVideo = multerAvatar.single('videoFile');
