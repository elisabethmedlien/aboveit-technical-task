export const APIKEY = `8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2`;

export const config = {
  key: APIKEY,
  limit: 100,
  fsym: 'BTC',
  tsym:'USD' 
};

export const url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${config.fsym}&tsym=${config.tsym}&limit=${config.limit}&api_key=${config.key}`;

export async function fetchAPI() {

  let response =  await fetch(url)
  .then(response => response.json()).then(json => json.Data);

  return response;

};

export const convertToDate = unixtimestamp => {

  const milliseconds = unixtimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const date = dateObject.toDateString().substring(4); // removing name of weekday

  return date;

};