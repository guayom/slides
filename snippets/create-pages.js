module.exports = function(api) {
  api.createPages(({ createPage }) => {
    createPage({
      path: "/my-page",
      component: "./src/templates/MyPage.vue"
    });
  });
};
