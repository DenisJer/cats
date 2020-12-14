const root = {
  path: 'cats',
  fullPath: '/cats'
};

const search = {
  path: 'search',
  fullPath: `${root.fullPath}/search`
};

const catDetails = {
  path: 'cat/:id',
  fullPath: `${root.fullPath}/cat/:id`
};

export const CatsPaths = {
  root,
  search,
  catDetails
};
