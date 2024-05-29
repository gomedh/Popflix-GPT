import { useDispatch } from 'react-redux';
import openai from '../utils/openAI';
import { gptDefaultSearchMessage, GPTSearchLimitMessage, GPTExampleResult } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import useSearchMovieTMDB from './useSearchMovieTMDB';

const useHandleGptSearchClick = (searchText) => {
  const dispatch = useDispatch();
  const searchMovieTMDB = useSearchMovieTMDB();

  const handleGptSearchClick = async () => {
    const gptQuery = gptDefaultSearchMessage + searchText.current.value + GPTSearchLimitMessage + GPTExampleResult;

    // Searching the openAPI for the results
    try {
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo-16k',
      });

      if (!gptResult.choices) {
        console.log('No result found');
        return;
      }

      const gptMoviesNames = gptResult.choices[0]?.message?.content.split(',');

      const promiseArray = gptMoviesNames.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(addGptMovieResult({ movieNames: gptMoviesNames, movieResults: tmdbResults }));
    } catch (error) {
      console.log('Error occurred:', error);
    }
  };

  return handleGptSearchClick;
};

export default useHandleGptSearchClick;
