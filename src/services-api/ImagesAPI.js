const API_KEY = `23556027-7518a6338651e19ee58531f7f`;
const BASE_URL = `https://pixabay.com/api/`;
const perPage = 12;

function ImagesFetch(searchQuery, page = 1) {
  return fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  )
    .then(response => response.json())
    .then(data => data.hits);
}

const ImagesApi = {
  ImagesFetch,
};

export default ImagesApi;
