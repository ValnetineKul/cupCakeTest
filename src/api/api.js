import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books'
});

export const fetchItemsFromBackend = () => instance.get()
  .then(response => {
      if (response.request.status === 200) {
        return response.data;
      }
    }
  );
