import MenuPage from "@/components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}data`);
  const data = await response.json();
  //   console.log(data);
  return {
    props: { data },
    revalidate: +process.env.REVALIDATE
  };
}
