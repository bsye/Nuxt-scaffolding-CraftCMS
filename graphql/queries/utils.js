const dispatchQuery =  function (query) {
  let request = [];
  try {
    query.forEach((item, key) => {
      if (!item) return false;
        const q = require(`./block/${item}`).default();
        request.push(q);
    });
  } catch (error) {
    return {};
  }

  if (process.env.DEBUG_QUERY == "true") {
    console.log(request);
  }
  return request;
}


export {
  dispatchQuery,
};