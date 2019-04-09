import { videoList } from '../db.js';

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

export const upload = (req, res) => {
  res.render('upload', { pageTitle: 'video upload' });
};

export const videoDetail = (req, res) => res.send('videoDetail');

export const editVideo = (req, res) => {
  res.render('editVideo', { pageTitle: 'edit video' });
};

export const deleteVideo = (req, res) => res.send('deleteVideo');
