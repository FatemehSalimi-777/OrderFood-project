import CategoriesPage from "@/components/templates/CategoriesPage";

function Categories({ data }) {
  console.log(data);
  return <CategoriesPage data={data} />;
}

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const response = await fetch(`${process.env.BASE_URL}data`);
  const data = await response.json();

  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = food.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const timeDetail = cookingTime.split(" ")[0];

      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });
    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    } else if (time && !difficultyResult && timeResult.length) {
      return food;
    }
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
