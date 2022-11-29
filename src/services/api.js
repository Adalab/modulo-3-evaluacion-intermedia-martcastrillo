
const fetchAdalabers = () => {
   
    return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json') // Este 5 es el id de Leia Skywalker
      .then((response) => response.json())
      .then((response) => {
        // Cuando responde la API podemos limpiar los datos aquí
        const results =  response.results;
        return results;
      });
  };
  
  export default fetchAdalabers;