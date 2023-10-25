let user = {
  name: "Yana",
  age: 25,
  articles: [{ name: "JS" }, { name: "React" }, { name: "Vue" }, { name: "Cource" }],
};

const getUserArticleCount = (user) => {
  console.log(`User has ${user.articles.length} articles`);

  switch (user.articles.length) {
    case 0:
    case 1:
        console.log("Lets write more articles!");
        break;

        case 2:
    case 3:
        console.log("Very good!");
        break;

        default:
        console.log("Its so wonderful!");
        break;
  }

//   switch (true) {
//     case user.articles.length < 2:
//       console.log("Lets write more articles!");
//       break;

//       case user.articles.length < 4:
//       console.log("Very good!");
//       break;

//       default:
//       console.log("Its so wonderful!");
//       break;
//   }
};

getUserArticleCount(user);