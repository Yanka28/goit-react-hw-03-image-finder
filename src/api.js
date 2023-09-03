import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/?key=38400956-ed3ce45b124f70d420fda24dd&`;

// export const fetchPhotos = async request => {
//   const resp = await axios.get(
//     `q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
//   );
//   console.log(resp.data);
//   return resp.data;
// };

export const fetchPhotos = async newquery => {
  axios.defaults.baseURL = `https://pixabay.com/api/?key=38400956-ed3ce45b124f70d420fda24dd&`;
  const resp = await axios.get(
    `q=${newquery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`
  );
  // this.setState{
  //   photos=resp.data
  // }
  console.log(resp.data);
  return resp.data;
};
// export const deleteQuizById = async quizId => {
//   const resp = await axios.delete(`/quizzes/${quizId}`);
//   return resp.data;
// };

// export const createQuiz = async quiz => {
//   const resp = await axios.post('/quizzes', quiz);
//   return resp.data;
// };
