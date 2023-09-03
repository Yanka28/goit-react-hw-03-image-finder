import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=38400956-ed3ce45b124f70d420fda24dd';

export const fetchPhotos = async () => {
  const resp = await axios.get('/request');
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
