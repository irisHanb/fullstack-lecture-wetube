import { videoList } from '../db';
import routes from '../routes';

export const home = (req, res) => {
  // console.log(videos);
  res.render('home', { pageTitle: 'Home', videoList });
};

export const search = (req, res) => {
  // console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy, videoList });
};

export const videos = (req, res) => res.send('videos');

export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'video upload' });
};
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do: upload and save video
  res.redirect(routes.videoDetail(333333));
};

export const videoDetail = (req, res) => {
  res.render('videoDetail', { pageTitle: 'Video Detail' });
};

export const editVideo = (req, res) => {
  res.render('editVideo', { pageTitle: 'edit video' });
};

export const deleteVideo = (req, res) => res.send('deleteVideo');
