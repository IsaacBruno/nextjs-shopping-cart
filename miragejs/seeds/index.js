const productsSeeder = (server) => {
  server.createList('product', 10);
};

export const seeds = (server) => {
  productsSeeder(server);
};
