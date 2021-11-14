const apiKey = `23556027-7518a6338651e19ee58531f7f`;
const baseUrl = `https://pixabay.com/api/`;
const perPage = 12;

function ImagesFetch(querry, page) {
  return fetch(
    `${baseUrl}?q=${querry}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  )
    .then(response => response.json())
    .then(data => data.hits);
}

const ImagesApi = {
  ImagesFetch,
};

export default ImagesApi;
