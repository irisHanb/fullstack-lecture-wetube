// import { videoList } from '../db';
import routes from '../routes';
import Video from '../models/Video';

export const home = async (req, res) => {
  try {
    const videoList = await Video.find({});
    res.render('home', { pageTitle: 'Home', videoList });
  } catch (err) {
    console.log(err);
    res.render('home', { pageTitle: 'Home', videoList: [] });
  }
};

export const search = (req, res) => {
  // console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy, videoList });
};

export const videos = (req, res) => res.send('videos');

//== upload
export const getUpload = (req, res) => {
  res.render('upload', { pageTitle: 'video upload' });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(path);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  console.log(req.params);
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('videoDetail', { pageTitle: 'Video Detail', video });
  } catch (err) {
    console.log(err);
    res.redirect(routes.home);
  }
};

//=== edit
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render('editVideo', { pageTitle: `edit ${video.title}`, video });
  } catch (err) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findByIdAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (err) {}
};

export const deleteVideo = (req, res) => res.send('deleteVideo');
