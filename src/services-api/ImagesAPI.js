const API_KEY = `23556027-7518a6338651e19ee58531f7f`;
const BASE_URL = `https://pixabay.com/api/`;
const perPage = 12;

function ImagesFetch(searchQuery, page = 1) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Ошибка на сервере'));
    })
    .then(data => data.hits);
}

const ImagesApi = {
  ImagesFetch,
};

export default ImagesApi;
