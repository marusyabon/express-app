
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {title: 'Lorem ipsum', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', user_id: 1},
        {title: 'Egestas maecenas pharetra ', body: 'Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Aenean et tortor at risus viverra adipiscing at in tellus. Ultricies integer quis auctor elit sed vulputate mi sit. Dui accumsan sit amet nulla. Senectus et netus et malesuada fames ac turpis egestas sed.', user_id: 2},
        {title: 'Aenean', body: 'Aenean euismod elementum nisi quis eleifend. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Ultrices eros in cursus turpis massa tincidunt dui ut. Orci ac auctor augue mauris augue neque gravida in fermentum. Lacus vel facilisis volutpat est velit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sit amet luctus venenatis lectus.', user_id: 3},
      ]);
    });
};
