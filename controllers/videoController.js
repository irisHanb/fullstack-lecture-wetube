export const home = (req, res) => res.render('home', { pageTitle: 'Home' });

export const search = (req, res) => {
  // console.log(req.query.term);
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  res.render('search', { pageTitle: 'Search', searchingBy });
};

export const videos = (req, res) => res.send('videos');
export const upload = (req, res) => res.send('upload');
export const videoDetail = (req, res) => res.send('videoDetail');
export const editVideo = (req, res) => res.send('editVideo');
export const deleteVideo = (req, res) => res.send('deleteVideo');