export const getMovies = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

export const storeMovie = async (movie) => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      });
  
      await response.json();
      // Falta limpiar los inputs
      document.querySelector("form").reset();
  
      console.log("success");
    } catch (error) {
      console.log(error.message);
    }
  };