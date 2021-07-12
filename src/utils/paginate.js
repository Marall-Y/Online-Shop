import _ from "lodash";

export function paginate(pageNumber, pageSize, products) {
  const startIndex = (pageNumber - 1) * pageSize;

  return _(products).slice(startIndex).take(pageSize).value();
}
