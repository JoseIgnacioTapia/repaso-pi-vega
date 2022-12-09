// esto es una action creator
// es como una impresora de papelitos
export const GET_USERS = "GET_USERS";
export const CLEAN_USERS = "CLEAN_USERS";

export const getUsers = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: GET_USERS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const cleanUsers = () => {
  return {
    type: CLEAN_USERS,
  };
};

// EL REDUCER DEBE SER UNA FUNCIÓN PURA!
//

// fetch("www.hola.com/users") =>

// => OK => Info de los usuarios

// => se cayó el servidor
// => se prendió fuego la base de datos
// => la api ya no existe
// => la información que venía cambió
