exports.getSameFields = (obj, model) => {
  let schemaFields = [];

  model.schema.eachPath(function (path) {
    schemaFields.push(path);
  });

  let keys = Object.keys(obj);
  let selected = keys.filter(key => schemaFields.includes(key));

  return selected;
}
