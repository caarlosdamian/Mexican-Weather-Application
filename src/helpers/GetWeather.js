const GetWeather = async (name) => {
  const url = `http://api.weatherstack.com/current?access_key=830d3fd77f04bf6913ce4847ffc1bef0&query=${name}`;
  const response = await fetch(url).then((res) => res.json());
  //   const data = response.json();
  const { temperature } = response.current;
  console.log(temperature);
  return temperature;
};

export default GetWeather;
